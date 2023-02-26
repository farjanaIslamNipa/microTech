<template>
  <div>
    <div id="topbar" class="fixed-top">
      <div class="bg-brand py-1 text-center d-md-none d-block">
        <NuxtLink class="" to="/">
            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/global/logo-white.svg" alt="Geekify Logo" height="48" width="222" />
        </NuxtLink>
      </div>
      <div class="d-md-block d-none">
        <div>
          <div class="brand-orange"></div>
          <div class="light-orange"></div>
        </div>
        <div class="top-nav-content">
          <div class="container-lg container-fluid">
            <div class="row">
              <div class="col-sm-6 col-8">
                <div class="text-white">
                  <p class="mb-0" v-if="settingDefaultContactNumber?.value?.display">
                    <span
                      class="d-xl-inline-block d-none">Need computer help?</span>
                    <span class="ps-2">
                      Call us
                      <a href="tel:1300 894 946" class="text-white contact-number">&nbsp;&nbsp;{{ settingDefaultContactNumber?.value?.display }}</a>
                    </span>
                  </p>
                </div>
              </div>
              <div class="col-sm-6 col-4">
                <div class="text-end pe-lg-2 pe-0 d-md-block d-none">
                  <div class="follow-us d-sm-flex d-none align-items-center justify-content-end">
                    <div v-if="(settingDefaultCompanySocialLinkFacebook?.value) || (settingDefaultCompanySocialLinkLinkedin?.value) || (settingDefaultCompanySocialLinkYoutube?.value)" class="d-flex align-items-center">
                      <p class="mb-0">Follow us:</p>
                      <ul class="p-0 m-0 d-flex align-items-center">
                        <li class="ms-sm-3 ms-0">
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
                    </div>
                    <a
                      class="ms-1 ms-lg-3 btn text-capitalize login-btn"
                      target="_blank"
                      area-label="Geekify Login"
                      :href="settingDefaultWebsiteCustomerPortalLoginUrl?.value ?? '#'">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sticky-navbar" class="fixed-top">
      <nav class="navbar-expand-lg bg-white">
        <div class="container-lg container-fluid">
          <div class="row justify-content-between align-items-center px-lg-0 px-md-2 px-0 py-xl-0 py-2 small-device-display">
            <div class="col-md-3 col-12">
              <div class="d-md-block d-none">
                <NuxtLink class="" to="/">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" v-if="settingDefaultWebsiteLogoRegular?.value" class="brand-logo" :src="settingDefaultWebsiteLogoRegular?.value" alt="Geekify Logo" />
                  <nuxt-img preload format="webp" quality="80" loading="lazy" v-else class="brand-logo" src="/images/global/logo.svg" alt="Geekify Logo" />
                </NuxtLink>
              </div>
            </div>
            <div class="col-md-9 col-12">
              <div class="d-md-flex d-block justify-content-end px-md-0 px-sm-2 px-0">
                <div>
                  <div class="d-flex align-items-center justify-content-md-end justify-content-between small-device-right-content">
                  <div class="booking-btn-wrapper text-center">
                    <NuxtLink class="booking-btn" :to="{ name: 'book-online' }">
                      <span class="book-online text-white">Book Online</span> <br>
                      <span v-if="settingAppointmentOnlineAppointmentDiscount?.value?.status === 1"
                        class="get-ten-off text-600">And get <span class='pop-outin d-inline-block'>{{settingAppointmentOnlineAppointmentDiscount?.value?.discount_rate}}%</span>
                        Off</span>
                    </NuxtLink>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="divider-border d-md-none d-block">
                      <p class="mb-0 need-help-small-text">Need Computer Help?</p>
                      <span class="text-blue"><i class="fa-solid fa-phone"></i></span>
                      <!-- <nuxt-img preload format="webp" quality="80" loading="lazy" class="rise-shake blue-call-icon" src="/images/global/blue-call-icon.webp" alt="Call or Booking" /> -->
                      <a href="tel:1300 894 946" class="small-device-contact-number text-500">{{ settingDefaultContactNumber?.value?.display }}</a>
                    </div>
                    <div id="toggle_menu" class="hamburger-icon text-end ms-sm-4 ms-3 me-lg-2 me-0 ps-md-2 ps-0">
                      <input v-model="showNav" type="checkbox" id="hamburger" class="hamburger-input" aria-labelledby="toggle_menu" name="hamburger">
                      <label for="hamburger">
                        <div class="hamburger">
                          <span class="bar bar1"></span>
                          <span class="bar bar2"></span>
                          <span class="bar bar3"></span>
                          <span class="bar bar4"></span>
                        </div>
                      </label>
                    </div>
                  </div>
                  </div>

                  <div id="sideBarMenu" :class="showNav ? 'expand' : ''" class="small-device-collapse-nav full-width">
                    <div class="d-lg-flex d-block justify-content-between align-items-center w-100 sidenav-content">
                      <div class="">
                        <ul class="m-0 p-0 list-unstyled">
                          <!-- <li class="menu-item" @click="closeSideNav">
                          <NuxtLink class="menu-link" to="/dashboard">Dashboard</NuxtLink>
                        </li> -->
                          <li class="menu-item" @click="closeSideNav">
                            <NuxtLink class="menu-link" to="/">Home</NuxtLink>
                          </li>
                          <li class="menu-item" @click="closeSideNav">
                            <NuxtLink class="menu-link" v-if="serviceCategories.length" :to="{ name: 'services' }">
                              Services <span class="brand-color down-caret"><i
                                  class="fa-solid fa-angle-down"></i></span></NuxtLink>
                            <div id="services-mega-menu" class="mega-menu">
                              <div class="container-fluid">
                                <div class="p-2 pb-4">
                                  <div style="background-color:#f7fbff" class="p-4">
                                    <div class="row">
                                      <div class="col-xl-4 col-lg-6 mb-5"
                                        v-for="(singleServiceCategory, index) in filteredServiceCategories" :key="index">
                                        <div class="h-100">
                                          <div class="d-flex">
                                            <div><nuxt-img preload format="webp" quality="80" loading="lazy" class="menu-services-icon"
                                                :src="singleServiceCategory?.image ?? ''" alt="Geekify Service" /></div>
                                            <div>
                                              <NuxtLink
                                                :to="{ name: 'service-category-slug', params: { slug: singleServiceCategory?.slug ?? '' } }"
                                                class="mb-0 menu-service-category text-blue"> {{ singleServiceCategory?.name ?? ''}}</NuxtLink>
                                            </div>
                                          </div>
                                          <div class="mt-4 ps-5">
                                            <ul class="p-0 service-list-container"
                                              v-if="singleServiceCategory?.services">
                                              <li class="py-2" v-for="(service, index) in singleServiceCategory.services"
                                                :key="index">
                                                <NuxtLink :to="{ name: 'services-slug', params: { slug: service?.slug ?? '' } }"
                                                  class="mega-menu-service-link"><span class="text-blue pe-1"><i
                                                      class="fa-solid fa-caret-right"></i></span> <span
                                                    class="service-name">{{ service.name }}</span></NuxtLink>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="menu-item" @click="closeSideNav">
                            <NuxtLink class="menu-link" :to="{ name: 'service-area' }">Service Areas <span
                                class="brand-color down-caret"><i class="fa-solid fa-angle-down"></i></span></NuxtLink>
                            <div id="service-area-mega-menu" class="mega-menu service-area-mega-menu-bg pb-4">
                              <div class="container">
                                <div class="pt-2 pb-2 px-4">
                                  <div class="p-5">
                                    <h3 class="pb-3">Our Service Areas</h3>
                                    <div class="row">
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name:'service-area-new-south-wales'}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">New South Wales</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'victoria'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Victoria</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'australian-capital-territory'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Australian Capital Territory</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'adelaide'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">South Australia</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'queensland'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Queensland</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'western-australia'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Western Australia</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'greater-western-sydney'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Greater Western Sydney</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'inner-south'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Inner South</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'northern-beaches'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Northern Beaches</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'st-george'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">St. George</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'the-hill-district'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">The Hills District</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'eastern-suburbs'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Eastern Suburbs</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'inner-west'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Inner West</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'ryde-&-northern-suburbs'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Ryde & Northern Suburbs</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                      <div class="col-md-4 mb-3">
                                        <div>
                                          <NuxtLink class="service-area-name" :to="{name: 'service-area-slug', params: {slug: 'sutherland-shire'}}">
                                            <span class="text-blue pe-1"><i class="fa-solid fa-caret-right"></i></span>
                                            <span @click="closeMegaMenu" class="area-name">Sutherland Shire</span>
                                          </NuxtLink>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="menu-item" @click="closeSideNav">
                            <NuxtLink class="menu-link" :to="{name: 'become-a-member'}">Become a member</NuxtLink>
                          </li>
                          <li class="menu-item" @click="closeSideNav">
                            <NuxtLink class="menu-link" :to="{ name: 'blogs' }">Blogs</NuxtLink>
                          </li>
                          <li class="menu-item booking-menu ms-xl-3 ms-2 mt-lg-0 mt-4" @click="closeSideNav">
                            <div class="booking-btn-wrapper text-center">
                              <NuxtLink class="booking-btn" :to="{ name: 'book-online' }">
                                <span class="book-online text-white">Book Online</span> <br>
                                <span v-if="settingAppointmentOnlineAppointmentDiscount?.value?.status === 1"
                                  class="get-ten-off text-600">And get <span class='pop-outin d-inline-block'>{{settingAppointmentOnlineAppointmentDiscount?.value?.discount_rate}}%</span>
                                  Off</span>
                              </NuxtLink>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
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
  name: 'PrimaryNavbar',
  mixins: [Loader, ShowToastMessage],
  data() {
    return {
      showNav: false,
      megaMenu: true,
      getServiceCategoriesParam: {
                status: 1,
                show_website: 1,
                order_by_website_sort_order: 'ASC',
                with_relation: ['media','services.media'],
            }
    }
  },
  computed: {
    ...mapGetters({
      // isAuthenticated: 'login/isAuthenticated',
      // menuServices: 'services/menuServices',
      serviceCategories: 'serviceCategories/serviceCategories',
      settingDefaultContactNumber: 'settings/settingDefaultContactNumber',
      settingAppointmentOnlineAppointmentDiscount: 'settings/settingAppointmentOnlineAppointmentDiscount',
      settingDefaultWebsiteLogoRegular: 'settings/settingDefaultWebsiteLogoRegular',
      settingDefaultCompanySocialLinkFacebook: 'settings/settingDefaultCompanySocialLinkFacebook',
      settingDefaultCompanySocialLinkLinkedin: 'settings/settingDefaultCompanySocialLinkLinkedin',
      settingDefaultCompanySocialLinkYoutube: 'settings/settingDefaultCompanySocialLinkYoutube',
      settingDefaultWebsiteCustomerPortalLoginUrl: 'settings/settingDefaultWebsiteCustomerPortalLoginUrl',

    }),
    filteredServiceCategories ()
    {
      return this.serviceCategories.map((singleServiceCategory) =>
      {
        return {
          ...singleServiceCategory,services: singleServiceCategory.services.filter((service) => service.status === "Active" && service.show_website === 'Active')
        }
      });
    }
    // contactNumber() {
    //   return this.settingDefaultContactNumber.value
    //       ? this.settingDefaultContactNumber.value
    //       : {value: '', display: ''};
    // },
  },

  methods: {
    ...mapActions({
        getServiceCategories: 'serviceCategories/getServiceCategories',
      }),
      async getServiceCategoryList() {
           const response = await this.getServiceCategories(this.getServiceCategoriesParam);
             if (response.message) {
                this.showToastMessage(response);
            }
        },
    scrollFunction() {
      const stickyNav = document.getElementById('sticky-navbar');
      const stickyTop = document.getElementById('topbar');
      const servicesMegaMenu = document.getElementById('services-mega-menu');
      const serviceAreaMegaMenu = document.getElementById('service-area-mega-menu');
      if (window.scrollY > 120) {
        stickyNav.classList.add('header-scrolled');
        stickyTop.classList.add('topbar-scrolled');
        servicesMegaMenu.classList.add('mega-menu-scroll-top');
        serviceAreaMegaMenu.classList.add('mega-menu-scroll-top');
      } else {
        stickyNav.classList.remove('header-scrolled');
        stickyTop.classList.remove('topbar-scrolled');
        servicesMegaMenu.classList.remove('mega-menu-scroll-top');
        serviceAreaMegaMenu.classList.remove('mega-menu-scroll-top');
      }
    },

    closeSideNav() {
        this.showNav = false;
    },
    closeMegaMenu() {
        this.loader(true);
        setTimeout(() => {
          this.loader(false);
        }, 300);
    },
  },
  async mounted() {
    window.onscroll = () => {
      this.scrollFunction()
    };
    await this.getServiceCategoryList();
  }
}
</script>

