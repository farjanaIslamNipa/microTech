<template>
  <div>
    <header class="container pt-xl-5 pt-md-4 pt-0">
        <div class="row justify-content-center text-center py-5">
            <div class="col-xxl-6 col-xl-7 col-lg-8">
                <h1>Services We Are Offering</h1>
                <p>Find the type of service you need, clearly defined and ready to start. Work begins as soon as you book and provide requirements.</p>
                <div class="d-flex align-items-center justify-content-center pt-4">
                  <label hidden />
                    <input type="text" v-model="serviceName" class="form-control service-search-input" placeholder="Find your service here">
                    <button @click="serviceFilterHandler" class="btn service-search-btn" type="submit">Search</button>
                </div>
                <div class="pt-xl-5 pt-md-4 pt-0">
                  <div  v-if="filteredServices?.length === 0">
                    <h3 class="text-danger text-center">No service found !</h3>
                  </div>
              </div>
            </div>
        </div>
    </header>
    <main class="light-gray-bg py-5">
      <div class="container">
          <div class="row">
              <div v-for="(service, index) in filteredServices" :key="index" class="col-lg-4 col-md-6 mb-4 card border-0 bg-transparent">
                <ServicesServiceCard :service="service" />
              </div>

          </div>
      </div>
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

  export default {
    name: "Services",
    layout: 'website-layout',
    mixins: [Loader, ShowToastMessage],
    data() {
      return {
        serviceName:''
      }
    },
    head() {
      return {
        // title: 'Services |',
        meta: [
          {hid: 'og:title', property: 'og:title', name: 'meta', content: `Services | ${process.env.app_name}`},
          {hid: 'twitter:title', property: "twitter:title", name: 'meta', content: `Services | ${process.env.app_name}`},
          {hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/services/'},
          {hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/services/'}
        ],
        link: [
          {hid: 'canonical', rel: 'canonical', href: 'https://geekify.au/services/'}
        ],
      }
  },
    computed: {
      ...mapGetters({
        services: 'services/services',
      }),
      filteredServices (){
       return this.services.filter((service) => service.status === "Active" && service.show_website === 'Active')

    }
    },
    methods: {
      ...mapActions({
        getServices: 'services/getServices',
      }),
      async getServiceList(serviceParams) {
            const response = await this.getServices(serviceParams);
            if (response ?.message) {
                this.showToastMessage(response);
            }
        },
      async setServiceList(serviceParams){
        const response = await this.getServices(serviceParams);
        if(response?.message){
          this.showToastMessage(response)
        }
      },
      async serviceFilterHandler(){
            this.loader(true);
            await this.getServices({name:this.serviceName});
            this.loader(false);
        }
    },
    async mounted() {
        this.loader(true);
        const getServiceParams = {
          status: 1,
          show_website:1,
          order_by_name: 'ASC',
          with_relation:['media']
        }
        if (this.$route.params.serviceName) {
          this.serviceName = this.$route.params.serviceName ;
          getServiceParams.name = this.$route.params.serviceName;

        }
        await this.getServiceList(getServiceParams);
        this.loader(false);
    }
  }
</script>

<style scoped>

</style>
