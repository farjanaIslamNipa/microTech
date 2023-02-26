<template>
<div>
    <!-- {{-- Education page header --}} -->
    <header class="career-bg position-relative">
        <div class="container">
            <div class="text-white text-center career-header-container">
                <h1 class="text-white career-header-title">Careers at Geekify</h1>
                <p class="career-header-detail">
                    Join a growing team of intellectuals who share the same passion and build
                    your future. Learn, grow and thrive in a fun-loving ecosystem of tech
                    enthusiasts with one common purpose!
                </p>
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <section>
                <div class="image-collage-section text-center">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="d-md-block d-none">
                                <div class="row career-image-row">
                                    <div class="col-md-4 p-0">
                                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/career/career-1.webp" alt="Career" />
                                    </div>
                                    <div class="col-md-4 p-0">
                                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/career/career-2.webp" alt="Career" />
                                    </div>
                                    <div class="col-md-4 p-0">
                                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/career/career-3.webp" alt="Career" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 p-0">
                                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/career/career-4.webp" alt="Career" />
                                    </div>
                                    <div class="col-md-4 p-0">
                                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/career/career-5.webp" alt="Career" />
                                    </div>
                                    <div class="col-md-4 p-0">
                                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/career/career-6.webp" alt="Career" />
                                    </div>
                                </div>
                            </div>
                            <!-- {{-- image collage section for small device --}} -->
                            <div class="d-md-none d-block">
                                <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/career/career-small-banner-2.webp" alt="Career" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <!-- {{-- Why should join section --}} -->
                <div class="row justify-content-center px-0 px-sm-4">
                    <div class="col-xl-10">
                        <div class="row py-5 my-lg-4 my-2">
                            <div class="col-md-8 mt-lg-3 mt-1 order-md-1 order-2">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div style="background-color: #fff" class="career-card card-one">
                                            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/career/environment-icon.webp" alt="Career" />
                                            <p class="career-card-title">Friendly environment</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div style="background-color: #fff" class="career-card card-two">
                                            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/career/communication.webp" alt="Career" />
                                            <p class="career-card-title">open communication</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div style="background-color: #fff" class="career-card card-three">
                                            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/career/upgrade-skills.webp" alt="Career" />
                                            <p class="career-card-title">upgrade your skills</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div style="background-color: #fff" class="career-card card-four">
                                            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/career/maximize-yourself.webp" alt="Career" />
                                            <p class="career-card-title">maximize yourself</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div style="background-color: #fff" class="career-card card-five">
                                            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/career/learning-opportunity.webp" alt="Career" />
                                            <p class="career-card-title">Learning opportunity</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div style="background-color: #fff" class="career-card card-six">
                                            <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/career/secured-future.webp" alt="Career" />
                                            <p class="career-card-title">secured future</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 order-md-2 order-1">
                                <div class="text-md-right text-start pt-md-5 pt-0">
                                    <h2 class="brand-color join-team-title">Few reasons why you should join our amazing team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section>
            <!-- {{-- Bottom section --}} -->
            <div class="bg-white py-5">
                <div class="container">
                    <div class="pt-5 single-job-wrapper mx-auto">
                        <h6 class="brand-color text-center">Come work with us!</h6>
                        <h3 class="mt-3 text-center">So, You Want To Be Part Of Us?</h3>
                        <p class="text-center">We’re always looking for creative, talented self-starters to join the Geekify
                            family. Check out our open roles below and fill out an application.</p>
                        <!-- <div class="row justify-content-center">
                            <div class="col-md-8">

                                <div class="text-center d-flex align-items-center">
                                    <input v-model="getVacanciesParams.title" class="form-control career-search-input" type="search" placeholder="Search" aria-label="Search">
                                    <button @click="applyVacancyFilter(null)" class="btn my-2 my-sm-0 career-search-btn" type="button">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                        </div> -->
                        <div v-if="vacancies.length > 0" class="py-4">
                            <router-link v-for="(vacancy, index) in vacancies" :key="index" :to="{name: 'careers-slug', params: {slug: vacancy.slug, id: vacancy.id} }" class="mb-4 single-job d-block py-4 pl-3 pl-sm-4">
                                <div class="row ps-4 pe-2">
                                    <div class="col-sm-4">
                                        <h6 style="color: #131315;" class="font-weight-bold text-start ">
                                            {{ vacancy.title }}
                                        </h6>
                                    </div>
                                    <div class="col-sm-3">
                                        <p class="mb-sm-2 mb-0 d-sm-block d-inline-block">Experience<span class="d-sm-none d-inline-block">:</span></p>
                                        <p class="text-dark font-weight-bold mb-0 d-sm-block d-inline-block">{{ vacancy.experience }}</p>
                                    </div>
                                    <div class="col-sm-3">
                                        <p class="mb-2 d-sm-block d-inline-block">Deadline<span class="d-sm-none d-inline-block">:</span></p>
                                        <p class="mb-0 font-weight-bold d-sm-block d-inline-block">{{ vacancy.end_date ?? 'Unlimited' }}</p>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="text-center d-sm-block d-none">
                                            <span class=""><i class="fas fa-long-arrow-alt-right"></i></span>
                                        </div>
                                        <p class="mb-0 brand-color text-start d-sm-none d-block">View Job</p>
                                    </div>
                                </div>
                            </router-link>
                            <ListPagination position="right" :pagination-data="paginateLinks" @getClickedPage="applyVacancyFilter" />
                        </div>
                        <div v-else class="py-4">
                            <div class="text-center mb-4">
                                <span class="h4 brand-color">Sorry, no vacancies available!</span>
                            </div>
                        </div>

                    </div>

                    <!-- {{-- contact us section --}} -->
                    <div class="text-center py-3">
                        <h3 class="mb-2">Can’t find what you are looking for?</h3>
                        <p style="font-size: 18px;" class="my-2">Contact us because we are always looking for talented people. </p>
                        <a href="careers@geekify.au" class="btn career-button">Email Us: careers@geekify.au</a>
                        <!-- <a :href="vacancyMailto" class="btn career-button">Email Us: {{ settingVacancyApplyEmailAddress.value }}</a> -->
                    </div>
                </div>
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

    name: 'Careers',
    layout: 'website-layout',
    mixins: [Loader, ShowToastMessage, Authorization],

    data() {
        return {
            getSettingsParams: {
                type: ['vacancy'],
                key: ['vacancy_apply_email_address'],
            },

            getVacanciesParams: {
                title: '',
                status: 1,
                paginate: 1,
                order_by_id: 'DESC',
                page: ''
            },
        }
    },
    computed: {
        ...mapGetters({
            settingVacancyApplyEmailAddress: 'settings/settingVacancyApplyEmailAddress',
            vacancies: 'vacancies/vacancies',
            paginateLinks: 'vacancies/paginateLinks',
        }),
        vacancyMailto() {
            return `mailto:${this.settingVacancyApplyEmailAddress.value}`;
        }
    },
    methods: {
        ...mapActions({
            getSettings: 'settings/getSettings',
            getVacancies: 'vacancies/getVacancies',
        }),

        async getSettingList() {
            await this.getSettings(this.getSettingsParams);
        },

        async getVacancyList() {
            await this.getVacancies(this.getVacanciesParams).then(async (response) => {
                if (response.message && response.status !== 200) {
                    this.showToastMessage(response);
                }
            })
        },

        async applyVacancyFilter(pageNumber) {
            this.loader(true);
            this.getVacanciesParams.page = pageNumber;
            await this.getVacancyList();
            this.loader(false);
        },
    },
    async mounted() {
        this.loader(true);
        await this.getVacancyList();
        this.loader(false);

    },
   async created() {
      await this.getSettingList();
      await this.getVacancyList();
    },
    head() {
      return {
        // title: 'Careers |',
        meta: [
          { hid: 'og:title',property: 'og:title', name:'meta', content: `Careers | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Careers | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url', name:'meta', content: 'https://geekify.au/careers/'},
          { hid: 'twitter:domain', property: 'twitter:domain', name:'meta', content: 'https://geekify.au/careers/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/careers/' }
        ],
      }
    }

}
</script>

<style scoped>

.career-bg {
    background-image: url('/images/career/career-bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    height: 620px;
}

.career-header-container {
    padding-top: 150px;
}

.career-header-title {
    font-size: 48px;
    font-weight: 500;
}

.career-header-detail {
    font-size: 20px;
    padding: 0 100px;
}

.career-search-icon img {
    height: 40px;
}

/* image collage section */
.image-collage-section {
    margin-top: -220px;
    position: relative;
}

.career-image-row {
    margin-bottom: 40px;
}

.career-card {
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    padding: 30px 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
}

.career-card-title {
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    margin-top: 10px;
    margin-bottom: 0;
}

.card-one {
    margin-top: 80px;
}

.card-two {
    margin-top: 40px;
}

.card-four {
    margin-top: 30px;
}

.card-five {
    margin-top: -10px;
}

.card-six {
    margin-top: -50px;
}

.career-button {
    background-color: var(--brandColor);
    border-radius: 5px;
    color: white;
    padding: 8px 20px;
    border: 1px solid var(--brandColor);
    transition: all 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
}

.join-team-title {
    font-size: 42px;
    padding-left: 40px;
}

.career-button:hover {
    color: var(--brandColor);
    background-color: white;
}

.single-job {
    background-color: #EBEBEB;
    text-decoration: none;
    color: #3e3e3e;
    border-radius: 5px;
    border-bottom: 2px solid rgb(180, 180, 180);
    transition: all 0.3s ease;
}

.single-job:hover {
    color: #3e3e3e;
    box-shadow: rgba(0, 0, 0, 0.45) 0 25px 20px -20px;
}

@media (min-width: 850px) {
    .single-job-wrapper {
        width: 80%;
    }
}

@media (min-width: 1200px) and (max-width: 1399px) {

    .join-team-title {
        padding-left: 20px;
    }

}

@media (min-width: 992px) and (max-width: 1199px) {
    .career-bg {
        height: 600px;
    }

    .join-team-title {
        padding-left: 40px;
    }

}

@media (min-width: 992px) and (max-width: 1024px) {

    .join-team-title {
        padding-left: 20px;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .career-bg {
        height: 520px;
    }

    .career-header-container {
        padding-top: 60px;
    }

    .join-team-title {
        padding-left: 20px;
        font-size: 32px;
    }

    .career-card {
        padding: 20px 10px;
    }

    .career-card img {
        height: 60px;
    }

}

@media (max-width: 767px) {
    .career-bg {
        padding-top: 20px;
    }
}

@media (min-width: 575px) and (max-width: 767px) {
    .career-bg {
        height: 430px;
    }

    .career-header-container {
        padding-top: 60px;
    }

    .career-header-title {
        font-size: 42px;
    }

    .career-header-detail {
        font-size: 18px;
        padding: 0 30px;
    }

    .image-collage-section {
        margin-top: -170px;
    }

    .join-team-title {
        padding-left: 0;
        font-size: 34px;
    }

    .card-one {
        margin-top: 30px;
    }

    .card-two,
    .card-three,
    .card-four,
    .card-five,
    .card-six {
        margin-top: 20px;
    }
}

@media (min-width: 425px) and (max-width: 574px) {
    .career-bg {
        height: 400px;
    }

    .career-header-container {
        padding-top: 50px;
    }

    .career-header-title {
        font-size: 38px;
    }

    .career-header-detail {
        font-size: 18px;
        padding: 0 20px;
    }

    .image-collage-section {
        margin-top: -140px;
    }

    .join-team-title {
        padding-left: 0;
        font-size: 34px;
    }

    .card-one {
        margin-top: 30px;
    }

    .card-two,
    .card-three,
    .card-four,
    .card-five,
    .card-six {
        margin-top: 20px;
    }
}

@media (min-width: 320px) and (max-width: 424px) {
    .career-bg {
        height: 370px;
    }

    .career-header-container {
        padding-top: 50px;
    }

    .career-header-title {
        font-size: 32px;
    }

    .career-header-detail {
        font-size: 16px;
        padding: 0 20px;
    }

    .image-collage-section {
        margin-top: -100px;
    }

    .join-team-title {
        padding-left: 0;
        font-size: 32px;
    }

    .card-one {
        margin-top: 30px;
    }

    .card-two,
    .card-three,
    .card-four,
    .card-five,
    .card-six {
        margin-top: 20px;
    }
}
</style>
