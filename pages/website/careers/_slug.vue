<template>
<div>
    <header class="job-details-bg d-flex align-items-center text-uppercase text-white">
        <div class="container">
            <div class="text-center text-white job-details-header-text">
                <p class="mb-0">Join a strong <span class="brand-color">global team</span></p>
                <p class="mb-0">with a time honored legacy</p>
                <p class="mb-0">of excellence</p>
            </div>
        </div>
    </header>
    <main>
        <section>
            <div class="pt-5 bg-white px-sm-0 px-2">
                <div class="container">
                    <div class="">
                        <h1 class="brand-color">{{ vacancy.title }}</h1>
                        <div class="row">
                            <div class="col-lg-9 col-md-8 col-12 order-md-1 order-2">
                                <div v-html="vacancy.description"></div>
                                <div v-if="!vacancyExpired" class="mt-5">
                                    <a :href="vacancyExpired ? '#' : vacancyMailto" class="btn style-none btn-brand">
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 order-md-2 order-1">
                                <div style="box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;" class="bg-white p-4 mb-md-0 mb-4 rounded job-side-bar">
                                    <div v-if="!vacancyExpired" class="text-center d-md-block d-none">
                                        <a :href="vacancyExpired ? '#' : vacancyMailto" class="btn btn-brand">
                                            Apply Now
                                        </a>
                                    </div>
                                    <h6 class="mt-md-4 mt-0 font-weight-bold pt-1">Job Summary</h6>
                                    <div class="mb-md-2 mb-1">
                                        <p class="mb-0 text-secondary"><small>Vacancy</small></p>
                                        <p style="color: #343a40;" class="mb-0 font-weight-bold">No. of Vacancies: {{ vacancy.total_vacancy ?? 0 }}</p>
                                    </div>
                                    <div class="mb-md-4 mb-1">
                                        <p class="mb-0 text-secondary"><small>Location</small></p>
                                        <p style="color: #343a40;" class="mb-0 font-weight-bold">{{ vacancy.location ?? 'Anywhere' }}</p>
                                    </div>
                                    <div class="mb-md-4 mb-1">
                                        <p class="mb-0 text-secondary"><small>Job Type</small></p>
                                        <p style="color: #343a40;" class="mb-0 font-weight-bold">{{ vacancy.type ?? '-' }}</p>
                                    </div>
                                    <div class="mb-md-4 mb-1">
                                        <p class="mb-0 text-secondary"><small>Experience</small></p>
                                        <p style="color: #343a40;" class="mb-0 font-weight-bold">{{ vacancy.experience ?? '-' }}</p>
                                    </div>
                                    <div class="mb-md-4 mb-1">
                                        <p class="mb-0 text-secondary"><small>Working Hours</small></p>
                                        <p style="color: #343a40;" class="mb-0 font-weight-bold">{{ vacancy.working_hour ?? '-' }}</p>
                                    </div>
                                    <div class="mb-md-4 mb-1">
                                        <p class="mb-0 text-secondary"><small>Working Days </small></p>
                                        <p style="color: #343a40;" class="mb-0 font-weight-bold">{{ vacancy.working_day ?? '-' }}</p>
                                    </div>
                                    <div class="mb-md-4 mb-1">
                                        <p class="mb-0 text-secondary"><small>Date Posted</small></p>
                                        <p style="color: #343a40;" class="mb-0 font-weight-bold">{{ vacancy.created_at ?? '-' }}</p>
                                    </div>
                                    <div class="mb-md-2 mb-0">
                                        <p class="mb-0 text-secondary"><small>Deadline</small></p>
                                        <p style="color: #343a40;" class="mb-0 font-weight-bold">{{ vacancyExpired ? 'Expired' : (vacancy.end_date ?? 'Unlimited') }}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="pt-5 pb-4 bg-white d-md-block d-none">
                            <hr class="m-0 p-0">
                        </div>
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
            getVacancyParamObj: {
                slug: this.$route.params.slug,
                params: {},
            },
        }
    },
    computed: {
        ...mapGetters({
            vacancy: 'vacancies/vacancy',
            settingDefaultWebsiteUrl: 'settings/settingDefaultWebsiteUrl'
        }),
        vacancyExpired() {
            if (this.vacancy.end_date) {
                let endDate = Date.parse(this.vacancy.end_date);
                let currentDate = new Date();
                if (endDate < currentDate) return true;
            }
            return false;
        },

        vacancyMailto() {
            return `mailto:${this.vacancy.apply_email_address}?subject=${this.vacancy.email_subject}`;
        }
    },
    methods: {
        ...mapActions({
            getVacancyBySlug: 'vacancies/getVacancyBySlug',
            getSettings: 'settings/getSettings'
        }),

        async getSingleVacancy() {
            await this.getVacancyBySlug(this.getVacancyParamObj).then(async (response) => {
                this.loader(false);
                if (response.status === 404) {
                    this.commitNotFoundRouteStatus(true);
                    return;
                }
                if (response.message) {
                    this.showToastMessage(response);
                }
            });
        },

    },
    async mounted() {
        this.loader(true);
        await this.getSingleVacancy();
        this.loader(false);

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

.job-details-bg {
    background-image: url('/images/career/job-details-bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 500px;
}

.job-details-header-text p {
    font-size: 40px;
    text-shadow: 0 2px 1px rgb(63, 62, 62),
        -1px 3px 1px rgb(63, 62, 62);
}

.job-side-bar {
    max-width: 270px;
}

@media (min-width: 501px) and (max-width: 767px) {
    .job-details-bg {
        height: 300px;
    }

    .job-details-header-text p {
        font-size: 28px;
    }
}

@media (min-width: 320px) and (max-width: 500px) {
    .job-details-bg {
        height: 230px;
    }

    .job-details-header-text p {
        font-size: 20px;
    }
}
</style>
