import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  appointments: [],
  paginateLinks: {},
  appointment: {},
  appointmentNotes: [],
  appointmentHistories: [],
  onSiteAddressDistance: {},
});


export const getters = {
  appointments: (state) => {
    return state.appointments;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  appointment: (state) => {
    return state.appointment;
  },
  appointmentNotes: (state) => {
    return state.appointmentNotes;
  },

  appointmentHistories: (state) => {
    return state.appointmentHistories;
  },

  onSiteAddressDistance: (state) => {
    return state.onSiteAddressDistance;
  },
};


export const mutations = {
  SET_APPOINTMENTS(state, appointments) {
    state.appointments = appointments;
  },
  SET_APPOINTMENT_NOTE(state, appointmentNotes) {
    state.appointmentNotes = appointmentNotes;
  },

  SET_APPOINTMENT_HISTORIES(state, appointmentHistories) {
    state.appointmentHistories = appointmentHistories;
  },

  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_APPOINTMENT(state, appointment) {
    state.appointment = appointment;
  },

  CREATE_APPOINTMENT_ON_LIST(state, appointment) {
    state.appointments.unshift(appointment);
  },

  CREATE_APPOINTMENT(state, appointment) {
    state.appointment = appointment;
  },

  UPDATE_APPOINTMENT_ON_LIST(state, appointment) {
    let index = state.appointments.findIndex(item => item.id === appointment.id);
    state.appointments.splice(index, 1, appointment);
  },

  UPDATE_APPOINTMENT(state, appointment) {
    state.appointment = appointment;
  },

  DELETE_APPOINTMENT_ON_LIST(state, appointmentId) {
    let index = state.appointments.findIndex(item => item.id === appointmentId);
    state.appointments.splice(index, 1);
  },

  DELETE_APPOINTMENT(state) {
    state.appointment = {};
  },

  RESET_APPOINTMENTS(state) {
    state.appointments = [];
  },

  RESET_APPOINTMENT(state) {
    state.appointment = {};
  },

  SET_ON_SITE_ADDRESS_DISTANCE(state, onSiteAddressDistance) {
    state.onSiteAddressDistance = onSiteAddressDistance;
  },
};

export const actions = {
  commitSetAppointments: async ({ commit }, responseData) => {
    await commit('SET_APPOINTMENTS', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetAppointment: async ({ commit }, responseData) => {
    await commit('SET_APPOINTMENT', responseData.data)
  },

  commitCreateAppointmentOnList: async ({ commit }, responseData) => {
    await commit('CREATE_APPOINTMENT_ON_LIST', responseData.data);
  },

  commitCreateAppointment: async ({ commit }, responseData) => {
    await commit('CREATE_APPOINTMENT', responseData.data);
  },

  commitUpdateAppointmentOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_APPOINTMENT_ON_LIST', responseData.data);
  },

  commitUpdateAppointment: async ({ commit }, responseData) => {
    await commit('UPDATE_APPOINTMENT', responseData.data);
  },

  commitDeleteAppointmentOnList: async ({ commit }, appointmentId) => {
    await commit('DELETE_APPOINTMENT_ON_LIST', appointmentId);
  },

  commitDeleteAppointment: async ({ commit }) => {
    await commit('DELETE_APPOINTMENT');
  },

  commitResetAppointments: async ({ commit }) => {
    await commit('RESET_APPOINTMENTS');
  },

  commitResetAppointment: async ({ commit }) => {
    await commit('RESET_APPOINTMENT');
  },

  commitOnSiteAddressDistance: async ({ commit }, responseData) => {
    await commit('SET_ON_SITE_ADDRESS_DISTANCE', responseData.data);
  },

  commitSetAppointmentNotes: async ({ commit }, responseData) => {
    await commit('SET_APPOINTMENT_NOTE', responseData.data);
  },


  commitSetAppointmentHistories: async ({ commit }, responseData) => {
    await commit('SET_APPOINTMENT_HISTORIES', responseData.data);
  },





  // get list of appointment by api call.
  async getAppointments({ dispatch }, params = {}) {
    const path = `v1/appointments`;

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetAppointments', response.data);
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

  // get single appointment by api call.
  async getAppointment({ dispatch }, paramObj) {
    const path = `v1/appointments/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetAppointment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },
  // get single appointment by uuid .
  async getAppointmentByUUID({ dispatch }, paramObj) {
    const path = `v1/appointments/uuid/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetAppointment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },
  // get single appointment by uuid .
  async getAppointmentByReference({ dispatch }, paramObj) {
    const path = `v1/appointments/reference/${paramObj.reference}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetAppointment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get appointment notes by api call.
  async getAppointmentNotes({ dispatch }, paramObj) {
    const path = `v1/appointment-notes`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetAppointmentNotes', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get appointment history by api call.
  async getAppointmentHistories({ dispatch }, paramObj) {
    const path = `v1/appointment-histories`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetAppointmentHistories', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new appointment on list by api call.
  async postAppointmentOnList({ dispatch }, data) {
    const path = `v1/appointments`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateAppointmentOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new appointment by api call.
  async postAppointment({ dispatch }, data) {
    const path = `v1/appointments`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateAppointment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing appointment on list by api call.
  async putAppointmentOnList({ dispatch }, dataObj) {
    const path = `v1/appointments/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateAppointmentOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing appointment by api call.
  async putAppointment({ dispatch }, dataObj) {
    const path = `v1/appointments/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateAppointment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update appointment status by api call.
  async putAppointmentStatus(_, dataObj) {
    const path = `v1/appointments/${dataObj.id}/status`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {


      return {
        message: response.data.data,
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update appointment status update price charge calculation by api call.
  async putAppointmentStatusCharge(_, dataObj) {
    const path = `v1/appointments/${dataObj.id}/status-pre-update-charges`;
    const data = dataObj.data;

    return this.$axios.post(path, data).then((response) => {
      // dispatch('commitUpdateAppointment', response.data);
      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular appointment on list by api call.
  async deleteAppointmentOnList({ dispatch }, id) {
    const path = `v1/appointments/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteAppointmentOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular appointment by api call.
  async deleteAppointment({ dispatch }, id) {
    const path = `v1/appointments/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteAppointment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset appointments state.
  async resetAppointments({ dispatch }) {
    dispatch('commitResetAppointments');
  },

  // reset appointment state.
  async resetAppointment({ dispatch }) {
    dispatch('commitResetAppointment')
  },

  // get the address distance between customer and service provider by api call with post request.
  async postOnSiteAddressDistance({ dispatch }, data) {
    const path = `v1/appointments/on-site-address-distance`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitOnSiteAddressDistance', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // get pre store appointment data
  async preStoreAppointmentData(_, data) {
    const path = `v1/appointments/pre-store-appointment-data`;


    return this.$axios.post(path, data).then((response) => {
      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
  async appointmentCreators(_, data) {
    const path = `v1/appointment-creators`;

    return this.$axios.post(path, data).then((response) => {


      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
  async postAppointmentNotes(_, data) {
    const path = `v1/appointment-notes`;


    return this.$axios.post(path, data).then((response) => {

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
  async postAppointmentCharge(_, data) {
    const path = `v1/appointment-charges/store-list`;


    return this.$axios.post(path, data).then((response) => {


      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async postAppointmentTechnician(_, data) {
    const path = `v1/technician-appointments`;


    return this.$axios.post(path, data).then((response) => {


      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async postAppointmentPayments(_, data) {
    const path = `v1/appointment-payments`;


    return this.$axios.post(path, data).then((response) => {

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },


  async postAppointmentHistory(_, data) {
    const path = `v1/appointment-histories`;

    return this.$axios.post(path, data).then((response) => {

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // post appointment invoice
  async postAppointmentInvoice({ dispatch }, paramObj) {
    const path = `v1/appointments/invoice/${paramObj.uuid}`;
    const params = paramObj.params ?? {};
    return this.$axios.post(path, params).then((response) => {
      dispatch('commitSetAppointment', response.data);
      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);

    });
  },

  // appointment creation notify email
  async postAppointmentCreationNotifyEmail(_, paramObj) {
    const path = `v1/appointments/send-creation-notify/${paramObj.appointment}`;
    const params = paramObj.params ?? {};
    return this.$axios.post(path, params).then((response) => {
      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);

    });
  },





}

