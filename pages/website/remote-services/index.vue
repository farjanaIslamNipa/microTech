<template>
<div class="bg-white pb-1">
    <!-- {{-- Page header --}} -->
    <header>
        <div class="remote-service-header-bg py-5">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-7 col-sm-8">
                        <div class="d-flex justify-content-sm-end justify-content-center">
                            <div class="remote-service-header-content text-white">
                                <h1 class="mb-xl-4 mb-2">Geeks Remote Services</h1>
                                <h2 class="mb-1">At Geekify, we would like to assure you that we</h2>
                                <h2 class="mb-1">will continue to provide unfaltering support and</h2>
                                <h2 class="mb-1">find ways to help you with your IT problems.</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-4">
                        <div class="text-right d-sm-block d-none">
                            <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/remote-service/header-img.webp" alt="Remote Service" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section class="pt-5 pb-lg-5 pb-0 my-sm-3 my-0">
        <div class="container">
            <p class="mb-0 medium-font">Due to the Covid-19 pandemic, it has become increasingly difficult to provide
                on-site technical services. In the IT sector, services that would need a professional to visit the
                customer were very difficult or impossible to continue depending on the safety measures put in place.
                The circumstances have made services that would minimize physical contact essential for our daily lives.
                As a result, there has been an exponentially growing demand for Remote Desktop services since the
                beginning of the global disaster.
            </p>

            <div class="mt-lg-5 mt-3">
                <!-- Button trigger modal -->
                <button title="Click to see and install the remote help guideline" type="button" class="btn text-danger guideline-btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <span class="d-flex align-items-center">
                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="me-2 guideline-icon" src="/images/remote-service/guide-icon.webp" alt="Remote Service" />
                        <span class="animate-character">Guidelines for your next Remote Help from Geekify.</span>
                    </span>
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content rounded">
                            <div class="modal-header border-0">
                                <h5 class="modal-title"></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="bg-white p-3 rounded ">
                                <div class="bg-brand p-3 text-center guideline-modal-header">
                                    <h3 class="text-white mb-0">Guidelines for your next Remote Help from</h3>
                                    <h3 class="text-dark font-weight-bold">Geekify</h3>
                                </div>
                                <div class="row align-items-center">
                                    <div class="pt-4 col-lg-8 col-12">
                                        <h6 class="font-weight-bold">1. <u>Choose where to place your request.</u></h6>
                                        <div class="pl-3">
                                            <h6 class="font-weight-bold"> A) Online Booking</h6>
                                            <ul>
                                                <li>Fill in the online booking form and once you get to “Choose Service” under “Service
                                                    Name”, please chose “Remote Help”
                                                </li>
                                                <li>Finish the form and finalise your request. You will be receiving an email confirmation
                                                    once a Geek a has been assigned.
                                                </li>
                                            </ul>
                                            <h6 class="d-inline"><span class="font-weight-bold">B) Call us </span></h6>
                                            <p class="mb-0 d-inline">at <span>{{ settingDefaultContactNumber?.value?.display ?? '' }}</span> and be assisted by one of our team members. Please
                                                mention the request for a remote appointment.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 d-lg-block d-none">
                                        <div class="p-4"><nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/remote-service/modal-px.webp" alt="Remote Service" /></div>
                                    </div>
                                </div>
                                <div class="py-4">
                                    <h6 class="font-weight-bold pr-3">2. Please download this material to get the specific steps to
                                        install the software to be used for the session.</h6>
                                    <div class="row align-items-center justify-content-center pt-4">
                                        <div class="col-md-6 col-12">
                                            <div class="text-md-center text-start mb-md-0 mb-3">
                                                <a href="~/assets/files/any-desk-installation.pdf" target="_blank"  download="Anydesk Installation">
                                                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid anydesk-icon me-md-2 me-4" src="/images/remote-service/any-desk-logo.webp" alt="Any Desk" />
                                                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid pdf-icon" src="/images/remote-service/pdf-icon.webp" alt="Remote Service" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="">
                                                <a href="~/assets/files/team-viewer-installation.pdf" download="Teamviewer Installation">
                                                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid team-viewer-icon me-2" src="/images/remote-service/team-viewer-logo.webp" alt="Team Viewer" />
                                                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid pdf-icon" src="/images/remote-service/pdf-icon.webp" alt="Remote Service" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="font-weight-bold pt-4 pb-3 pr-3">3. Wait for our Geek to give you a call on or
                                        between the hour of the appointment time. From here, our expert will advise the next best
                                        course of action.</h6>
                                    <h6 class="text-danger font-weight-bold">**Please note there are some scenarios where a remote
                                        service might not best fit your issue and booking an onsite visit will be highly
                                        recommended.</h6>
                                </div>
                                <div class="bg-brand p-4 guideline-footer-content text-white">
                                    <p class="mb-1">1. No network connectivity or internet connection – our specialists will
                                        definitely find it impossible connect to your computer and fix.</p>
                                    <p class="mb-1">2. Startup problems – if you are experiencing problems to boot your system into
                                        the Windows or Mac OS desktop (hardware problems, such as memory, hard disk failure or a blank
                                        screen) we wouldn’t be able hook up to your system.</p>
                                    <p class="mb-0">3. Physical hardware repair - parts upgrades or replacements, broken screens and
                                        water spillage on device are just some issues that a remote session won’t be appropriate.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- {{-- HASSLE FREE REMOTE SERVICE EXPERIENCE --}} -->
        <div class="hassle-free-banner py-lg-5 py-3 mt-4">
            <div class="container">
                <div class="row pb-5 pt-4 align-items-center">
                    <div class="col-md-6">
                        <div class="pr-lg-5 pr-0 mb-md-0 mb-4">
                            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/remote-service/hassle-free-service.webp" alt="Remote Service" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-lg-5 pl-0">
                            <h3 class="font-weight-bold">Hassle Free Remote Service Experience</h3>
                            <p class="p-font">Remote Desktop Services are a replacement for physical visits to your local
                                computer repair shop or appointment with an IT technician. In many cases, such services are not
                                comparable to a physical visit. Therefore, Geekify has expanded its services by forming a team
                                of IT experts who are able to assist clients remotely. These professionals are equally effective
                                in assisting you online than an otherwise physical appointment. By using analysis software and
                                other tools they are quickly able to find issues within your personal computer and resolve them.
                                The procedure is hassle-free and doesn't require you to even leave your desk. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- {{-- PROTECTING YOUR ASSETS AND YOUR BRAND --}} -->
        <div class="protecting-asset-banner py-lg-5 py-3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 order-md-1 order-2">
                        <div class="pr-lg-5 pr-0 pt-5">
                            <h3 class="font-weight-bold">Protecting your assets and your brand</h3>
                            <p class="p-font">Our remote technologies use secured connections and utilize protocols that prevent
                                any data breach. By implementing strict guidelines regarding consumer privacy, we ensure that your
                                information is handled with utmost care and safety. With the availability of a well-equipped team,
                                almost all our IT services are now accessible to you via the internet. We are able to do this
                                without any compromise in the speed or quality of our products. Interestingly, our services are
                                even faster given there is no travel time required for our personnel, leaving them more time to
                                attend to your needs. However, in the case where a hardware issue is diagnosed and the online
                                alternative is ineffective, a physical appointment must be arranged.</p>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-2 order-1">
                        <div class="pl-lg-5 pl-0 pt-lg-5 pt-md-0 pt-5">
                            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/remote-service/protecting-assets.webp" alt="Remote Service" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- {{-- QUALITY IT SERVICE --}} -->
        <div class="py-lg-5 py-3">
            <div class="container">
                <div class="row pb-md-5 pb-3 align-items-center">
                    <div class="col-md-6">
                        <div class="pr-lg-5 pr-0 mb-md-0 mb-5">
                            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/remote-service/quality-service.webp" alt="Remote Service" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-lg-5 pl-0">
                            <h3 class="font-weight-bold">Quality IT service while keeping you safe</h3>
                            <p class="p-font">The services we offer include but are not limited to system diagnosis, remote data
                                backup and recovery, cloud services, and business IT advice. We also offer online maintenance,
                                secure installation of software packages through our online services. Our experts take no chances
                                for your computer system and the data within it to be exposed to any sort of risks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- {{-- REMOTE SERVICE FOR BUSINESS --}} -->
        <div class="remote-service-bg">
            <div class="container text-center">
                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/remote-service/remote-services.webp" class="img-fluid" alt="Remote Service" />
                <h3 class="font-weight-bold pt-4 brand-color">Remote services for your business</h3>
                <div class="px-md-5 px-2 mx-lg-5 mx-0">
                    <p class="p-font px-lg-5 px-0">Available to our commercial clients are a set of tools that would enable
                        their employees to be increasingly productive online from the comfort of their homes. We strive our
                        best to ensure that our business clients do not lose any productivity due to the current situation.
                        Instead, our dedication is to make their profit more from the situation.</p>
                </div>
                <div class="pt-lg-5 pt-3">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/remote-service/b2b-package-bg.webp" class="img-fluid" alt="B2B Package" />
                </div>
            </div>
        </div>

    </section>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    name: 'TechSupport',
    layout: 'website-layout',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            settingDefaultContactNumber: 'settings/settingDefaultContactNumber',
        }),

    },
    methods: {

    },
    head() {
      return {
        // title: 'Remote Service |',
        meta: [
          { hid: 'og:title',property: 'og:title', name:'meta', content: `Remote Service | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Remote Service | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/remote-services/'},
          { hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/remote-services/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/remote-services/' }
        ],
      }
    }

}
</script>

<style scoped>
.remote-service-header-bg {
    background-image: url('/images/remote-service/header-bg.webp');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left bottom;
}

.remote-service-header-content h1 {
    font-size: 60px;
    font-weight: bold;
}

ul>li {
    font-family: var(--fontRoboto);
}

.p-font {
    font-size: 17px;
}

.guideline-btn {
    font-size: 20px !important;
    font-weight: bold;
    padding: 0 !important;
}

.hassle-free-banner {
    background-image: url('/images/remote-service/hassle-free-banner.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
}

.protecting-asset-banner {
    background-image: url('/images/remote-service/protecting-assets-banner.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
}

.remote-service-bg {
    background-image: url('/images/remote-service/remote-service-bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
}

.guideline-icon {
    height: 20px;
}

.guideline-modal-close-btn {
    position: absolute;
    top: -40px;
    right: -35px;

}

.guideline-modal-close-btn span {
    font-size: 28px;
}

.guideline-modal-header {
    border-radius: 5px 5px 0 0;
}

.team-viewer-icon {
    height: 30px;
}

.anydesk-icon {
    height: 20px;
}

.pdf-icon {
    height: 60px;
}

.guideline-footer-content {
    border-radius: 0 0 5px 5px;
}

.animate-character {
    text-transform: uppercase;
    background-image: linear-gradient(-225deg, rgb(194, 11, 11) 0%, red 29%, var(--brandColor) 67%, #fff800 100%);
    background-size: 200% auto;
    color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2.5s linear infinite;
    display: inline-block;
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
}

@media (max-width:1199px) {
    .remote-service-header-content h1 {
        font-size: 52px;
    }

    .remote-service-header-content h2 {
        font-size: 26px;
    }
}

@media (max-width:992px) {
    .remote-service-header-content h1 {
        font-size: 42px;
    }

    .remote-service-header-content h2 {
        font-size: 20px;
    }
}

@media (max-width:767px) {

    .remote-service-header-content h1 {
        font-size: 36px;
    }

    .remote-service-header-content h2 {
        font-size: 18px;
    }

    .guideline-btn {
        font-size: 15px !important;
        text-align: start !important;
    }

    .guideline-modal-close-btn {
        position: absolute;
        top: -15px;
        right: -11px;

    }

    .guideline-modal-close-btn span {
        font-size: 23px;
    }
}

@media (max-width:575px) {
    .remote-service-header-bg {
        background-size: cover;
    }

    .remote-service-header-content h2 {
        font-size: 17px;
    }

}

@media(max-width: 487px) {
    .guideline-btn {
        font-size: 15px !important;
        text-align: start !important;
    }

    .remote-service-header-content h1 {
        font-size: 30px;
    }

    .remote-service-header-content h2 {
        font-size: 14px;
    }

    .guideline-icon {
        height: 30px;
    }
}
</style>
