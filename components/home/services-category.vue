<template>
<section>
    <div class="light-gray-bg">
        <div class="container">
            <div class="d-md-flex d-block align-items-end justify-content-between">
                <div class="browse-category">
                    <div class="pt-5 pe-xl-0 pe-3">
                        <div class="browse-category-title">
                            <h1 class="ps-lg-3 ps-sm-1 ps-0">Browse by category</h1>
                        </div>
                        <p class="pt-3 text-18 mb-2 browse-category-sub-title">Find the type of service you need, Enter your key word below and search.</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="" style="position: relative;">
                            <input v-model="serviceName" type="text" class="form-control header-search-input" placeholder="Find your service here" area-label="Search">
                            <!-- <i style="position: absolute; top: 50%; right: 20%;transform: translate(-50%, -50%);" class="fa-solid fa-x"></i> -->
                        </div>
                        <button class="btn header-search-btn" @click="serviceCategoryFilterHandler()" type="submit">Search</button>
                    </div>
                </div>
                <!-- <div class="mt-md-0 mt-3">
                    <NuxtLink class="text-default hover-brand" :to="{name: 'services'}">Browse all <i class="fa-solid fa-arrow-right-long"></i></NuxtLink>
                </div> -->
            </div>
        </div>
    </div>
    <div class="services-category-container pt-5">
        <div class="container">
            <div class="row">
                <div v-for="(serviceCategory) in filteredServiceCategories" :key="serviceCategory.id" class="col-xl-4 col-md-6 mb-4">
                    <NuxtLink :to="{name:'service-category-slug', params:{slug:serviceCategory.slug}}" class="service-category-card d-block text-default pt-4 ps-4 card-shadow rounded h-100 bg-white">
                        <p class="text-capitalize mb-0 text-20 text-500">{{ serviceCategory.name }}</p>
                        <div class="d-flex align-items-end">
                            <div class="pb-5 w-100">
                                <p class="mb-0 text-blue text-600">See All</p>
                                <div class="d-flex align-items-center">
                                    <div class="round"></div>
                                    <div class="line w-100"></div>
                                </div>
                            </div>
                            <div class="text-end w-100" >
                                <nuxt-img preload format="webp" quality="80" loading="lazy" class="card-img d-md-block d-none" :src="serviceCategory.image" :alt="serviceCategory.name" />
                                <nuxt-img preload format="webp" quality="80" loading="lazy" class="card-img d-md-none"  :src="serviceCategory.image" :alt="serviceCategory.name" />
                            </div>
                        </div>
                    </NuxtLink>
                </div>
                <div class="col-xl-4 col-md-6 mb-4">
                    <NuxtLink to="#" class="service-category-card d-block text-default card-shadow rounded h-100 solid-bg-card py-md-0 py-5">
                        <div class="d-flex justify-content-center align-items-center h-100">
                            <div>
                                <div class="d-flex align-items-center">
                                    <div><nuxt-img preload format="webp" quality="80" loading="lazy" class="check-mark" src="/images/home/check-mark.webp" alt="Check Mark" /></div>
                                    <p class="text-white mb-0 ms-2 special-card-title">Book Online And Get 10% OFF</p>
                                </div>
                                <div class="d-flex align-items-center my-4">
                                    <div><nuxt-img preload format="webp" quality="80" loading="lazy" class="check-mark" src="/images/home/check-mark.webp" alt="Check Mark" /></div>
                                    <p class="text-white mb-0 ms-2 special-card-title">Same Day Service</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div><nuxt-img preload format="webp" quality="80" loading="lazy" class="check-mark" src="/images/home/check-mark.webp" alt="Check Mark" /></div>
                                    <p class="text-white mb-0 ms-2 special-card-title">Geekify Membership</p>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
import Loader from '~/mixins/Loader';
import ShowToastMessage from '~/mixins/ShowToastMessage';

