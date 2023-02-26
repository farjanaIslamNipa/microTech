import responseErrorHandler from "../helper/responseErrorHandler";

export const state = () => ({
  authUser: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    role: null,
    avatar: null,
  },

  authCustomer: {
    id: null,
    type: null,
    referralCode: null,
    newsletterSubscription: null,
  },

  authToken: {
    accessToken: null,
    tokenType: null,
  },

  authPermissions: [],
});


export const getters = {
  isAuthenticated: (state) => {
    return !!(state.authToken.accessToken && state.authUser.id && state.authCustomer.id);
  },

  authUser: (state) => {
    return state.authUser;
  },

  authCustomer: (state) => {
    return state.authCustomer;
  },

  authToken: (state) => {
    return state.authToken;
  },

  authPermissions: (state) => {
    return state.authPermissions;
  },
};

export const mutations = {
  SET_AUTH_USER: (state, authUser) => {
    state.authUser.id = authUser.id;
    state.authUser.firstName = authUser.first_name;
    state.authUser.lastName = authUser.last_name;
    state.authUser.email = authUser.email;
    state.authUser.role = authUser.role;
    state.authUser.avatar = authUser.avatar;
  },

  SET_AUTH_CUSTOMER: (state, authCustomer) => {
    state.authCustomer.id = authCustomer.id;
    state.authCustomer.type = authCustomer.type;
    state.authCustomer.referralCode = authCustomer.referral_code;
    state.authCustomer.newsletterSubscription = authCustomer.newsletter_subscription;
  },

  SET_AUTH_TOKEN: (state, authToken) => {
    state.authToken.accessToken = authToken.access_token;
    state.authToken.tokenType = authToken.token_type;
  },

  SET_AUTH_PERMISSIONS: (state, authPermissions) => {
    state.authPermissions = authPermissions;
  },
};

export const actions = {
  async logIn({ dispatch }, credentials) {
    const path = `v1/login-token`;

    return await this.$axios.post(path, credentials).then((response) => {
      dispatch("commitAuthAttempt", response.data);

      return {
        message: "Login Successful",
        type: "success",
        status: response.status,
      };
    }).catch((error) => {
      dispatch("commitFailedAuthAttempt");

      return responseErrorHandler(error);
    });
  },

  async commitAuthAttempt({ commit }, responseData) {
    if (responseData.data.user) {
      localStorage.setItem('authUser', JSON.stringify(responseData.data.user));
      await commit('SET_AUTH_USER', responseData.data.user);
    }
    else {
      localStorage.removeItem('authUser');
    }

    if (responseData.data.customer) {
      localStorage.setItem('authCustomer', JSON.stringify(responseData.data.customer));
      await commit('SET_AUTH_CUSTOMER', responseData.data.customer);
    }
    else {
      localStorage.removeItem('authCustomer');
    }

    if (responseData.data.token) {
      let tokenType = responseData.data.token.token_type;
      let accessToken = responseData.data.token.access_token;

      // this.$axios.defaults.headers.common['Authorization'] = `hmmm`;
      this.$axios.defaults.headers.common['Authorization'] = `${tokenType} ${accessToken}`;

      localStorage.setItem('authToken', JSON.stringify(responseData.data.token));
      await commit('SET_AUTH_TOKEN', responseData.data.token);
    }
    else {
      this.$axios.defaults.headers.common['Authorization'] = null;
      localStorage.removeItem('authToken');
    }

    if (responseData.data.permissions) {
      localStorage.setItem('authPermissions', JSON.stringify(responseData.data.permissions));
      await commit('SET_AUTH_PERMISSIONS', responseData.data.permissions);
    }
    else {
      localStorage.removeItem('authPermissions');
    }
  },

  async commitAuthAttemptFromLocalStorage({ commit }) {


    if (localStorage.getItem('authUser') !== null) {
      await commit('SET_AUTH_USER', JSON.parse(localStorage.getItem('authUser')));
    }

    if (localStorage.getItem('authCustomer') !== null) {
      await commit('SET_AUTH_CUSTOMER', JSON.parse(localStorage.getItem('authCustomer')));
    }

    if (localStorage.getItem('authToken') !== null) {
      let tokenType = JSON.parse(localStorage.getItem('authToken')).token_type;
      let accessToken = JSON.parse(localStorage.getItem('authToken')).access_token;
      this.$axios.defaults.headers.common['Authorization'] = `${tokenType} ${accessToken}`;
      await commit('SET_AUTH_TOKEN', JSON.parse(localStorage.getItem('authToken')));
    }

    if (localStorage.getItem('authPermissions') !== null) {
      await commit('SET_AUTH_PERMISSIONS', JSON.parse(localStorage.getItem('authPermissions')));
    }
  },


  commitFailedAuthAttempt: async ({ commit }) => {

    await commit('SET_AUTH_USER', { id: null, first_name: null, last_name: null, email: null, role: null, avatar: null });
    await commit('SET_AUTH_CUSTOMER', { id: null, type: null, referralCode: null, newsletterSubscription: null });
    await commit('SET_AUTH_TOKEN', { access_token: null, token_type: null });
    await commit('SET_AUTH_PERMISSIONS', []);

  },


  commitLogoutAttempt: async ({ commit }) => {

    if (localStorage.getItem('authUser') !== null) {
      localStorage.removeItem('authUser');
    }
    await commit('SET_AUTH_USER', { id: null, first_name: null, last_name: null, email: null, role: null, avatar: null });




    if (localStorage.getItem('authCustomer') !== null) {
      localStorage.removeItem('authCustomer');
    }
    await commit('SET_AUTH_CUSTOMER', { id: null, type: null, referralCode: null, newsletterSubscription: null });




    if (localStorage.getItem('authToken') !== null) {
      localStorage.removeItem('authToken');
    }
    await commit('SET_AUTH_TOKEN', { access_token: null, token_type: null });




    if (localStorage.getItem('authPermissions') !== null) {
      localStorage.removeItem('authPermissions');
    }
    await commit('SET_AUTH_PERMISSIONS', []);






    // await commit('login/SET_AUTH_USER', { id: null, first_name: null, last_name: null, email: null, role: null, avatar: null }, { root: true });
    // await commit('login/SET_AUTH_CUSTOMER', { id: null, type: null, referralCode: null, newsletterSubscription: null }, { root: true });
    // await commit('login/SET_AUTH_TOKEN', { access_token: null, token_type: null }, { root: true });
    // await commit('login/SET_AUTH_PERMISSIONS', [], { root: true });
  },
};
