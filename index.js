var dataSource = {
  selected: '',
  options: [
    { value: 'hello' },
    { value: 'hola' },
    { value: '您好' },
  ]
}

var vm = new Vue({
  el: '#app',
  data: dataSource
})