<style scoped>
.login-btn{
  /* background-color: var(--secondaryColor); */
  color: var(--secondaryColor);
  font-weight: bold;
  border-radius: 0;
  border-left: 2px solid var(--secondaryColor);
  font-size: 17px;
  padding: 0 0 0 10px;
  transition: all 0.3s ease-in;
}
.login-btn:hover{
  color: #3d6b8a;
}
.pop-outin {
  animation: 2s anim-popoutin ease infinite;
}

@keyframes anim-popoutin {
  0% {
    color: #fff700;
    transform: scale(0);
    opacity: 0;
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }

  25% {
    color: #fff;
    transform: scale(1.6);
    opacity: 1;
    /* text-shadow: 3px 10px 5px rgba(252, 153, 5, 0.8); */
  }

  50% {
    color: #fff700;
    transform: scale(1);
    opacity: 1;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0);
  }

  100% {
    /* animate nothing to add pause at the end of animation */
    transform: scale(1);
    opacity: 1;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0);
  }
}

.booking-btn-wrapper {
  width: 170px;
  height: 56px;
  font-size: 16px;
  background-color: var(--secondaryColor);
  cursor: pointer;
  box-shadow: 5px 5px 0 0 #d7e7ec;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20px;
  text-transform: uppercase;
}

.booking-btn {
  position: absolute;
  text-decoration: none;
  z-index: 1000;
}

