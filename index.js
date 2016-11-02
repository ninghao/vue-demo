Vue.component('segment', {
  template: '\
    <div class="ui stacked segment">\
      <slot>:)</slot>\
    </div>\
  '
})

var dataSource = {

}

var vm = new Vue({
  el: '#app',
  data: dataSource
})
