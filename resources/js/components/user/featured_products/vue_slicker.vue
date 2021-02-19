<template>
    <div>
        <h1>Vue Slicker</h1>
        <VueSlickCarousel ref="carousel">
<!--            <div class="slider-single-item"><article class="list-product text-left"><div class="product-inner"><div class="img-block"><a href="single-product.html" class="thumbnail"><img src="assets/images/product-image/6.jpg" alt="" class="first-img"> <img src="assets/images/product-image/6.jpg" alt="" class="second-img"></a> <div class="add-to-link"><ul><li><a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal" class="quick_view"><i class="las la-search"></i></a></li></ul></div></div> <div class="product-decs"><h2><a href="single-product.html" class="product-link">New Balance Fresh Foam LAZ..</a></h2> <div class="pricing-meta"><ul><li class="current-price">$29.90</li></ul></div> <div class="cart-btn"><a href="#" title="Add to cart" class="add-to-curt"><i class="las la-baby-carriage"></i></a></div></div></div></article> <article class="list-product text-left"><div class="product-inner"><div class="img-block"><a href="single-product.html" class="thumbnail"><img src="assets/images/product-image/1.jpg" alt="" class="first-img"> <img src="assets/images/product-image/2.jpg" alt="" class="second-img"></a> <div class="add-to-link"><ul><li><a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal" class="quick_view"><i class="las la-search"></i></a></li></ul></div></div> <div class="product-decs"><h2><a href="single-product.html" class="product-link">Trans-Weight Hooded Wind an..</a></h2> <div class="pricing-meta"><ul><li class="current-price">$11.90</li></ul></div> <div class="cart-btn"><a href="#" title="Add to cart" class="add-to-curt"><i class="las la-baby-carriage"></i></a></div></div></div></article></div>            <div><h3>2</h3></div>-->
<!--            <div class="slider-single-item"><article class="list-product text-left"><div class="product-inner"><div class="img-block"><a href="single-product.html" class="thumbnail"><img src="assets/images/product-image/6.jpg" alt="" class="first-img"> <img src="assets/images/product-image/6.jpg" alt="" class="second-img"></a> <div class="add-to-link"><ul><li><a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal" class="quick_view"><i class="las la-search"></i></a></li></ul></div></div> <div class="product-decs"><h2><a href="single-product.html" class="product-link">New Balance Fresh Foam LAZ..</a></h2> <div class="pricing-meta"><ul><li class="current-price">$29.90</li></ul></div> <div class="cart-btn"><a href="#" title="Add to cart" class="add-to-curt"><i class="las la-baby-carriage"></i></a></div></div></div></article> <article class="list-product text-left"><div class="product-inner"><div class="img-block"><a href="single-product.html" class="thumbnail"><img src="assets/images/product-image/1.jpg" alt="" class="first-img"> <img src="assets/images/product-image/2.jpg" alt="" class="second-img"></a> <div class="add-to-link"><ul><li><a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal" class="quick_view"><i class="las la-search"></i></a></li></ul></div></div> <div class="product-decs"><h2><a href="single-product.html" class="product-link">Trans-Weight Hooded Wind an..</a></h2> <div class="pricing-meta"><ul><li class="current-price">$11.90</li></ul></div> <div class="cart-btn"><a href="#" title="Add to cart" class="add-to-curt"><i class="las la-baby-carriage"></i></a></div></div></div></article></div>            <div><h3>2</h3></div>-->
<!--            <div class="slider-single-item"><article class="list-product text-left"><div class="product-inner"><div class="img-block"><a href="single-product.html" class="thumbnail"><img src="assets/images/product-image/6.jpg" alt="" class="first-img"> <img src="assets/images/product-image/6.jpg" alt="" class="second-img"></a> <div class="add-to-link"><ul><li><a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal" class="quick_view"><i class="las la-search"></i></a></li></ul></div></div> <div class="product-decs"><h2><a href="single-product.html" class="product-link">New Balance Fresh Foam LAZ..</a></h2> <div class="pricing-meta"><ul><li class="current-price">$29.90</li></ul></div> <div class="cart-btn"><a href="#" title="Add to cart" class="add-to-curt"><i class="las la-baby-carriage"></i></a></div></div></div></article> <article class="list-product text-left"><div class="product-inner"><div class="img-block"><a href="single-product.html" class="thumbnail"><img src="assets/images/product-image/1.jpg" alt="" class="first-img"> <img src="assets/images/product-image/2.jpg" alt="" class="second-img"></a> <div class="add-to-link"><ul><li><a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal" class="quick_view"><i class="las la-search"></i></a></li></ul></div></div> <div class="product-decs"><h2><a href="single-product.html" class="product-link">Trans-Weight Hooded Wind an..</a></h2> <div class="pricing-meta"><ul><li class="current-price">$11.90</li></ul></div> <div class="cart-btn"><a href="#" title="Add to cart" class="add-to-curt"><i class="las la-baby-carriage"></i></a></div></div></div></article></div>            <div><h3>2</h3></div>-->
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
            /*...*/
        </VueSlickCarousel>
        <button @click="showNext">show me the next</button>

    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    data() {
        return {
            settings: {

                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "touchThreshold": 5
            },
        }
        },

    components: { VueSlickCarousel },
    mounted(){
        console.log('vue-slicker');
    },
    methods: {
        showNext() {
            this.$refs.carousel.next()
        },
    },
}
</script>
