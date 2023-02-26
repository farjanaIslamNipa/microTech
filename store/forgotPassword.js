import responseErrorHandler from "../helper/responseErrorHandler";


export const actions = {

  async postForgotPassword(_, data) {
    const path = `v1/forgot-password`;

    return await this.$axios.post(path, data).then((response) => {
      return {
        message: response.data.data.message,
        type: response.data.data.status,
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });

  }

};