.booking-btn-wrapper::after {
  content: "";
  left: 0;
  height: 20px;
  opacity: 0;
  transition: 0.3s;
}

.booking-btn-wrapper:hover {
  box-shadow: -5px -5px 0 0 #d7e7ec;
  transform: scale(0.95);
}

.booking-btn-wrapper:hover::after {
  opacity: 1;
}

.get-ten-off {
  color: #fff700;
}

#sticky-navbar {
  background: #fff;
  transition: all .4s;
  z-index: 999999;
  top: 53px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

#sticky-navbar.header-scrolled {
  top: 0;
}

#topbar {
  background-color: white;
  transition: all .4s;
  padding-bottom: 1px;
}

#topbar.topbar-scrolled {
  top: -53px
}

.brand-logo {
  height: 58px;
}

.brand-orange {
  background-color: var(--brandColor);
  height: 45px;
  max-width: 60%;
  z-index: 3;
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0%, 95% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 95% 100%, 0% 100%);
}

.light-orange {
  background-color: #FEF1E6;
  height: 45px;
  max-width: 60.2%;
  z-index: 1;
  margin-top: -35px;
  -webkit-clip-path: polygon(0 0, 100% 0%, 95% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 95% 100%, 0% 100%);
}

.top-nav-content {
  margin-top: -46px;
  margin-bottom: 15px;
  position: relative;
  z-index: 99999;
}

