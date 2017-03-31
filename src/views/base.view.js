import Component from 'vue-class-component'
import Vue from 'vue'

@Component({})
/**
 * 此处是vue组件的基类
 * 包含了一些通用的方法
 */
export class BaseView extends Vue {

  beforeCreate() {
    this.defaultHeader = { title: '猫眼电影' }
    this.headerConfig = { title: '猫眼电影' }
  }
  mounted() {
    this.$nextTick(() => {
      // 自动设置标题
      if (this.headerConfig !== this.defaultHeader) {
        document.title = this.headerConfig.title
      }
    })
  }
}
