<template>
    <!-- Feature Product Area Start -->
    <div class="feature-atea pb-100px">

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title">
                        <h2>FEATURED PRODUCTS</h2>
                        <p>Browse the collection of our Featured products.</p>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xl-7 col-lg-6 mb-md-50px mb-lm-50px " >
                    <div class="feature-slider-content">
                        <div class="feature-slider-wrapper slider-nav-style-1"  >


                            <VueSlickCarousel  v-bind="settings" v-if="featured_products.length">

                                     <div class="slider-single-item " v-for="product in featured_products">
                                    <article class="list-product text-left"  >
<!--                                            <h1>{{index}}</h1>-->
                                        <div class="product-inner">
                                            <div class="img-block">
                                                <a href="single-product.html" class="thumbnail">
                                                    <img class="first-img" src="assets/images/product-image/17.jpg" alt="" />
                                                    <img class="second-img" src="assets/images/product-image/18.jpg" alt="" />
                                                </a>
                                                <div class="add-to-link ">
                                                    <ul>
                                                        <li>
                                                            <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                                <i class="las la-search"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="product-decs" >
                                                <h2><a href="single-product.html" class="product-link">{{product.title}}</a></h2>
                                                <div class="pricing-meta">
                                                    <ul>
                                                        <li class="old-price">$9.90</li>
                                                        <li class="current-price">$11.00</li>
                                                    </ul>
                                                </div>
                                                <div class="cart-btn">
                                                    <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                /*...*/
                            </VueSlickCarousel>
                        </div>

                    </div>

                </div>

                <div class="col-xl-5 col-lg-6 banner-area">
                    <div class="banner-wrapper">
                        <a href="shop-4-column.html"><img src="assets/images/blog-image/2.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Feature Product Area End -->


</template>
<script>
import {mapState,mapActions} from 'vuex';
import VueSlickCarousel from "vue-slick-carousel";

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    data() {
        return {
            settings: {
                "infinite": true,
                "slidesToShow": 2,
                "speed": 500,
                "rows": 2,
                "swipeToSlide": true,
                "slidesToScroll": 2,
                "autoplay" : true,
                "autoplayspeed" : 3000,
                "dots" : true,
                "SliderArrow" : "",
                "swipe": true,


            }
        }
    },
    methods:{
      ...mapActions([
          'featuredItems'
      ])
    },
    computed: {
        ...mapState({
            featured_products: function (state){
                return state.product.featured_products;


            }
        })
    },
    mounted() {
        this.$store.dispatch('featuredItems');
    },
    components: {
        VueSlickCarousel
    },
}
</script>
<style scoped>

</style>
<!--<div v-for="(product, index) in featured_products.featured_product">-->
<!--{{index}}-->
<!--{{product}}-->
<!--<div v-if="index === 0">-->
<!--    <h1>  {{index}}</h1>-->
<!--</div>-->
<!--<div v-if="index > 0">-->
<!--    <h1>  {{index}}</h1>-->
<!--</div>-->
<!--</div>-->
