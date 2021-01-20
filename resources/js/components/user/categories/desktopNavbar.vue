<template>
<!-- Header Nav End -->
<div class="header-menu bg-indigo sticky-nav d-lg-block d-none ptb-25px">
<div class="container">
    <div class="row">
        <div class="col-md-3 d-flex">
            <div class="logo align-self-center">
                <a href="index-2.html"><img class="img-responsive" src="assets/images/logo/logo.png" alt="logo.png" /></a>
            </div>
        </div>
        <div class="col-md-7  d-flex">
            <div class="header-horizontal-menu align-self-center">
                <ul class="menu-content">
                    <li class="active menu-dropdown">
                        <a href="#">Home <i class="ion-ios-arrow-down"></i></a>
                        <ul class="main-sub-menu">
                            <li><a href="index-2.html">Home 1</a></li>
                            <li><a href="index-3.html">Home 2</a></li>
                            <li><a href="index-4.html">Home 3</a></li>
                            <li><a href="index-5.html">Home 4</a></li>
                        </ul>
                    </li>

                    <li :class="parent_category.sub_categories.length ? 'menu-dropdown':'menu'" v-for="parent_category in categories">
                        <a href="#">{{parent_category.title}} <i class="ion-ios-arrow-down" v-if="parent_category.sub_categories.length"></i></a>
                        <ul class="mega-menu-wrap">
                            <li v-for="sub_category in parent_category.sub_categories" v-if="parent_category.sub_categories.length">
                                <ul>
                                    <li class="mega-menu-title"><a href="#">{{ sub_category.title }}</a></li>
                                    <li v-for="level2_sub_category in sub_category.sub_categories" v-if="sub_category.sub_categories">
                                        <a href="shop-list.html">{{level2_sub_category.title}}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>


                    <li class="menu-dropdown">
                        <a href="#">Pages <i class="ion-ios-arrow-down"></i></a>
                        <ul class="main-sub-menu">
                            <li><a href="about.html">About Page</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="checkout.html">Checkout Page</a></li>
                            <li><a href="compare.html">Compare Page</a></li>
                            <li><a href="login.html">Login & Register Page</a></li>
                            <li><a href="my-account.html">Account Page</a></li>
                            <li><a href="empty-cart.html">Empty Cart Page</a></li>
                            <li><a href="404.html">404 Page</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="faq.html">Faq Page</a></li>
                            <li><a href="coming-soon.html">Coming Soon Page</a></li>
                            <li><a href="wishlist.html">Wishlist Page</a></li>
                        </ul>
                    </li>
                    <li class="menu-dropdown">
                        <a href="#">Blog <i class="ion-ios-arrow-down"></i></a>
                        <ul class="main-sub-menu">
                            <li class="menu-dropdown position-static">
                                <a href="#">Blog Grid <i class="ion-ios-arrow-right"></i></a>
                                <ul class="main-sub-menu main-sub-menu-2">
                                    <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                                    <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li class="menu-dropdown position-static">
                                <a href="#">Blog List <i class="ion-ios-arrow-right"></i></a>
                                <ul class="main-sub-menu main-sub-menu-2">
                                    <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                    <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li class="menu-dropdown position-static">
                                <a href="#">Blog Single <i class="ion-ios-arrow-right"></i></a>
                                <ul class="main-sub-menu main-sub-menu-2">
                                    <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                    <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidbar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <!-- Button trigger modal -->
                    <li><a href="contact.html">contact Us</a></li>
                    <li><a href="javascript:void(0)" data-toggle="modal" data-target="#addProductModal">New Product</a></li>
                </ul>
            </div>
        </div>

<!--        TODO REFACTOR-->
        <div class="col-md-2 align-self-center">
            <div class="header-right-element d-flex justify-content-end">
                <!--Cart info Start -->
                <div class="header-tools d-flex">
                    <div class="cart-info d-flex align-self-center">
                        <a title="cart" href="#offcanvas-cart" class="bag offcanvas-toggle"><i class="las la-baby-carriage"></i><span class="item-total">$50.00</span><span class="item-count">3 item(s)</span></a>
                    </div>
                </div>
            </div>
            <!--Cart info End -->
        </div>


    </div>
</div>
</div>
<!-- Header Nav End -->
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    mounted() {
        this.$store.dispatch('fetchCategories');
    },
    computed: {
        ...mapState({
            categories: function (state) {
                return state.category.categories;
            }
        })
    }
}
</script>
