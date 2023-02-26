<template>
        <div class="book-online-bg d-flex align-items-center py-5">
            <div class="container">
                <div class="bg-white form-width mx-auto py-5 px-sm-5 px-2 rounded success-form position-relative">
                    <!-- -------------- Success message ------------- -->
                    <div class="">
                        <div class="text-center">
                            <div class="appointmentSuccessfulWrapper">
                                <nuxt-img preload format="webp" quality="80" loading="lazy" style="height: 190px;" class="img-fluid" src="/images/global/submitted.gif" alt="Booking Success" />
                                <h1 class="" style="color: #F58220"><i class=''>Congratulations !</i> </h1>
                                <h4 class="" style="color: #5C5C5C">Your booking has been confirmed. Please check your email/phone for details!</h4>

                                <h5 class="appointmentId">Your reference number is : <span class="text-primary">{{this?.$route?.params?.reference}}</span></h5>
                                <h2 class="text-info py-3">{{this?.$route?.params?.description ?? ''}}</h2>

                                <!-- <div class="d-flex justify-content-center">
                                      <button @click="$router.push({ name: 'appointmentPayment', query: { reference: $props.reference } })" class="btn form-btn" >Pay Now <i class="fas fa-long-arrow-alt-right"></i></button>
                                  </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>

import Loader from '~/mixins/Loader';
import ShowToastMessage from '~/mixins/ShowToastMessage';
export default {
    name: 'AppointmentSuccess',
    layout: 'website-layout',
    props: ['routeName', 'reference', 'description'],
    mixins: [ShowToastMessage, Loader],
  head() {
    return {
      // title: 'Booking Success |',
      meta: [
        {hid: 'robots', name: 'robots', content: 'noindex, nofollow'}
      ],
    }
  },
    mounted() {
        if (!(this.$route.params.reference)) {
            this.$router.push({
                name: 'book-online'
            });
            this.showToastMessage({
                type: 'error',
                message: `Something went wrong please contact with us.`
            });
        }
    },


}
</script>


<style scoped>
.book-online-bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 80vh;
}

:root {
    --white: #ffffff;
    --light: #f0eff3;
    --black: #000000;
    --dark-blue: #1f2029;
    --dark-light: #353746;
    --red: #da2c4d;
    --yellow: #f8ab37;
    --grey: #ecedf3;
}

::selection {
    background-color: rgb(0, 140, 255) !important;
    color: #fff;
}

::-moz-selection {
    background-color: rgb(0, 140, 255) !important;
    color: #fff;
}

.form-width {
    width: 70%;
    box-shadow: rgb(0 0 0 / 18%) 0 2px 4px;
    border: 1px solid #f2f2f3;
}

/* making form responsive */
@media(min-width:320px) and (max-width:991px) {
    .form-width {
        width: 100%;
    }
}

@media(min-width:320px) and (max-width:500px) {
    .form-width {
        width: 100%;
    }
}

strong {
    color: #513950;
}

</style>
