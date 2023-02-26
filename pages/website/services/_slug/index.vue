<template>
<div>
  <header :style="{'background-image': `url(${service.image})`}" class="services-header-banner">
    <div class="container">
        <div class="text-white">
            <h1 class="text-capitalize text-center">{{service.name}}</h1>
        </div>
    </div>
  </header>
  <main>
    <section class="booking-process d-md-block d-none">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-4">
                    <div class="bg-white py-5 px-lg-4 px-2 h-100 text-center card-shadow">
                        <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/select-the-service-icon.webp" alt="Select Service" />
                        <h5 class="text-capitalize fw-bold mt-3">Select the <span class="brand-color">Service</span></h5>
                        <p class="mb-0">Pick the services you are looking for- from the website or app.</p>
                        <!-- <p>{{service}}</p> -->
                    </div>
                </div>
                <div class="col-4">
                    <div class="bg-white py-5 px-lg-4 px-2 h-100 text-center card-shadow">
                        <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/pick-up-your-schedule-icon.webp" alt="Pick up schedule" />
                        <h5 class="text-capitalize fw-bold mt-3">Pick up your <span class="brand-color">Schedule</span></h5>
                        <p class="mb-0">Pick your convenient date and time to avail the service.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="bg-white py-5 px-lg-4 px-2 h-100 text-center card-shadow">
                        <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/book-appointment-icon.webp" alt="Book Appointment" />
                        <h5 class="text-capitalize fw-bold mt-3"><span class="brand-color">Book</span> Appointment</h5>
                        <p class="mb-0">Review and book your appointment. We’ll assign the expert technicians schedule for you.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5 my-lg-5 my-0">
        <div class="container">
            <div v-html="service.description"></div>
        </div>
    </section>
  </main>
</div>
</template>


<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
import Loader from '~/mixins/Loader';
import ShowToastMessage from '~/mixins/ShowToastMessage';
import Authorization from '~/mixins/Authorization';
export default {
    name: 'SingleService',
    layout: 'website-layout',
    mixins: [Loader, ShowToastMessage, Authorization],
    head() {
      return {
        // title: `${this.service.name} |`,
        meta: [
          {hid: 'og:title', property: 'og:title', name: 'meta', content: `${this.service.name} | ${process.env.app_name}`},
          {hid: 'twitter:title', property: "twitter:title", name: 'meta', content: `${this.service.name} | ${process.env.app_name}`},
          {hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/services/'},
          {hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/services/'}
        ],
        link: [
          {hid: 'canonical', rel: 'canonical', href: 'https://geekify.au/services/'}
        ],
      }
    },
    data() {
        return {
            getServiceBySlugPrams: {
                // status:1
                // with_relation: ["services"],
            },
        }
    },
    // middleware: ['auth'],
    computed: {
        ...mapGetters({
            service: "services/service",
            settingDefaultWebsiteUrl: 'settings/settingDefaultWebsiteUrl'
        }),
    },
    methods: {
        ...mapActions({
            getServiceBySlug: "services/getServiceBySlug",
            getSettings: 'settings/getSettings'
        }),
        async initPageTitle() {
          let serviceName = this.service.name ?? "";
          if (serviceName) document.title = `${serviceName} | ${process.env.app_name}`;
        },
        async getSingleService() {
            this.loader(true);
            let pramObj = {
                slug: this.$route.params.slug,
                params: this.getServiceBySlugPrams,
            };
            const response = await this.getServiceBySlug(pramObj);
            this.loader(false);
            if (response.message) {
                this.showToastMessage(response);
            }

        },

    },
    async mounted() {
      this.loader(true);
      await this.getSingleService().then(async () => {
        await this.initPageTitle();
      });
      this.loader(false);
    },
}
</script>


<style scoped>
.services-header-banner {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 500px;
    padding-top: 135px;
}

.booking-process {
    margin-top: -150px;
}

@media(max-width:991px) {
    .booking-process {
        margin-top: -200px;
    }
}

@media(max-width:767px) {
    .services-header-banner {
        height: 350px;
        padding-top: 90px;
    }
}
</style>
