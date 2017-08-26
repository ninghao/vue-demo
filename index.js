const mapGetters = Vuex.mapGetters

const store = new Vuex.Store({
  state: {
    count: []
  },
  mutations: {
    add(state, payload) {
      state.count.push(payload)
    },
    remove(state) {
      state.count.pop()
    }
  },
  getters: {
    sum(state) {
      return state.count.reduce((a, b) => a + b, 0)
    },
    total(state) {
      return state.count.length
    },
    average(state, getters) {
      return +(getters.sum / getters.total * 100 / 100).toFixed(1)
    }
  }
})

const AddButton = {
  template: `
    <button class="ui button" @click="add">Add</button>
  `,
  methods: {
    add() {
      this.$store.commit('add', Math.floor(Math.random() * (10 - 1) + 1))
    }
  }
}

const RemoveButton = {
  template: `
    <button class="ui button" @click="remove">Remove</button>
  `,
  methods: {
    remove() {
      this.$store.commit('remove')
    }
  }
}

const Counter = {
  template: `
    <div>
      <add-button></add-button>
      <remove-button></remove-button>
      <div class="ui red circular label">
        {{ average }}
      </div>
      <div class="ui divider"></div>
      共 {{ total }} 个项目，合计 {{ sum }} 。
    </div>
  `,
  components: { AddButton, RemoveButton },
  computed: {
    ...mapGetters([
      'sum',
      'total',
      'average'
    ])
  }
}

const app = new Vue({
  el: '#app',
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})











//
