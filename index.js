Vue.component('ui-button', {
  template: '<button class="ui button">{{ text }}</button>',
  props: {
    text: {
      type: String,
      default: 'button',
      required: true,
      validator (value) {
        return value.length > 3
      }
    }
  }
})

var dataSource = {
  published: false
}

var vm = new Vue({
  el: '#app',
  data: dataSource
})
