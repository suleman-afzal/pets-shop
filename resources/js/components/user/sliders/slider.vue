<template>
    <div>
        <!-- Slider Start -->
        <div class="slider-area">
            <div class="hero-slider-wrapper">
                <VueSlickCarousel v-bind="settings">
                    <div class="single-slide slider-height-1 bg-img d-flex" ><img src="assets/images/slider-image/sample-1.jpg">
                    </div>
                    <div class="single-slide slider-height-1 bg-img d-flex" ><img src="assets/images/slider-image/sample-2.jpg">
                    </div>
                </VueSlickCarousel>

            </div>
        </div>
        <!-- Slider End -->
    </div>
</template>

<script>

import VueSlickCarousel from "vue-slick-carousel";

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
        data() {
            return {
                settings: {
                    "infinite": true,
                    "slidesToShow": 1,
                    "speed": 500,
                    "rows": 1,
                    "swipeToSlide": true,
                    "slidesToScroll": 1,
                    "autoplay" : true,
                    "autoplayspeed": 100000,



                }
            }
        },
        mounted() {
            console.log('mounted');
        },
        components: {
            VueSlickCarousel
        },
    }
</script>

<style scoped>

</style>
