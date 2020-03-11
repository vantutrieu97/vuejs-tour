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
  }
});
