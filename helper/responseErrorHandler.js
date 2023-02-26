// import store from '@/store';
// import router from '@/router';
const responseErrorHandler = async (error) => {
  const store = window.$nuxt.$store;
  const router = window.$nuxt.$router;
  // if (error && error.response && (error.response.status === 401 || error.response.status === 419 )) {
  //   await store.dispatch('login/commitLogoutAttempt');
  //   await router.push({
  //     name: 'login',
  //   });

  //   // for closing all modal
  //   if (document.querySelector('[data-dismiss="modal"]')) {
  //     document.querySelector('[data-dismiss="modal"]').click();
  //   }


  // }
  if (error && error.response && error.response.status === 404) {
    // await store.dispatch('login/commitLogoutAttempt');
    // await router.push({
    //   name: 'index',
    //   // params: {
    //   //   initToastData: {
    //   //     message: error.response.data.message,
    //   //     type: 'error',
    //   //   }
    //   // }
    // });


    return error.response;
  }

  return !error.response || !error.response.status ? {
    message: "Network connection error",
    type: 'error',
  } : {
    message: error.response.data.message,
    type: 'error',
    code: error.response.data.code ?? null,
    exception: error.response.data.exception ?? null,
    status: error.response.status,
    errors: error.response.data.errors ?? {},
  };
}

export default responseErrorHandler;
