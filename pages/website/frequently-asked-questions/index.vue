<template>
<div class="bg-white">
    <header class="faq-banner">
        <div class="container">
            <div class="text-center faq-header-content">
                <h1 class="brand-color">Frequently asked questions</h1>
                <p class="mb-0">Here you will find answers to some frequently <br> asked questions about Geekify.</p>
            </div>
        </div>
    </header>
    <main class="py-5 mt-xxl-4 mt-md-3 mt-0 bg-white">
        <div class="container">
            <div v-for="(faq, index ) in faqList" :key="index" class="mb-4">
                <div  class="mb-0 accordion-button collapsed" data-bs-toggle="collapse" :data-bs-target="'#collapseItem' + index" aria-expanded="true" aria-controls="collapseOne">
                    <div class="d-flex justify-content-between">
                        <h6 class="mb-0 faq-question me-2">{{ faq.question }}</h6>
                        <!-- <div :id="'arrow-icon' + index">
                            <span class="brand-color down-icon"><i class="fas fa-chevron-down"></i></span>
                            <span class="brand-color up-icon"><i class="fas fa-chevron-up"></i></span>
                        </div> -->
                    </div>
                </div>
                <div class="collapse" :id="'collapseItem' + index">
                    <div class="faq-ans">
                        <p class="mb-0">{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center pt-3 bg-white">
            <h3 class="brand-color mb-3">Further Any Query</h3>
            <router-link class="btn px-5 text-uppercase brand-fill-btn" to="/contact-us">Contact Us</router-link>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name: 'FaqPage',
    layout: 'website-layout',
    data() {
        return {
            faqList: [{
                    id: 1,
                    question: 'Are your services only relevant for businesses?',
                    answer: 'No! Our techs are experts in giving various IT solutions regardless of if you are a business owner or just require assistance for your home computers.',
                },
                {
                    id: 2,
                    question: 'Do you sell hardware or software?',
                    answer: 'Yes! Not only do we offer tech services, we also sell computers, laptops, antivirus and much more!',
                },
                {
                    id: 3,
                    question: 'I am not a familiar with tech, will your geeks explain everything in plain English?',
                    answer: 'Our techs are extremely friendly and eloquent, you don’t need any prior knowledge to interact with them! They make everything easy for the customer.',
                },
                {
                    id: 4,
                    question: 'How do I book the services of Geekify?',
                    answer: 'You can contact us via email, our number or schedule appointments through our website and we will dispatch our techs to you!',
                },
                {
                    id: 5,
                    question: 'I have questions about the services your techs provided, how can I contact you?',
                    answer: 'You can contact us via email or through our customer care line (number) and we will get you sorted right away!',
                },
                {
                    id: 6,
                    question: 'How much do your services cost?',
                    answer: 'Please visit our website to check on the specific pricing of the type of service you require – generally we have very flexible and well thought services that are fit for all sorts of clients!',
                },
            ]
        }
    },
    methods: {
        // toggleArrow(index) {
        //     let showIcon = document.getElementById('arrow-icon' + index);
        //     showIcon.classList.toggle('show-icon')
        // }
    },
    head() {
      return {
        // title: 'FAQ |',
        meta: [
          { hid: 'og:title',property: 'og:title',  name:'meta', content: `FAQ | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`FAQ | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url',  name:'meta', content: 'https://geekify.au/frequently-asked-questions/'},
          { hid: 'twitter:domain', property: 'twitter:domain',  name:'meta', content: 'https://geekify.au/frequently-asked-questions/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/frequently-asked-questions/' }
        ],
      }
    }

}
</script>

<style scoped>
.up-icon {
    display: none;
}

.show-icon .down-icon {
    display: none;
}

.show-icon .up-icon {
    display: block;
}

.faq-banner {
    background-image: url('/images/faq/faq-banner.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.faq-header-content h1 {
    text-transform: capitalize;
    font-size: 55px;
}

.faq-header-content p {
    color: #fff;
    font-size: 22px;
}

.faq-question {
    font-size: 18px;
}

.accordion-button {

    padding: 14px 20px;
    border: 1px solid var(--brandColor) !important;
    border-radius: 0 !important;
    cursor: pointer !important;
}

.accordion-button:not(.collapsed) {
    background: linear-gradient(90deg, rgba(248, 179, 89, 1) 0%, rgba(253, 219, 150, 1) 35%, rgba(254, 241, 206, 1) 80%, rgba(255, 251, 231, 1) 100%);
    border: none !important;
    border-radius: 0 !important;
    color: #000;
    font-weight: 600;
    box-shadow: none !important;
    transition: all 0.3s ease;
}

.faq-ans {
    background-color: rgba(254, 235, 180, 0.2);
    padding: 20px;
}

@media (min-width:768px) and (max-width:992px) {
    .faq-banner {
        height: 450px;
    }

    .faq-header-content h1 {
        font-size: 50px;
    }
}

@media (min-width:575px) and (max-width:767px) {
    .faq-banner {
        height: 450px;
    }

    .faq-header-content h1 {
        font-size: 45px;
        margin-bottom: 10px;
    }

    .faq-header-content p {
        font-size: 18px;
    }
}

@media (min-width:425px) and (max-width:574px) {
    .faq-banner {
        height: 350px;
    }

    .faq-header-content h1 {
        font-size: 36px;
        margin-bottom: 10px;
    }

    .faq-header-content p {
        font-size: 16px;
    }
}

@media (min-width:320px) and (max-width:424px) {
    .faq-banner {
        height: 260px;
    }

    .faq-header-content h1 {
        font-size: 26px;
        margin-bottom: 10px;
    }

    .faq-header-content p {
        font-size: 14px;
    }
}
</style>
