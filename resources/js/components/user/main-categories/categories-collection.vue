<template>
    <div>
        <!-- Category Tab Slider Area Start -->
        <div class="category-tab-slider-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title">
                            <h2>OUR CATEGORIES</h2>
                            <p>Browse the collection of our tab products.</p>
                        </div>
                        <div class="box-tab ">
                            <ul class="tab-heading tabs-categorys nav nav-tabs">
                                <li v-for="(category,index ) in home_data.main_categories " :key="home_data.id">
                                    <a  class="active" data-toggle="pill" href="#tab-1" @click="home_data.current_main_category = index">
                                        <!--<span class="img-thumb"><img src="assets/images/category-image/1.jpg" alt=""></span>-->
                                        <span class="img-thumb"><img :src="category.image" alt=""></span>
                                        <span class="pat-name">{{category.title}}</span>
                                        <!--<span class="pat-name">{{home_data.current_main_category}}</span>-->

                                    </a>
                                </li>
                                <!--                    v-for="(product,index ) in home_data.main_categories[current_main_category].products "-->
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <!-- Category Tab Slider Area End -->
    <!-- Shop Category Area End -->
    <div class="shop-category-area" v-if="home_data.current_main_category >= 0">
        <div class="container">
            <div class="row">
                <div class="col-md-12 ">

                    <!-- Shop Bottom Area Start -->
                    <div class="shop-bottom-area mt-35">
                        <!-- Shop Tab Content Start -->
                        <div class="tab-content jump">
                            <!-- Tab One Start -->
                            <div id="shop-1" class="tab-pane active">
                                <div class="row" >

                                    <h1 v-if="home_data.main_categories[current_main_category] === undefined">Currently no Products Available{{home_data.main_categories[current_main_category]}}</h1>

                                    <div class="mb-60px col-md-4 col-sm-6 col-lg-4 col-xl-3" v-else v-for="(product,index ) in home_data.main_categories[current_main_category].products" :key="current_main_category.id">
                                        <div class="slider-single-item" >
                                            <!-- Single Item -->
                                            <article class="list-product text-left" >
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
                                                        <h2><a href="single-product.html" class="product-link">{{product.title}}</a></h2>
                                                        <div class="pricing-meta">
                                                            <ul>
                                                                <li class="current-price">{{product.price}}</li>
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

                                </div>
                            </div>
                            <!-- Tab One End -->
                        </div>
                        <!-- Shop Tab Content End -->
                        <!--  Pagination Area Start -->
<!--                        <div class="pro-pagination-style">-->
<!--                            <div class="pages">-->
<!--                                <ul>-->
<!--                                    <li><a href="#"><i class="ion-ios-arrow-left"></i></a></li>-->
<!--                                    <li><a class="active" href="#">1</a></li>-->
<!--                                    <li><a href="#">2</a></li>-->
<!--                                    <li><a href="#"><i class="ion-ios-arrow-right"></i></a></li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </div>-->
                        <!--  Pagination Area End -->
                    </div>
                    <!-- Shop Bottom Area End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Shop Category Area End -->
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex';
// import categoriesProduct from './categories-product.vue';
export default {
    methods:{
        ...mapActions([
            'homeData',
        ])
    },
    computed:{
        ...mapState({
            home_data : function(state){
                return state.product.home_data;
            },
            current_main_category:function (state){
                return state.product.home_data.current_main_category;
            }
        })
    },
    mounted() {
        this.$store.dispatch('homeData');
        console.log('categories-collection')
    }
}
</script>
<style>

</style>