.contact-number {
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
}

.follow-us {
  font-size: 14px;
  font-weight: 600;
}

.nav-social-icon {
  font-size: 20px;
}

.menu-item {
  display: inline-block;
}

.menu-link {
  position: relative;
  display: block;
  padding: 30px 5px;
  text-decoration: none;
  color: rgb(65, 65, 65);
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 10px;
}

.menu-link,
.menu-link::after,
.menu-link::before {
  transition: all 0.5s;
}

.menu-link:hover {
  text-decoration: none;
  /* color: #fff; */
}

.menu-link:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0;
  content: '.';
  color: transparent;
  background: var(--brandColor);
  height: 3px;
}

.menu-link:hover:after {
  width: 100%;
}

.mega-menu {
  position: fixed;
  width: 100%;
  background-color: white;
  visibility: hidden;
  top: 110px;
  left: 0;
  right: 0;
  opacity: 0;
  z-index: 999999;
}

.menu-item:hover .mega-menu {
  top: 138px;
  opacity: 1;
  transition: all 0.6s ease;
  visibility: visible;
  overflow: auto;
  /* bottom: 10px; */
}

.mega-menu::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.6);
  border-radius: 8px;

}
.mega-menu::-webkit-scrollbar{
  width: 6px;
  border-radius: 8px;
  background-color: white;
}

