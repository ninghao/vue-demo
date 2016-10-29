var dataSource = {

}

var vm = new Vue({
  el: '#app',
  data: dataSource,
  methods: {
    process (event) {
      console.log(event.target.value)
    }
  }
})
