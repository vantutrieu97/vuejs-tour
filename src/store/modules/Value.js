const state = {
  value: ""
};
const getters = {
  getValue: state => {
    return state.value;
  }
};

const mutations = {
  updateValueMutation(state, payload) {
    return state.value = payload;
  }
};
const actions = {
  updateValueAction: ({commit}, payload) => {
    commit('updateValueMutation', payload)
  }
};
export default {
  state,
  getters,
  mutations,
  actions,
}
