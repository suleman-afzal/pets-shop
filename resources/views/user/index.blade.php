@extends('layouts.user')
@push('below_css')
@endpush
@section('content')

    <slider></slider>
{{--    @include('includes.user.slider')--}}
{{--    @include('includes.user.thumb-category-area')--}}
{{--    <categories-collection></categories-collection>--}}
    <main_categories></main_categories>

    @include('includes.user.banner-area')
    <featured_products></featured_products>
{{--<homepage_featured_products></homepage_featured_products>--}}
{{--<vue_slicker></vue_slicker>--}}
{{--    @include('includes.user.feature-products')--}}


    <!-- Banner Area Start -->
    <div class="banner-area overflow-hidden">
        <div class="row">
            <div class="col-md-12">
                <div class="banner-wrapper">
                    <a href="shop-4-column.html"><img src="assets/images/banner-image/16.jpg" alt=""/></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner Area End -->

    <!-- Testimonial Product Area Start -->
    <div class="testimonial-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="testi-title">
                        <h2>TESTIMONIALS</h2>
                    </div>
                </div>
            </div>
            <div class="testimonial-slider-wrapper slider-nav-style-1">
                <div class="testimonial-slider-item">
                    <div class="content_author">
                        <div class="img_author">
                            <img src="assets/images/testimonial-image/1.png" alt="Image Testimonial">
                        </div>
                        <div class="content_test">
                            <div class="des_testimonial">All Perfect !! I have three sites with magento , this theme is
                                the best !! Excellent support , advice theme installation package , sorry for English,
                                are Italian but I had no problem !! Thank you !
                            </div>
                            <div class="des_inner">
                                <p class="des_namepost"><span>orando BLoom</span></p>
                                <p class="des_email">demo@hasthemes.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-slider-item">
                    <div class="content_author">
                        <div class="img_author">
                            <img src="assets/images/testimonial-image/1.png" alt="Image Testimonial">
                        </div>
                        <div class="content_test">
                            <div class="des_testimonial">All Perfect !! I have three sites with magento , this theme is
                                the best !! Excellent support , advice theme installation package , sorry for English,
                                are Italian but I had no problem !! Thank you !
                            </div>
                            <div class="des_inner">
                                <p class="des_namepost"><span>orando BLoom</span></p>
                                <p class="des_email">demo@hasthemes.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-slider-item">
                    <div class="content_author">
                        <div class="img_author">
                            <img src="assets/images/testimonial-image/1.png" alt="Image Testimonial">
                        </div>
                        <div class="content_test">
                            <div class="des_testimonial">All Perfect !! I have three sites with magento , this theme is
                                the best !! Excellent support , advice theme installation package , sorry for English,
                                are Italian but I had no problem !! Thank you !
                            </div>
                            <div class="des_inner">
                                <p class="des_namepost"><span>orando BLoom</span></p>
                                <p class="des_email">demo@hasthemes.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Testimonial Product Area End -->


    @include('includes.user.blog-area')
    @include('includes.user.subsribe-us')
    @include('includes.user.brand-area')
@endsection
@push('below_script')
@endpush
