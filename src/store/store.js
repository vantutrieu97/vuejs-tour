import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    result: 0
  },
  getters: {
    getResult: state => {
      return state.result;
    },
    getTenResult: state => {
      return state.result * 10;
    },
    getNameResult: state => {
      return state.result + '\'s name :p';
    }
  },
  mutations: {
    incrementOption(state, option) {
      return state.result += option;
    },
    decrementOption(state, option) {
      return state.result -= option;
    }
  },
  actions: {
    incrementAction: ({commit}) => {
      commit('incrementOption', 1);
    },
    decrementAction: ({commit}) => {
      setTimeout(() => {
        commit('incrementOption', 444);
      }, 3000)
    }
  }
});
