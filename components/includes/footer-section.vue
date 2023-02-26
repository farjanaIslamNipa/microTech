<template>
<div id="footer" class="light-gray-bg">
    <div :class="(isLogin || isRegister || isForgetPassword) ? '' : 'py-4'" class=" bg-white"></div>
    <div class="container footer-margin">
        <div :class="(isLogin || isRegister || isForgetPassword) ? 'd-none' : ''" class="footer-top-bg py-4 px-2 text-center text-white">
            <p class="text-400 text-20 mb-1">Can't find the service you need?</p>
            <p class="mb-0 large-text">Our team will contact you within 24 hours.</p>
            <div class="pt-3">
                <div class="break-btn-wrapper">
                    <NuxtLink :to="{name: 'contact-us'}" class="break-btn">
                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="footer-call-icon rise-shake" src="/images/global/white-call-icon.webp" alt="Request call back" />
                        Request a call back
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="py-5">
            <div class="row">
                <div class="col-md-3 col-6">
                    <div>
                        <h3 class="text-capitalize">Company</h3>
                        <ul class="p-0">
                            <li>
                                <NuxtLink :to="{name: 'about-us'}" class="text-capitalize footer-link">About Us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink :to="{ name: 'contact-us' }" class="text-capitalize footer-link">Contact Us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/careers" class="text-capitalize footer-link">Careers</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/become-a-tech" class="text-capitalize footer-link">Become A Tech</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/information/terms-and-conditions" class="text-capitalize footer-link">Terms & Conditions</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/information/privacy-policy" class="text-capitalize footer-link">Privacy Policy</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div>
                        <h3 class="text-capitalize">Discover</h3>
                        <ul class="p-0">
                            <!-- <li>
                                <a target="_blank" href="https://geekscrs.com.au/franchiseon" class="text-capitalize footer-link">Franchise</a>
                            </li> -->
                            <li v-if="settingDefaultWebsiteMedicalServicePageUrl?.value !== ''">
                                <a target="_blank" :href="settingDefaultWebsiteMedicalServicePageUrl?.value" class="text-capitalize footer-link">Medical Services</a>
                            </li>
                            <li v-if="settingDefaultWebsiteNdisPageUrl?.value !== ''">
                                <a target="_blank" :href="settingDefaultWebsiteNdisPageUrl?.value" class="text-capitalize footer-link">NDIS Services</a>
                            </li>
                            <li>
                                <NuxtLink to="/reviews" class="text-capitalize footer-link">Customer Review</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/why-choose-us" class="text-capitalize footer-link">Why choose us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/frequently-asked-questions" class="text-capitalize footer-link">FAQs</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div>
                        <h3 class="text-capitalize">Services</h3>
                        <p class="mb-2 pe-xl-5 pe-0"><span class="text-500 text-blue text-18">Geekify</span> - Your Onsite Tech Specialist</p>
                        <ul class="p-0">
                            <li>
                                <NuxtLink to="/services" class="text-capitalize footer-link">Services</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/remote-services" class="text-capitalize footer-link">Remote Service</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/tech-support" class="text-capitalize footer-link">Tech Support</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div>
                        <h3 class="text-capitalize">Download our App</h3>
                        <p class="mb-2">App is available for free on the app store</p>
                        <div class="pt-1">
                            <a class="app-icon" :href="settingDefaultCustomerMobApp?.android?.app_link??'#'" target="_blank" rel="noopener noreferrer">
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/google-play.webp" alt="Download app from Google Play" />
                            </a>
                            <a class="ms-xl-1 ms-0 app-icon" :href="settingDefaultCustomerMobApp?.ios?.app_link??'#'" target="_blank" rel="noopener noreferrer">
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/app-store.webp" alt="Download app from App Store" />
                            </a>
                        </div>
                        <div class="mt-4">
                          <ul class="p-0 m-0 d-flex align-items-center">
                            <li>
                              <p style="font-size:18px;" class="mb-0 fw-bold">Follow us:</p>
                            </li>
                            <li class="ms-3">
                              <a v-if="settingDefaultCompanySocialLinkFacebook?.value !== ''"
                                :href="settingDefaultCompanySocialLinkFacebook?.value"
                                target="_blank"
                                area-label="Follow us on Facebook"
                                rel="noreferrer"
                                name="Follow us on Facebook"
                                >
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/facebook.webp" alt="Follow us on facebook" />
                              </a>
                            </li>
                            <li class="mx-3">
                              <a v-if="settingDefaultCompanySocialLinkLinkedin?.value !== ''"
                                :href="settingDefaultCompanySocialLinkLinkedin?.value"
                                target="_blank"
                                area-label="Follow us on Linkedin"
                                rel="noreferrer"
                                name="Follow us on Linkedin"
                                >
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/linkedin.webp" alt="Follow us on linkedin" />
                              </a>
                            </li>
                            <li>
                              <a v-if="settingDefaultCompanySocialLinkYoutube?.value !== ''"
                                :href="settingDefaultCompanySocialLinkYoutube?.value"
                                target="_blank"
                                area-label="Follow us on youTube"
                                rel="noreferrer"
                                name="Follow us on youTube"
                                >
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/youtube.webp" alt="Follow us on youTube" />
                              </a>
                            </li>
                          </ul>

                          <div class="mt-3">
                            <a
                              class="text-capitalize footer-login-btn"
                              target="_blank"
                              area-label="Geekify Login"
                              :href="settingDefaultWebsiteCustomerPortalLoginUrl?.value ?? '#'" >
                              Login
                            </a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="background-color: #525252;" class="py-3">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-9">
                    <div class="text-white">
                        <p class="text-15 mb-0 text-md-start text-center copyright-text">Copyright © 2022 <span v-if="settingDefaultCompanyName.value">{{ settingDefaultCompanyName.value }}</span>. All rights reserved. <span v-if="settingDefaultCompanyABN?.value"> ABN: {{ settingDefaultCompanyABN?.value }}</span></p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="d-flex align-items-center justify-content-md-end justify-content-center mt-md-0 mt-2">
                        <div class="payment-icon"><nuxt-img preload format="webp" quality="80" loading="lazy" v-if="parseInt(settingPaymentCardPaymentStatus.value)" src="/images/global/visa.webp" alt="Visa Card" /></div>
                        <div class="payment-icon mx-2"><nuxt-img preload format="webp" quality="80" loading="lazy" v-if="parseInt(settingPaymentCardPaymentStatus.value)" src="/images/global/master-card.webp" alt="Master Card" /></div>
                        <div class="payment-icon"><nuxt-img preload format="webp" quality="80" loading="lazy" v-if="parseInt(settingPaymentAfterPayPaymentStatus.value)" src="/images/global/after-pay.webp" alt="Afterpay" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';
