var uiButton = {
  template: '<button class="ui button">button</button>'
}

var dataSource = {

}

var vm = new Vue({
  el: '#app',
  data: dataSource,
  components: {
    'ui-button': uiButton
  }
})
