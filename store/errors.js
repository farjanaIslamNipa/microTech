export const state = () => ({
  errors:{name:'asdf'}
});

export const getters = {
  errors: (state) => {
    return state.errors;
  },

};


export const mutations = {
  SET_ERRORS(state, errors) {
    state.errors = errors;
  },

  RESET_ERRORS(state) {
    state.errors = {};
  },



};


export const actions = {
  commitSetErrors: ({ commit }, responseData) => {
    commit("SET_ERRORS", responseData);
  },
  commitResetErrors: async ({ commit }) => {
    await commit("RESET_ERRORS");
  },

  resetErrors: async ({ dispatch }) => {
    dispatch("commitResetErrors");
  },

}









