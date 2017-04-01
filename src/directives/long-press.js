import Vue from 'vue'
const touch = 'ontouchstart' in window && 'ontouchend' in window

Vue.directive('long-press', {

  isFn: true,
  acceptStatement: true,

  _delay: (1000 / 60) * 10 * 3,
  _startEvent: touch ? 'touchstart' : 'mousedown',
  _endEvent: touch ? 'touchend' : 'mouseup',
  _cancelEvent: touch ? 'touchend' : 'mouseleave',
  _startHandler: null,
  _endHandler: null,
  _generatedHandler: null,

  bind (el) {
    // this.el = el
    console.log(this)
  },

  update (handler) {
    console.log(this)
    this.unbind()
    let timer = null
    let handled = true
    const element = this.el
    this._endHandler = () => {
      clearTimeout(timer)
      if (handler && !handled && touch) {
        // playback
        const target = element.querySelector('[data-long-press-deepest-target]') || element
        target.click()
      }
    }
    this._startHandler = (event) => {
      if (this.modifiers.self && event.target !== event.currentTarget) {
        return
      }
      if (handler) {
        handled = false
        if (touch) {
          event.preventDefault()
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
          handled = true
          handler(event)
        }, this._delay)
      }
    }
    element.addEventListener(this._startEvent, this._startHandler, this.modifiers.capture)
    element.addEventListener(this._endEvent, this._endHandler, this.modifiers.capture)
    element.addEventListener(this._cancelEvent, this._endHandler, this.modifiers.capture)
    if (!touch) {
      this._generatedHandler = (event) => {
        if (handled) {
          event.stopImmediatePropagation()
        }
      }
      element.addEventListener('click', this._generatedHandler, this.modifiers.capture)
    }
  },

  unbind () {
    const element = this.el
    element.removeEventListener(this._startEvent, this._startHandler, this.modifiers.capture)
    element.removeEventListener(this._endEvent, this._endHandler, this.modifiers.capture)
    element.removeEventListener(this._cancelEvent, this._endHandler, this.modifiers.capture)
    if (!touch) {
      element.removeEventListener('click', this._generatedHandler, this.modifiers.capture)
    }
  }
})
