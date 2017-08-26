const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state, payload) {
      state.count = state.count + payload
    }
  }
})