export default {
    name: 'ServicesCategory',
    mixins: [Loader, ShowToastMessage],
    data() {
        return {
            serviceName: '',
            serviceCategorires: [],
            getServiceCategoriesParam: {
                status: 1,
                show_website: 1,
                order_by_website_sort_order: 'ASC',
                with_relation: ['media', 'services.media'],
            }
        }
    },
    computed: {
        ...mapGetters({
            serviceCategories: 'serviceCategories/serviceCategories',
        }),

        filteredServiceCategories() {
            return this.serviceCategories.map((singleServiceCategory) => {
                return {
                    ...singleServiceCategory,
                    services: singleServiceCategory.services.filter((service) => service.status === "Active" && service.show_website === 'Active')
                }
            });
        }
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
        async serviceCategoryFilterHandler() {this.$router.push({
          name:'services',
          params:{
            serviceName:this.serviceName
          }

        });
            // this.loader(true);
            // await this.getServiceCategories({
            //     name: this.serviceCategoryName
            // });
            // this.loader(false);
        },
        async serviceFilterHandler() {
            this.loader(true);
            await this.getServices({
                name: this.serviceName
            });
            this.loader(false);
        }

    },
    async mounted() {
        await this.getServiceCategoryList();
    },
    // async fetch() {
    //     await this.getServiceCategoryList();

    // }

}
</script>

<style scoped>
.light-gray-bg {
    background-image: url('/images/home/gray-bg.webp');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 450px;
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
    background-color: var(--lightGray);
    display: inline-block;
    z-index: 3;
    position: relative;
    margin: 0;
    margin-left: 100px;
    font-size: 50px;
}

.card-img {
    height: 250px;
    width: 250px;
    object-fit: cover;
}

.miscellaneous-img {
    /* height: 250px;
  width: 350px;
  object-fit: cover; */
}

.round {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: var(--brandColor);
}

.line {
    border-top: 1px solid var(--brandColor);
}

.solid-bg-card {
    background-image: url('/images/home/service-card-blue-bg.webp');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: cover;
}

.services-category-container {
    margin-top: -220px;
}

.header-search-input {
    background: none;
    border: 1px solid #d1d1d1;
    border-radius: 5px 0 0 5px;
    height: 45px;
    width: 450px;
    /* color: #d1d1d1; */
    clip-path: polygon(0 0, 100% 0%, 88% 100%, 0% 100%);
}

.header-search-btn {
    background-color: var(--brandColor);
    border: 1px solid var(--brandColor);
    border-radius: 0 5px 5px 0;
    height: 45px;
    color: white;
    font-weight: 600;
    font-size: 18px;
    clip-path: polygon(22% 0, 100% 0%, 100% 100%, 0% 100%);
    margin-left: -59px;
    padding: 0 35px;
}

.browse-category {
    width: 75%;
}

.service-category-card:hover {
    color: var(--secondaryColor);
    transition: all 0.3s ease;
}

.service-category-card:hover .card-img {
    transform: scale(0.9);
    transition: all 0.5s ease;
}

.service-category-card:hover .miscellaneous-img {
    transform: scale(0.9);
    transition: all 0.4s ease;
}
.special-card-title {
        font-size: 20px;
        font-weight: 500;
    }

.check-mark{
  height: 15px;
  width: 15px;
}
@media(max-width:1199px) {
    .browse-category-title h1 {
        font-size: 42px;
    }

    .browse-category-sub-title {
        font-size: 17px;
    }
}

@media(max-width:992px) {
    .light-gray-bg {
        background-image: none;
        background-color: #f1f5f6;
    }

    .browse-category-title h1 {
        /* font-size: 40px; */
        margin-left: 60px;
    }

    .browse-category-sub-title {
        font-size: 15px;
    }

    .header-search-input {
        width: 400px;
    }

    .header-search-btn {
        font-size: 17px;
    }

    .services-category-container {
        margin-top: -270px;
    }
}

@media(max-width:767px) {
    .browse-category {
        width: 100%;
    }

    .browse-category-title h1 {
        font-size: 38px;
    }

    .header-search-btn {
        font-size: 17px;
        padding: 0 25px;
    }

    .services-category-container {
        margin-top: -250px;
    }

    .header-search-input {
        width: 350px;
    }

}

@media(max-width:475px) {
    .browse-category-title h1 {
        font-size: 28px;
        margin-left: 0px;
    }

    .header-search-btn {
        font-size: 15px;
        padding: 0 15px;
    }

    .services-category-container {
        margin-top: -240px;
    }

    .card-img {
        height: 220px;
        width: 220px;
        object-fit: cover;
    }

    .special-card-title {
        font-size: 18px;
    }

    .header-search-input {
        width: 280px;
    }
}
</style>
