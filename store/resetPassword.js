import responseErrorHandler from "../helper/responseErrorHandler";


export const actions = {

  async putResetPassword(_, data) {
    const path = `v1/reset-password`;

    return await this.$axios.put(path, data).then((response) => {
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
