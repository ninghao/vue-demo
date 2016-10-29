var dataSource = {
  counter: 0
}

var vm = new Vue({
  el: '#app',
  data: dataSource,
  methods: {
    like (event) {
      this.counter += 1
      console.log(event)
    }
  }
})
