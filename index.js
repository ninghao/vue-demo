Vue.component('ui-button', {
  template: '<button class="ui button">{{ text }}</button>',
  props: ['text']
})

var dataSource = {
  published: false
}

var vm = new Vue({
  el: '#app',
  data: dataSource
})
