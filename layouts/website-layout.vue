<template>
<div>
    <div class="full-screen-loader d-none" id="fullScreenLoader">
        <div class="loader">
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    <IncludesPrimaryNavbar />
    <div class="top-padding"></div>
    <nuxt />
    <IncludesFooterSection />
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

    mixins: [Loader, ShowToastMessage],
    head(){
      return{
        link: [
          { hid:'canonical', rel: 'canonical', href: `${this.settingDefaultWebsiteUrl?.value + this.$route.path}` }
        ],
        meta:[
          { hid: 'og:url', property: 'og:url', content: `${this.settingDefaultWebsiteUrl?.value + this.$route.path}`},
          { hid: 'twitter:domain', property: 'twitter:domain', content: `${this.settingDefaultWebsiteUrl?.value + this.$route.path}`},
        ]
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
            getDiscounts: 'settings/getSettings',
            getServiceCategories: 'serviceCategories/getServiceCategories',
        }),

        async getSettingList() {
            const getSettingsParams = {
                type: ['default', 'payment', 'appointment'],
                key: ['default_contact_number', 'default_company_name', 'default_company_abn', 'payment_afterpay_payment_status', 'payment_card_payment_status', 'appointment_online_appointment_discount','default_website_logo_regular','default_company_social_link_facebook','default_company_social_link_linkedin','default_company_social_link_youtube', 'default_website_customer_portal_login_url', 'default_website_url','default_customer_mob_app', 'default_website_header_banner_slider','default_website_medical_service_page_url', 'default_website_ndis_page_url'],
            }
            await this.getSettings(getSettingsParams);

        },
        getServiceCategoryList() {
            this.getServiceCategories({
                status: 1,
                show_website: 1,
                order_by_website_sort_order: 'ASC',
                with_relation: ['media', 'services.media'],
            });
        },

    },
    async created() {
        await this.getSettingList();
        this.getServiceCategoryList();
    }

}
</script>

<style>
.top-padding {
    padding-top: 138px;
}

a.nuxt-link-exact-active {
    color: var(--secondaryColor) !important;
    font-weight: bold !important;
}

@media(max-width:1023px) {
    .top-padding {
        padding-top: 120px;
    }
}
/* @media(max-width:767px) {
    .top-padding {
        padding-top: 70px;
    }
} */

.loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}

/* Add the blur effect */

.lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
}

.lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
}

.lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
}

.lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
}

.lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
}

.lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
}

.lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
}

.lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
}

.lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
}

.lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
}

.lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
}

.lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
}

.lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
}

.lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
}

@keyframes lds-spinner {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
