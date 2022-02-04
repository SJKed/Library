import Vue from 'vue'
import Vuex from 'vuex'
import library from "../assets/library.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    library: [...library]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
