<template>
<div class="bg-white">
    <section class="review-banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="review-header-content py-4">
                        <h4>Have</h4>
                        <h1>Confidence</h1>
                        <h4>in our service</h4><br>
                        <p class="review-banner-text">See what our beloved customers have to say about us below.</p>
                        <small class="" style="font-size:14px">* No hassles! No worries! No problems!</small>
                        <div class="text-center py-4"><nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/review/satisfaction-guarantee.webp" alt="Satisfaction Guarantee" /></div>
                        <!-- <div class="text-center">
                            <router-link class="btn btn-brand px-4 mt-2" :to="{name: 'websiteOnlineAppointment'}">Book Online</router-link>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-5">
        <div class="container">
            <div class="default-container-width">
                <h3 class="font-weight-bold text-center">Customers Review</h3>
                <div class="row my-sm-5 my-4">
                    <div v-for="(review, index) in customerReview" :key="index" class="col-xl-3 col-lg-4 col-md-6 col-12 mb-xl-0 mb-4">
                        <div style="box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;" class="bg-white h-100">
                            <div class="card-top">
                                <p :id="'review-text' + index" class="px-3 mb-0 review-text-height">
                                    <span class="brand-color quote-icon"><i class="fas fa-quote-left"></i></span>
                                    <span>{{ review.review }}</span>
                                </p>
                                <p v-if="review.review.length > 142" @click="showFullReview(index)" :id="'continue-reading' + index" class="brand-color truncate-text mt-n2 mb-0 text-right pr-4 ">....Continue Reading</p>
                            </div>
                            <div class="bg-white py-2">
                                <div class="row align-items-center">
                                    <div class="col-6 card-border-left">
                                        <div class="text-center">
                                            <nuxt-img preload format="webp" quality="80" loading="lazy" class="card-img " src="/images/review/pro-pic.webp" alt="Profile" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="pl-2">
                                            <span class="brand-color"><i class="fas fa-star"></i></span>
                                            <span class="brand-color"><i class="fas fa-star"></i></span>
                                            <span class="brand-color"><i class="fas fa-star"></i></span>
                                            <span class="brand-color"><i class="fas fa-star"></i></span>
                                            <span class="brand-color"><i class="fas fa-star"></i></span>
                                            <div class="py-2">
                                                <h6 class="mb-0 font-weight-bold">{{review.name}}</h6>
                                                <p class="mb-0 text-secondary">{{review.date}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="row">
                            <div class="col-md-12 text-center mb-5">
                                <button id="" class="btn btn-brand px-5">Show More</button>
                            </div>
                        </div> -->
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    // name: 'CustomerReview',
    layout: 'website-layout',
    data() {
        return {
          customerReview: [
              {
                id: 1,
                review:'My laptop stopped working unexpectedly, which was a huge problem as I was needed to use it frequently while studying for exams. I was super impressed with the responsiveness and professionalism of the entire Geeks team from start to finish. The technician Domino was the best IT expert I have ever seen. He was kind enough to work on my laptop as a priority. He collected my device for repairs on Tuesday evening, and within 24 hours he had already fixed it! I was beyond amazed as I had primed myself for the possibility that the laptop was unsalvageable. By Wednesday evening, the laptop was back in my hands. I would give Domingo 10 stars if possible! Wentworth Point',
                name: 'Gayathiri Pathmanathan',
                date: '08 Jul, 2022'
              },
              {
                id: 2,
                review:'Luis was very good once he arrived. very knowledgeable & helpful. Thank you.',
                name: 'Kim Paul',
                date: '08 Jul, 22'
              },
              {
                id: 3,
                review:'Great service. Friendly helpful technician. Would definitely use them again. The booking process was very easy. Was informed along the way. Received confirmation emails. Awesome job.',
                name: 'Tracy Oakley',
                date: '08 Jul, 22'
              },
              {
                id: 4,
                review:'Luis was great - he also helped with some other questions I had about my computer system. As a computer/IT novice it was much appreciated.',
                name: 'Dennis',
                date: '08 Jul, 22'
              },
            ],
        }
    },
    methods: {
      showFullReview(index){

          let continueReading = document.getElementById('continue-reading' + index);
          if(continueReading.innerHTML === '....Continue Reading'){
            continueReading.innerHTML = 'Show Less'
          }else{
            continueReading.innerHTML = '....Continue Reading'
          }


          let clientReview = document.getElementById('review-text' + index);
          clientReview.classList.toggle('review-height');
          },

    },
    head() {
      return {
        // title: 'Reviews |',
        meta: [
          { hid: 'og:title',property: 'og:title', name:'meta', content: `Reviews | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Reviews | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/reviews/'},
          { hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/reviews/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/reviews/' }
        ],
      }
    }

}
</script>

<style scoped>

.review-banner {
    padding: 30px 0;
    background-color: #f3e7db;
    background-position: center;
    background-image: url('/images/review/banner-customer-review.webp');
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
}

.review-banner .review-header-content {
    max-width: 600px;
    width: 100%;
    margin-left: auto;
}

.review-banner .review-header-content h4,
.review-banner .review-header-content h1 {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 24px;
    color: #f97807;
    margin: 0;
}

.review-banner .review-header-content h1 {
    font-size: 52px;
}

.review-banner-text {
    background: rgba(249, 120, 7, 0.75);
    color: #fff;
    padding: 10px;
    margin-bottom: 3px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.card-top {
    background-color: whitesmoke;
    padding-bottom: 15px;
}

.review-text-height{
    height: 90px;
    overflow: hidden;
    margin-bottom: 0;
    transition: height 0.3s ease;
}

.card-border-left {
    border-right: 2px solid var(--brandColor);
}

.quote-icon {
    font-size: 40px;
    line-height: 0;
}

.card-img {
    border-radius: 50%;
    border: 6px solid whitesmoke;
    height: 80px;
    width: 80px;
}

.truncate-text{
    cursor: pointer;
    font-style: italic;
    font-size: 15px;
}
.review-height{
  height: auto;
  transition: all 0.3s ease;
}
</style>
