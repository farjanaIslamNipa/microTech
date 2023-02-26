<template>
  <div>
    <HomeHeaderSection />
    <section class="bg-light download-app-wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-7">
            <div class="text-md-start text-center">
              <h1 class="text-blue download-app-title mb-0">App is available for free on app store</h1>
              <p style="line-height: 1;" class="mb-0 download-app-sub-title">Find and book your appointment from anywhere with our Geekify customer app.</p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="d-flex justify-content-md-end justify-content-center mt-md-0 mt-2">
              <div class="pt-1">
                  <a :href="settingDefaultCustomerMobApp?.android?.app_link??'#'" target="_blank" rel="noopener noreferrer">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="app-icon" src="/images/global/google-play.webp" alt="App Download" />
                  </a>
                  <a :href="settingDefaultCustomerMobApp?.ios?.app_link??'#'" class="ms-lg-3 ms-md-1 ms-0" target="_blank" rel="noopener noreferrer">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="app-icon" src="/images/global/app-store.webp" alt="App Download" />
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-md-5 py-4 mb-md-5 mb-4">
      <HomeBookingStep />
    </section>
    <HomeServicesCategory />
    <section class="geekify-subscription mt-lg-5 mt-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div>
              <div class="browse-category-title"><h1 class="ps-sm-3 ps-0 introducing-geekify-title">Introducing Our</h1></div>
              <h1 class="brand-color geekify-membership-title">Geekify Membership</h1>
              <p class="text-18 pt-3">With Geeks, your onsite computer tech specialist, we are offering you an exclusive subscription plan to cater to all your tech needs. This limited offer gives you 1 <span class="text-uppercase">FREE</span> home visit <span class="text-uppercase">EVERY MONTH!</span></p>
              <div class="pt-lg-5 pt-4">
                <ButtonsOutlinedBreakBtn :text="'Be a Member'" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mt-lg-0 mt-5 pt-lg-0 pt-3">
              <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/home/subscription.webp" alt="subscription" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <HomeWhyChooseUs />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HomePage',
  layout: 'website-layout',
    head() {
      return {
        // title: 'Home |',
        meta: [
          { hid: 'og:title',property: 'og:title',  name:'meta', content: `Home | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Home | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url',  name:'meta', content: 'https://geekify.au/'},
          { hid: 'twitter:domain', property: 'twitter:domain',  name:'meta', content: 'https://geekify.au/'},
          {
            hid: 'keywords',
            name: 'keywords',
            contents: 'geekify, geeks crs, geeks, geeks australia, geekify au, best pc fixer, computer services sydney, dial a geek sydney, pc moving slow, computer help sydney, computer repairs surry hills, geeksoncall, imac repairs sydney, computer repairs preston, Geek Mobile, Mac Computer Repair, why is my pc so slow, Mac Expert, Fix Slow Computer, jim\'s computer services, iMac Repair Services, mac repair, home pc repair, get rid of viruses, geek squad, how to fix a slow computer, slow pc fix, data storage recovery, computer learning for seniors, fix lap top, computer fix sydney, computer repairs bondi junction, computer repairs maroubra, why is my desktop so slow, my computer loads slow, Home Networking, Geeks Sydney, computer repair hawthorn, IT Infrastructure Services, Mac Recovery, my computer is slow how to fix, IT Service Contract, why is my pc lagging, Jims Computer Services, Geeks CRS, You point it we fix it, geeks in sydney, laptop rescue sydney, Mobile Geeks, computer loading slowly, dial a geek, computer repairs footscray, computer repairs brunswick, Mac Computer Services, Mac Computer Backup, Mac Computer Troubleshooting, why is my computer loading so slowly, fix my pc, hard disk drive recovery, computer repairs sydney, why is computer so slow, geekmobile, Super Geek, computer repairs randwick, fix my slow computer, Mac Repair Services, computer geeks sydney, Mac Installation, Geeks2u, computer nerds near me, computer repair sydney cbd, Computer Geeks, mac repairs sydney, geeks to you sydney, geeks2u sydney, the geeks computer service, laptop fix sydney, how to fix computer speed, computer repairs bondi, geekify, my pc is lagging, computer repairs glen iris, computer very slow how to fix, geeks services, Mac Computer Upgrade, geeks4me, GCRS Sydney, apple mac repair near me, geek pc repair, computer courses for seniors, computer courses for the elderly, computer training for seniors, hard disk restore, laptop service sydney, computer repairs north sydney, clean up slow computer, pc repair sydney, computer repair coogee, computer repairs marrickville, laptop repair sydney cbd, buzzageek, it support northern beaches, mac pro services, computer very slow to start, hire a geek, fix my mac near me, Mac Keyboard Repair, local computer classes for seniors, Fix Slow Windows, Geeks CRS Sydney'
          },
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/' },
          { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
        ],
      }
  },
  computed:{
      ...mapGetters({
        settingDefaultCustomerMobApp: 'settings/settingDefaultCustomerMobApp'
      })
    },

}
</script>

<style scoped>
.add-banner-img{
  height: auto;
  max-width: 900px;
  margin: 0 auto;
}
.add-banner-img img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.geekify-subscription{
  background-image: url('/images/home/g-bg.webp');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
  padding: 120px 0;
}
.browse-category-title {
    width: 100%;
    position: relative;
}

.browse-category-title:after {
    content: '';
    width: 100px;
    border-bottom: solid 2px var(--brandColor);
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 1;
}

.browse-category-title h1 {
    background-color: white;
    display: inline-block;
    z-index: 3;
    position: relative;
    margin: 0;
    margin-left: 100px;
    font-size: 50px;
}
.introducing-geekify-title {
    background-color: white;
    display: inline-block;
    z-index: 3;
    position: relative;
    margin: 0;
    margin-left: 100px;
    font-size: 50px;
}
.geekify-membership-title{
  margin-left: 110px;
}
.download-app-title{
  font-size: 30px;
}
.download-app-wrapper{
  padding: 40px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
@media(max-width:1399px){
  .geekify-subscription{
    padding: 60px 0;
  }
}
@media(max-width:1199px){
  .geekify-subscription{
    padding: 80px 0;
  }
  .introducing-geekify-title{
    font-size: 45px !important;
    margin-left: 70px !important;
  }
  .geekify-membership-title{
    font-size: 35px !important;
    margin-left: 70px !important;
  }
}

@media(max-width:991px){
  .download-app-wrapper{
    padding: 30px 0;
  }
  .download-app-title{
    font-size: 22px;
  }
}
@media(max-width:767px){

  .geekify-subscription{
    padding: 60px 0 80px;
  }
  .introducing-geekify-title {
    font-size: 40px !important;
  }
  .geekify-membership-title{
    font-size: 38px !important;
    margin-left: 80px !important;
}
.download-app-title{
    font-size: 18px;
  }
.download-app-sub-title{
  font-size: 14px;
}

}


@media(max-width:475px){
  .geekify-subscription{
    padding: 40px 0 70px;
  }
  .introducing-geekify-title {
    font-size: 28px !important;
    margin-left: 0 !important;
  }
  .geekify-membership-title{
    font-size: 28px !important;
    margin-left: 0 !important;
}
.download-app-wrapper{
    padding: 20px 0;
  }
.download-app-title{
    font-size: 16px;
  }
.download-app-sub-title{
  font-size: 12px;
}
}
</style>
