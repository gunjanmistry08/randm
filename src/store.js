import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        dark: false
    },
    getters: {
        isDark(state) {
            return state.dark
        }
    },
    mutations: {
        toggle(state) {
            state.dark = !state.dark
        }
    },
    actions: {
        toggleDark({ commit }) {
            commit('toggle')
        }
    }
})

export default store