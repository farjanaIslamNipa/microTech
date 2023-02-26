<template>
<div>
    <header class="container py-xl-5 py-md-4 py-0">
        <div class="row justify-content-center text-center py-5">
            <div class="col-xxl-6 col-xl-7 col-lg-8">
                <h1>{{serviceCategory.name}}</h1>
                <p>{{ serviceCategory.description }}</p>
                <!-- <div class="d-flex align-items-center justify-content-center pt-4">
                    <input type="text" class="form-control service-search-input" placeholder="Find your service here">
                    <button class="btn service-search-btn" type="submit">Search</button>
                </div> -->
            </div>
        </div>
    </header>
    <main>
        <section class="light-gray-bg py-5">
            <div class="container">
                <div class="row">
                    <div v-for="(service,index) in filteredServices" :key="index" class="col-lg-4 col-md-6 mb-4 card border-0 bg-transparent">
                        <ServicesServiceCard :service="service" />
                    </div>
                </div>
            </div>
        </section>
        <section class="py-5 mt-lg-5 mt-md-4 mt-0">
            <div class="container">
                <h1 class="text-center text-brand text-capitalize">Simple booking process</h1>
                <h4 class="text-center text-400">Easiest way to get a service</h4>
                <div class="py-lg-3 py-0">
                    <div class="booking-process-bg">
                        <div class="row py-lg-0 py-5 justify-content-center">
                            <div class="col-lg-4 col-md-6 col-12 mb-lg-0 mb-4">
                                <div class="bg-white py-5 px-lg-4 px-3 text-center card-shadow booking-process-card-margin">
                                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/select-the-service-icon.webp" alt="Select Service" />
                                    <h5 class="text-capitalize fw-bold mt-3">Select the <span class="brand-color">Service</span></h5>
                                    <p class="pb-xxl-2 pb-lg-5 pb-2">Pick the services you are looking for- from the website or app.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12 mb-lg-0 mb-4">
                                <div class="bg-white py-5 px-lg-4 px-3 text-center card-shadow">
                                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/pick-up-your-schedule-icon.webp" alt="Pick up schedule" />
                                    <h5 class="text-capitalize fw-bold mt-3">Pick up your <span class="brand-color">Schedule</span></h5>
                                    <p class="pb-2">Pick your convenient date and time to avail the service.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="bg-white py-5 px-lg-4 px-3 text-center card-shadow booking-process-card-margin">
                                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/book-appointment-icon.webp" alt="Book Appointment" />
                                    <h5 class="text-capitalize fw-bold mt-3"><span class="brand-color">Book</span> Appointment</h5>
                                    <p class="pb-2">Review and book your appointment. We’ll assign the expert technicians schedule for you.</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-center ">
                            <NuxtLink class="book-now-btn" :to="{ name: 'book-online' }">Book Now</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <IncludesDownloadApp />
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

    name: 'SingleServicesCategory',
    layout: 'website-layout',
    mixins: [Loader, ShowToastMessage, Authorization],
    head(){
      return {
        // title: `${this.serviceCategory.name} |`,
        meta: [
          { hid: 'og:title',property: 'og:title', name: 'meta', content: `${this.serviceCategory.name} | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`${this.serviceCategory.name} | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/services/'},
          { hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/services/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/services/' }
        ],
      }
    },
    data() {
        return {
            getServiceBySlugPrams: {
                with_relation: ["services.media"],
            },
        }
    },
    // middleware: ['auth'],
    computed: {
        ...mapGetters({
            serviceCategory: "serviceCategories/serviceCategory",
            settingDefaultWebsiteUrl: 'settings/settingDefaultWebsiteUrl'
        }),
        filteredServices() {
           return this.serviceCategory?.services?.filter((service) => service.status === "Active" && service.show_website === 'Active')
        }
    },
    methods: {
        ...mapActions({
            getServiceCategoryBySlug: "serviceCategories/getServiceCategoryBySlug",
            getSettings: 'settings/getSettings'
        }),

        async getSingleServiceCategory() {
            this.loader(true);
            let pramObj = {
                slug: this.$route.params.slug,
                params: this.getServiceBySlugPrams,
            };
            const response = await this.getServiceCategoryBySlug(pramObj);
            this.loader(false);
            if (response.message) {
                this.showToastMessage(response);
            }

        },
    },
    async mounted() {
        await this.getSingleServiceCategory();


    },

    // async fetch( {route }) {



    //     // await this.getSingleService();
    //     // let pramObj = {
    //     //         slug: route.params.slug,
    //     //         params: this.getServiceBySlugPrams,
    //     //     };
    //     //     const response = await this.getServiceBySlug(pramObj);
    // }
}
</script>


<style scoped>
.booking-process-bg {
    background-image: url('/images/global/booking-process-bg.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 80px 0;
    border-radius: 25px;
    border-radius: 20px;
}

.booking-process-card-margin {
    margin-top: 80px;
}

.book-now-btn {
    background-color: var(--brandColor);
    color: white;
    border-radius: 6px;
    padding: 8px 40px;
    font-size: 18px;
    font-weight: 600;
}

@media(max-width:991px) {
    .booking-process-bg {
        background: none;
        padding: 0;
    }

    .booking-process-card-margin {
        margin-top: 0;
    }
}
</style>
