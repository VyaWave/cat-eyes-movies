import Vue from 'vue'

Vue.directive('open-files', {
  bind: function () {
    const self = this
    const fileChosen = function () {
      const items = []
      const onCompleted = (files) => {
        if (self.expression) {
          self.vm[self.expression](files)
        }
      }
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i]
        let item = {
          data: file
        }
        items.push(item)
        const reader = new FileReader()
        reader.onload = () => {
          item.url = URL.createObjectURL(file)
          if (i === (this.files.length - 1)) {
            onCompleted(items)
          }
        }
        reader.readAsDataURL(file)
      }
    }

    const chooseFile = function (e) {
      const input = document.createElement('INPUT')
      input.setAttribute('type', 'file')
      if (self.modifiers.multiple) {
        input.setAttribute('multiple', 'multiple')
      }
      if (self.modifiers.image) {
        input.setAttribute('accept', 'image/png,image/gif,image/jpeg')
      }
      input.setAttribute('style', 'display: none;')
      self.el.parentNode.appendChild(input)
      input.addEventListener('change', fileChosen, false)
      // Auto fire the event
      const evt = document.createEvent('MouseEvent')
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      input.dispatchEvent(evt)
    }

    this.el.addEventListener('click', e => {
      chooseFile(e)
    })
  }
})
