import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    states: 'turn-left'
  },
  mutations: {
    setTransition(state, states) {
        state.states = states
    }
  },
  actions: {

  }
})
