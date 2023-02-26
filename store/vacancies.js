import responseErrorHandler from "../helper/responseErrorHandler";

export const state = () => ({
  vacancies: [],
  paginateLinks: {},
  vacancy: {},
});


export const getters = {
  vacancies: (state) => {
    return state.vacancies;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  vacancy: (state) => {
    return state.vacancy;
  },
};


export const mutations = {
  SET_VACANCIES(state, vacancies) {
    state.vacancies = vacancies;
  },

  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_VACANCY(state, vacancy) {
    state.vacancy = vacancy;
  },

  CREATE_VACANCY_ON_LIST(state, vacancy) {
    state.vacancies.unshift(vacancy);
  },

  CREATE_VACANCY(state, vacancy) {
    state.vacancy = vacancy;
  },

  UPDATE_VACANCY_ON_LIST(state, vacancy) {
    let index = state.vacancies.findIndex(item => item.id === vacancy.id);
    state.vacancies.splice(index, 1, vacancy);
  },

  UPDATE_VACANCY(state, vacancy) {
    state.vacancy = vacancy;
  },

  DELETE_VACANCY_ON_LIST(state, vacancyId) {
    let index = state.vacancies.findIndex(item => item.id === vacancyId);
    state.vacancies.splice(index, 1);
  },

  DELETE_VACANCY(state) {
    state.vacancy = {};
  },

  RESET_VACANCIES(state) {
    state.vacancies = [];
  },

  RESET_VACANCY(state) {
    state.vacancy = {};
  },
};

export const actions = {
  commitSetVacancies: async ({ commit }, responseData) => {
    await commit('SET_VACANCIES', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetVacancy: async ({ commit }, responseData) => {
    await commit('SET_VACANCY', responseData.data)
  },

  commitCreateVacancyOnList: async ({ commit }, responseData) => {
    await commit('CREATE_VACANCY_ON_LIST', responseData.data);
  },

  commitCreateVacancy: async ({ commit }, responseData) => {
    await commit('CREATE_VACANCY', responseData.data);
  },

  commitUpdateVacancyOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_VACANCY_ON_LIST', responseData.data);
  },

  commitUpdateVacancy: async ({ commit }, responseData) => {
    await commit('UPDATE_VACANCY', responseData.data);
  },

  commitDeleteVacancyOnList: async ({ commit }, vacancyId) => {
    await commit('DELETE_VACANCY_ON_LIST', vacancyId);
  },

  commitDeleteVacancy: async ({ commit }) => {
    await commit('DELETE_VACANCY');
  },

  commitResetVacancies: async ({ commit }) => {
    await commit('RESET_VACANCIES');
  },

  commitResetVacancy: async ({ commit }) => {
    await commit('RESET_VACANCY');
  },

  // get list of vacancy by api call.
  async getVacancies({ dispatch }, params = {}) {
    const path = `v1/vacancies`;

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetVacancies', response.data);
      dispatch('commitSetPaginateLinks', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get single vacancy by api call.
  async getVacancy({ dispatch }, paramObj) {
    const path = `v1/vacancies/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetVacancy', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get single vacancy by slug by api call.
  async getVacancyBySlug({ dispatch }, paramObj) {
    const path = `v1/vacancies/slug/${paramObj.slug}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetVacancy', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new vacancy on list by api call.
  async postVacancyOnList({ dispatch }, data) {
    const path = `v1/vacancies`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateVacancyOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new vacancy by api call.
  async postVacancy({ dispatch }, data) {
    const path = `v1/vacancies`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateVacancy', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing vacancy on list by api call.
  async putVacancyOnList({ dispatch }, dataObj) {
    const path = `v1/vacancies/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateVacancyOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing vacancy by api call.
  async putVacancy({ dispatch }, dataObj) {
    const path = `v1/vacancies/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateVacancy', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular vacancy on list by api call.
  async deleteVacancyOnList({ dispatch }, id) {
    const path = `v1/vacancies/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteVacancyOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular vacancy by api call.
  async deleteVacancy({ dispatch }, id) {
    const path = `v1/vacancies/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteVacancy', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset vacancies state.
  async resetVacancies({ dispatch }) {
    dispatch('commitResetVacancies');
  },

  // reset vacancy state.
  async resetVacancy({ dispatch }) {
    dispatch('commitResetVacancy')
  },
}