.mega-menu::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: var(--secondaryColor);
}

.mega-menu-scroll-top{
  top: 80px !important;
}
.menu-services-icon {
  height: 35px;
}

.menu-service-category {
  color: var(--secondaryColor);
  font-size: 25px;
  font-weight: 300 !important;
  margin-left: 10px;
  border-left: 2px solid var(--brandColor);
  padding-left: 10px;
}

.mega-menu-service-link {
  color: rgb(71, 71, 71);
}

.mega-menu-service-link:hover .service-name {
  transition: all 0.3s ease;
  letter-spacing: 1px;
  color: var(--secondaryColor);
}

.service-area-name {
  color: rgb(46, 46, 46);
  font-size: 18px;
}
.service-area-name:hover .area-name {
  transition: all 0.3s ease;
  color: var(--secondaryColor);
  letter-spacing: 1px;
}

.service-area-mega-menu-bg {
  background-image: url('/images/service-areas/mega-menu-map.webp');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

/* --------------------------- */
.small-device-right-content{
  display: none !important;
}
.hamburger-icon {
  cursor: pointer !important;
  line-height: 0;
}

.hamburger-input {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.hamburger {
  margin: 0 auto;
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer !important;
}

.hamburger .bar {
  padding: 0;
  width: 30px;
  height: 2px;
  background-color: var(--secondaryColor);
  display: block;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  position: absolute;
}

.bar1 {
  top: 2px;
}

.bar2,
.bar3 {
  top: 13px;
}

.bar3 {
  right: 0;
}

.bar4 {
  bottom: 4px;
}

.hamburger .bar1 {
  transform-origin: 5%;
}

.hamburger .bar4 {
  transform-origin: 5%;
}

.hamburger-input:checked+label>.hamburger>.bar1 {
  transform: rotate(45deg);
  height: 2px;
  width: 35px;
}

.hamburger-input:checked+label>.hamburger>.bar3 {
  transform: rotate(45deg);
  height: 2px;
  background-color: transparent;
}

.hamburger-input:checked+label>.hamburger>.bar2 {
  transform: rotate(-45deg);
  height: 2px;
  background-color: transparent;
}

.hamburger-input:checked+label>.hamburger>.bar4 {
  transform: rotate(-45deg);
  height: 2px;
  width: 35px;
}

.service-list-container {
  max-height: 200px;
  overflow-y: auto;
}

.service-list-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.service-list-container::-webkit-scrollbar {
  width: 8px;
  background-color: #fcece5;
}

.service-list-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: var(--secondaryColor);
}

/* --------------------------- */
/* @media (max-width:1600px) {
  .brand-orange {
    max-width: 700px;
  }

  .light-orange {
    max-width: 706px;
  }
}

@media (max-width:1440px) {
  .brand-orange {
    max-width: 600px;
  }

  .light-orange {
    max-width: 608px;
  }
} */

@media (max-width:1399px) {
  .menu-link {
    font-size: 15px;
    padding: 30px 2px;
  }
}

@media (max-width:1199px) {

  .menu-link {
    font-size: 14px;
    padding: 30px 0;
    margin: 0 5px;
  }
  .booking-btn-wrapper{
    width: 150px;
    height: 55px;
    font-size: 15px;
  }
}

@media(min-width:1024px) {
  .full-width {
    width: auto !important;
  }

  .nav-close-btn {
    display: none !important;
  }

}

@media (max-width:1023px) {
  #sticky-navbar{
    padding-bottom: 5px;
  }
  .small-device-right-content{
    display: flex !important;
  }
  .hamburger-icon {
    cursor: pointer;
  }
  .small-device-booking-btn{
    width: 155px;
    height: 52px;
    font-size: 15px;
    min-height: 20px;
  }
  .primary-nav {
    padding: 20px 0;
  }
  .menu-link {
    border-bottom: 1px solid rgb(214, 214, 214);
  }

  .mega-menu {
    display: none !important;
  }

  .down-caret {
    display: none;
  }

  .nav-close-btn {
    display: inline-block !important;
    font-size: 30px;
    border-radius: 10%;
    line-height: 0;
    padding: 3px 7px;
  }

  .nav-close-btn:hover {
    background-color: var(--brandColor);
    transition: all 0.4s ease;
  }

  .small-device-collapse-nav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
    white-space: nowrap;
    padding-top: 100px;
  }

  .sidenav-content {
    padding: 30px 60px;
  }

  .menu-item {
    display: block;
  }

  .menu-link {
    font-size: 16px;
  }

  /* .menu-link:after {
    height: 2px;
  } */

  .booking-menu{
    display: none;
  }
  .expand {
    width: 80% !important;
  }

}