export default {
    name: 'FooterSection',
    computed: {
      ...mapGetters({
      settingPaymentAfterPayPaymentStatus: 'settings/settingPaymentAfterPayPaymentStatus',
      settingPaymentCardPaymentStatus: 'settings/settingPaymentCardPaymentStatus',
      settingDefaultCompanyABN:'settings/settingDefaultCompanyABN',
      settingDefaultCompanyName: 'settings/settingDefaultCompanyName',
      settingDefaultCompanySocialLinkFacebook: 'settings/settingDefaultCompanySocialLinkFacebook',
      settingDefaultCompanySocialLinkLinkedin: 'settings/settingDefaultCompanySocialLinkLinkedin',
      settingDefaultCompanySocialLinkYoutube: 'settings/settingDefaultCompanySocialLinkYoutube',
      settingDefaultWebsiteCustomerPortalLoginUrl: 'settings/settingDefaultWebsiteCustomerPortalLoginUrl',
      settingDefaultCustomerMobApp: 'settings/settingDefaultCustomerMobApp',
      settingDefaultWebsiteMedicalServicePageUrl: 'settings/settingDefaultWebsiteMedicalServicePageUrl',
      settingDefaultWebsiteNdisPageUrl: 'settings/settingDefaultWebsiteNdisPageUrl',
    }),

        isLogin() {
            return this.$route.name === 'login'
        },
        isRegister() {

            return this.$route.name === 'sign-up'
        },
        isForgetPassword() {

            return this.$route.name === 'forget-password'
        }

    }
}
</script>

<style scoped>
.footer-login-btn {
  font-weight: 600;
  color: var(--secondaryColor);
  border-bottom: 1px solid var(--secondaryColor);
  padding-right: 70px;
  padding-bottom: 5px;
  letter-spacing: 1px;
  font-size: 18px;
}
.footer-top-bg {
    background-image: url('/images/global/footer-top-bg.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 20px;
}

.footer-margin {
    margin-top: -48px;
}

.footer-link {
    display: block;
    color: #363636;
    padding: 8px 0;
}

.app-icon img {
    height: 40px;
}

.break-btn-wrapper {
    display: inline-block;
    padding: 11px 0 8px;
    border: 8px solid rgba(0, 184, 209, 0.4);
    border-radius: 38px;
}

.break-btn {
    position: relative;
    background: rgba(0, 184, 209, 0.4);
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    border: 0.2em solid white;
    border-radius: 30px;
    padding: 12px 20px;
}

.break-btn::before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    background: #1d8181;
    height: 0.2em;
    right: 20%;
    top: -3px;
    transform: skewX(-45deg);
    -webkit-transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}

.break-btn::after {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    background: #178181;
    height: 0.2em;
    left: 20%;
    bottom: -4px;
    transform: skewX(45deg);
    -webkit-transition: all 0.5 cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}

.break-btn:hover::before {
    right: 75%;
}

.break-btn:hover::after {
    left: 75%;
}
.payment-icon{
  height: 32px;
  width: 50px;
}
.payment-icon img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.footer-call-icon{
  height: 25px;
}

.large-text{
  font-size: 30px;
  font-weight: 500;
}

@media(max-width:1399px) {
    .app-icon img {
        height: 35px;
    }
}

@media(max-width:1199px) {
    .app-icon {
        display: block;
        margin-bottom: 8px;
    }
}

@media(max-width:575px) {
    .copyright-text {
        font-size: 15px;
    }
}
</style>
