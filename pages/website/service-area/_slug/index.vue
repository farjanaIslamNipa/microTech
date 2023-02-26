<template>
  <div class="py-5">
    <div class="container">
      <h1 class="text-blue text-capitalize">{{ serviceArea.name }}</h1>
      <h6>{{ serviceArea.suburb }}.</h6>
      <div class="row mb-4 mt-4">
        <div class="col-md-6">
          <div class="">
            <nuxt-img preload format="webp" quality="80" loading="lazy" v-if="serviceArea.img" class="img-fluid" :src="serviceArea.img" :alt="serviceArea.name" />
            <nuxt-img preload format="webp" quality="80" loading="lazy" v-else class="img-fluid" src="/images/service-areas/map.webp" alt="Service Area" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="ps-4">
            <h4 style="background-color: #FEF0EA;" class="brand-color py-4 px-4 mb-4">Following list of locations stating our service areas that we cover and a map to accompany.</h4>
            <p>Our motto is <b>“Geeks drive to you”</b>, and to live by it we make it our top most priority to provide quality on site services, which means we come to you! Tired of dragging your tech troubles around with you? Let our geeks come to your aid! While we do take your said gadget to be repaired to our lab on rare occasions, its mostly the case where our geeks solve all of your troubles on-site, then and there, to ensure you go through a hassle-less experience while working with us!</p>
          </div>
        </div>
      </div>
      <h4 class="text-400 pt-4">Geekify provides one-stop solution for your services. Call today to make an appointment with an expert computer technician!</h4>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import serviceAreas from '~/data/serviceAreas'
  export default {
    name: 'SingleServiceArea',
    layout: 'website-layout',

    data() {
      return {
        serviceArea: {}
      }
    },
    computed:{
      ...mapGetters({
        settingDefaultWebsiteUrl: 'settings/settingDefaultWebsiteUrl'
      })
    },
    methods: {
      ...mapActions({
            getSettings: 'settings/getSettings',
        }),
      async initPageTitle() {
        let serviceAreaName = this.serviceArea.name ?? '';
        if (serviceAreaName) {
          document.title = `${serviceAreaName} | ${process.env.app_name}`
        };

      },
    },
    watch: {
     '$route.params.slug': {
        handler: function() {
           if (this.$route.name === 'service-area-name') {
          let slug = this.$route.params.slug;
          let index = serviceAreas.findIndex(serviceArea => serviceArea.slug === slug);

            if (index > -1) {
              this.serviceArea = serviceAreas[index];
              this.initPageTitle();
            }
          }
        }
      },
    },

    async mounted() {
    let slug = this.$route.params.slug;
    let index = serviceAreas.findIndex(serviceArea => serviceArea.slug === slug);
    if (index > -1) {
      this.serviceArea = serviceAreas[index];
      await this.initPageTitle();
    } else {
      this.$store.dispatch('commitNotFoundRouteStatus', true);
    }
  },
  head(){
    return {
      // title: `${this.serviceArea.name} |`,
      meta: [
        { hid: 'og:title',property: 'og:title', name:'meta', content: `${this.serviceArea.name} | ${process.env.app_name}`},
        { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`${this.serviceArea.name} | ${process.env.app_name}`},
        { hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/service-area'},
        { hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/service-area'}
      ],
      link: [
        { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/service-area' }
      ],
    }
  }
  }
</script>

<style scoped>
</style>