@media (max-width:991px) {
  .sidenav-content {
    padding: 30px 30px;
  }
  .light-orange {
    max-width: 60.6%;
  }
  .pop-outin{
    animation: none;
  }
  .booking-btn-wrapper{
    box-shadow: none;
  }
}

@media (max-width:767px) {
  .contact-number {
    font-size: 16px;
  }

  #sticky-navbar{
    padding-bottom: 0;
  }
  .booking-btn-wrapper{
    width: 160px;
    height: 55px;
    font-size: 15px;
  }
  .small-device-call-icon{
    height: 25px;
  }
  .small-device-contact-number{
    color: rgb(82, 82, 82);
    font-size: 18px;
  }
  .divider-border{
    border-right: 2px solid rgb(48, 48, 48);
    padding-right: 20px;
  }
}


@media (max-width:500px) {
  .divider-border{
  padding-right: 10px;
}
.booking-btn-wrapper{
    width: 150px;
    height: 50px;
  }
}
@media (max-width:424px) {
  .sidenav-content {
    padding: 30px 10px;
  }
  .divider-border{
  padding-right: 10px;
}
.booking-btn-wrapper{
    width: 140px;
    border-radius: 2px;
  }
  .need-help-small-text{
    font-size: 14px;
  }
  .small-device-contact-number{
    font-size: 16px;
  }
}
@media (max-width:374px) {
  .booking-btn-wrapper{
    font-size: 14px;
    width: 130px;
    border-radius: 2px;
  }
  .need-help-small-text{
    display: none;
  }
  .small-device-call-icon{
    display: none;
  }
  .blue-call-icon{
    display: none;
  }
  .divider-border{
  padding-right: 6px;
}
}


</style>
