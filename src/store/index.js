import { createStore } from 'vuex'

export default createStore({
  state: {
    navbar: false
  },
  
  mutations: {
    setNavbar(state){
     state.navbar = true
    }
  },
  actions: {
    setNav({commit}){
      commit('setNavbar')
    }
  },
  modules: {
  }
})
