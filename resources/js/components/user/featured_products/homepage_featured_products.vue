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
            <!-- Start Category as a featured Products !-->
            <VueSlickCarousel v-bind="settings">
            <div class="mb-60px col-md-4 col-sm-6 col-lg-4 col-xl-3" v-for="(product,index) in featured_products" >


                <h1>{{index}}</h1>
                <div class="slider-single-item"  v-if="index === 0">
                    <!-- Single Item -->
                    <article class="list-product text-left" v-if=" featured_products[index] !== undefined">
                        <div class="product-inner">
                            <div class="img-block">
                                <a href="single-product.html" class="thumbnail">
                                    <img class="first-img" src="assets/images/product-image/1.jpg" alt="" />
                                    <img class="second-img" src="assets/images/product-image/2.jpg" alt="" />
                                </a>
                                <div class="add-to-link">
                                    <ul>
                                        <li>
                                            <a href="wishlist.html" title="Add to Wishlist"><i class="las la-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="compare.html" title="Add to compare"><i class="las la-sync"></i></a>
                                        </li>
                                        <li>
                                            <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                <i class="las la-search"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                            </div>
                            <div class="product-decs">
                                <h2><a href="single-product.html" class="product-link">{{featured_products[index].title}}</a></h2>
                                <div class="pricing-meta">
                                    <ul>
                                        <li class="current-price">{{featured_products[index].price}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cart-btn">
                                <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>
                            </div>
                        </div>
                    </article>
                    <!-- Single Item -->
                    <!-- Single Item -->
                    <article class="list-product text-left"  v-if="featured_products[index+1] !== undefined">
                        <div class="product-inner">
                            <div class="img-block">
                                <a href="single-product.html" class="thumbnail">
                                    <img class="first-img" src="assets/images/product-image/1.jpg" alt="" />
                                    <img class="second-img" src="assets/images/product-image/2.jpg" alt="" />
                                </a>
                                <div class="add-to-link">
                                    <ul>
                                        <li>
                                            <a href="wishlist.html" title="Add to Wishlist"><i class="las la-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="compare.html" title="Add to compare"><i class="las la-sync"></i></a>
                                        </li>
                                        <li>
                                            <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                <i class="las la-search"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                            </div>
                            <div class="product-decs">
                                <h2><a href="single-product.html" class="product-link">{{featured_products[index+1].title}}</a></h2>
                                <div class="pricing-meta">
                                    <ul>
                                        <li class="current-price">{{featured_products[index+1].title}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cart-btn">
                                <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>
                            </div>
                        </div>
                    </article>
                    <!-- Single Item -->
                </div>

                <div class="slider-single-item"  v-if="index > 0">
                    <!-- Single Item -->
                    <article class="list-product text-left" v-if=" featured_products[index+index] !== undefined">
                        <div class="product-inner">
                            <div class="img-block">
                                <a href="single-product.html" class="thumbnail">
                                    <img class="first-img" src="assets/images/product-image/1.jpg" alt="" />
                                    <img class="second-img" src="assets/images/product-image/2.jpg" alt="" />
                                </a>
                                <div class="add-to-link">
                                    <ul>
                                        <li>
                                            <a href="wishlist.html" title="Add to Wishlist"><i class="las la-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="compare.html" title="Add to compare"><i class="las la-sync"></i></a>
                                        </li>
                                        <li>
                                            <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                <i class="las la-search"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                            </div>
                            <div class="product-decs">
                                <h2><a href="single-product.html" class="product-link">{{featured_products[index+index].title}}</a></h2>
                                <div class="pricing-meta">
                                    <ul>
                                        <li class="current-price">{{featured_products[index+index].price}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cart-btn">
                                <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>
                            </div>
                        </div>
                    </article>
                    <!-- Single Item -->
                    <!-- Single Item -->
                    <article class="list-product text-left"  v-if="featured_products[index+index+1] !== undefined">
                        <div class="product-inner">
                            <div class="img-block">
                                <a href="single-product.html" class="thumbnail">
                                    <img class="first-img" src="assets/images/product-image/1.jpg" alt="" />
                                    <img class="second-img" src="assets/images/product-image/2.jpg" alt="" />
                                </a>
                                <div class="add-to-link">
                                    <ul>
                                        <li>
                                            <a href="wishlist.html" title="Add to Wishlist"><i class="las la-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="compare.html" title="Add to compare"><i class="las la-sync"></i></a>
                                        </li>
                                        <li>
                                            <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                <i class="las la-search"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="product-flag">
                                    <li class="new">New</li>
                                </ul>
                            </div>
                            <div class="product-decs">
                                <h2><a href="single-product.html" class="product-link">{{featured_products[index+index+1].title}}</a></h2>
                                <div class="pricing-meta">
                                    <ul>
                                        <li class="current-price">{{featured_products[index+index+1].title}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cart-btn">
                                <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>
                            </div>
                        </div>
                    </article>
                    <!-- Single Item -->
                </div>

            </div>
            </VueSlickCarousel>
            <!-- End Category as a featured Products !-->
<!--            <div class="row">-->
<!--                <div class="col-xl-7 col-lg-6 mb-md-50px mb-lm-50px " >-->
<!--                    <VueSlickCarousel>-->
<!--                        <div class="feature-slider-content"  v-for="(product,index) in featured_products" >-->
<!--                            <div class="feature-slider-wrapper slider-nav-style-1">-->
<!--                                <h1 > {{index}}</h1>-->
<!--                                <div class="slider-single-item" v-if="index === 0">-->

<!--                                    <article class="list-product text-left" v-if=" featured_products[index] !== undefined">-->
<!--                                        <div class="product-inner">-->
<!--                                            <div class="img-block">-->
<!--                                                <a href="single-product.html" class="thumbnail">-->
<!--                                                    <img class="first-img" src="assets/images/product-image/17.jpg" alt="" />-->
<!--                                                    <img class="second-img" src="assets/images/product-image/18.jpg" alt="" />-->
<!--                                                </a>-->
<!--                                                <div class="add-to-link ">-->
<!--                                                    <ul>-->
<!--                                                        <li>-->
<!--                                                            <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">-->
<!--                                                                <i class="las la-search"></i>-->
<!--                                                            </a>-->
<!--                                                        </li>-->
<!--                                                    </ul>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="product-decs" >-->
<!--                                                <h2><a href="single-product.html" class="product-link">{{featured_products[index].title}}</a></h2>-->
<!--                                                <div class="pricing-meta">-->
<!--                                                    <ul>-->
<!--                                                        <li class="old-price">$9.90</li>-->
<!--                                                        <li class="current-price">$11.00</li>-->
<!--                                                    </ul>-->
<!--                                                </div>-->
<!--                                                <div class="cart-btn">-->
<!--                                                    <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </article>-->
<!--                                    <article class="list-product text-left"  v-if="featured_products[index+1] !== undefined">-->
<!--                                        <div class="product-inner">-->
<!--                                            <div class="img-block">-->
<!--                                                <a href="single-product.html" class="thumbnail">-->
<!--                                                    <img class="first-img" src="assets/images/product-image/8.jpg" alt="" />-->
<!--                                                    <img class="second-img" src="assets/images/product-image/8.jpg" alt="" />-->
<!--                                                </a>-->
<!--                                                <div class="add-to-link">-->
<!--                                                    <ul>-->
<!--                                                        <li>-->
<!--                                                            <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">-->
<!--                                                                <i class="las la-search"></i>-->
<!--                                                            </a>-->
<!--                                                        </li>-->
<!--                                                    </ul>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="product-decs" >-->
<!--                                                <h2><a href="single-product.html" class="product-link">{{featured_products[index+1].title}}</a></h2>-->
<!--                                                <div class="pricing-meta">-->
<!--                                                    <ul>-->
<!--                                                        <li class="current-price">$11.90</li>-->
<!--                                                    </ul>-->
<!--                                                </div>-->
<!--                                                <div class="cart-btn">-->
<!--                                                    <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </article>-->
<!--                                </div>-->

<!--                                <div class="slider-single-item" v-else-if="index > 0">-->

<!--                                    <article class="list-product text-left" v-if=" featured_products[index+index] !== undefined">-->
<!--                                        <div class="product-inner">-->
<!--                                            <div class="img-block">-->
<!--                                                <a href="single-product.html" class="thumbnail">-->
<!--                                                    <img class="first-img" src="assets/images/product-image/17.jpg" alt="" />-->
<!--                                                    <img class="second-img" src="assets/images/product-image/18.jpg" alt="" />-->
<!--                                                </a>-->
<!--                                                <div class="add-to-link ">-->
<!--                                                    <ul>-->
<!--                                                        <li>-->
<!--                                                            <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">-->
<!--                                                                <i class="las la-search"></i>-->
<!--                                                            </a>-->
<!--                                                        </li>-->
<!--                                                    </ul>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="product-decs" >-->
<!--                                                <h2><a href="single-product.html" class="product-link">{{featured_products[index+index].title}}</a></h2>-->
<!--                                                <div class="pricing-meta">-->
<!--                                                    <ul>-->
<!--                                                        <li class="old-price">$9.90</li>-->
<!--                                                        <li class="current-price">$11.00</li>-->
<!--                                                    </ul>-->
<!--                                                </div>-->
<!--                                                <div class="cart-btn">-->
<!--                                                    <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </article>-->
<!--                                    <article class="list-product text-left"  v-if="featured_products[index+index+1] !== undefined">-->
<!--                                        <div class="product-inner">-->
<!--                                            <div class="img-block">-->
<!--                                                <a href="single-product.html" class="thumbnail">-->
<!--                                                    <img class="first-img" src="assets/images/product-image/8.jpg" alt="" />-->
<!--                                                    <img class="second-img" src="assets/images/product-image/8.jpg" alt="" />-->
<!--                                                </a>-->
<!--                                                <div class="add-to-link">-->
<!--                                                    <ul>-->
<!--                                                        <li>-->
<!--                                                            <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">-->
<!--                                                                <i class="las la-search"></i>-->
<!--                                                            </a>-->
<!--                                                        </li>-->
<!--                                                    </ul>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="product-decs" >-->
<!--                                                <h2><a href="single-product.html" class="product-link">{{featured_products[index+index+1].title}}</a></h2>-->
<!--                                                <div class="pricing-meta">-->
<!--                                                    <ul>-->
<!--                                                        <li class="current-price">$11.90</li>-->
<!--                                                    </ul>-->
<!--                                                </div>-->
<!--                                                <div class="cart-btn">-->
<!--                                                    <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </article>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </VueSlickCarousel>-->
<!--                </div>-->

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
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueSlickCarousel from "vue-slick-carousel";


export default {
    data() {
        return {
            settings: {
                "dots": true,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "initialSlide": 0,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }
        }
    },
    methods:{
        ...mapActions([
            'homeData'
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
        this.$store.dispatch('homeData')
    },
    components: {
        VueSlickCarousel
    },
}
</script>
<style>

</style>
