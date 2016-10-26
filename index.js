var dataSource = {
  message: 'hello'
}

var vm = new Vue({
  el: '#app',
  data: dataSource,
  beforeDestroy () {
    console.log('要被干掉了 ...')
  },
  destroyed () {
    console.log('bye bye ~')
  }
})

vm.$watch('message', function (newValue, oldValue) {
  console.log(newValue, oldValue)
})
