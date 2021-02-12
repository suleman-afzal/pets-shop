<template>
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
                            <!--                    <li v-for="category in home_data.main_categories.length " :key="home_data.id">-->
                            <li v-for="(category,index ) in home_data.main_categories " :key="home_data.id">
                                <a  class="active" data-toggle="pill" href="#tab-1" @click="home_data.current_main_category = index">
                                    <!--                            <span class="img-thumb"><img src="assets/images/category-image/1.jpg" alt=""></span>-->
                                    <span class="img-thumb"><img :src="category.image" alt=""></span>
                                    <span class="pat-name">{{category.title}}</span>
                                    <!--                            <span class="pat-name">{{home_data.current_main_category}}</span>-->

                                </a>
                            </li>
                            <!--                    v-for="(product,index ) in home_data.main_categories[current_main_category].products "-->
                        </ul>
                    </div>
                    <!--            //testing Products-->
                    <!--                <div v-if="current_main_category >= 0">-->
                    <!--                    <h1>Working</h1>-->
                    <!--                    <pre>{{home_data.main_categories[current_main_category].products}}</pre>-->
                    <!--                </div>-->
                    <div class="category-tab-block" v-if="home_data.current_main_category >= 0">

                        <div class="category-tab">
                            <!-- Tab Content Start -->
                            <div class="tab-content">
                                <!-- 1st tab -->
                                <div id="tab-1" class="tab-pane active">
                                    <!-- Tab Slider Start -->
                                    <div class="arrival-slider slider-nav-style-1">

                                        <div class="arrval-slider-item" >
                                            <article class="list-product text-left"  v-for="(product,index ) in home_data.main_categories[current_main_category].products[0]" :key="current_main_category.id">
                                                <div class="product-inner" >
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
                                                            <li class="new discount">-5%</li>
                                                        </ul>
                                                    </div>
                                                    <div class="product-decs" >
                                                        <h2><a href="single-product.html" class="product-link">{{product.title}}</a></h2>
                                                        <div class="pricing-meta">
                                                            <ul>
                                                                <li class="old-price">$34.90</li>
                                                                <li class="current-price">$30.00</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="cart-btn">
                                                        <a href="#" class="add-to-curt" title="Add to cart"><i class="las la-baby-carriage"></i></a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <!-- Tab Slider End -->
                                </div>
                                <!-- 1st tab -->

                            </div>
                            <!-- Tab Content End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Category Tab Slider Area End -->
</template>
<script>
import {mapActions,mapState} from 'vuex';
// import categoriesProduct from './categories-product.vue';
import CategoriesProduct from "./categories-product";
export default {
    components: {CategoriesProduct},
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
