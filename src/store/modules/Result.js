const state = {
  result: 0,
};
const getters = {
  getResult: state => {
    return state.result;
  },
  getTenResult: state => {
    return state.result * 10;
  },
  getNameResult: state => {
    return state.result + '\'s name :p';
  },
};
const mutations = {
  incrementOption(state, payload) {
    return state.result += payload;
  },
  decrementOption(state, payload) {
    return state.result -= payload;
  },
};
const actions = {
  incrementAction: ({commit}, payload) => {
    console.log('Run on action incrementAction...' + payload);
    commit('decrementOption', payload);
  },
  decrementAction: ({commit}, payload) => {
    console.log('Run on action decrementAction... wait me 3s');
    setTimeout(() => {
      commit('decrementOption', 246);
    }, 3000);
  },
};
export default {
  state,
  getters,
  mutations,
  actions
}
