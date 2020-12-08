
<!-- Mobile Header Section Start -->
<div class="mobile-header d-lg-none sticky-nav bg-indigo ptb-10px">
    <div class="container">
        <div class="row align-items-center">

            <!-- Header Logo Start -->
            <div class="col d-flex">
                <div class="header-logo">
                    <a href="index-2.html"><img class="img-responsive" src="assets/images/logo/logo.png" alt="logo.png" /></a>
                </div>
                <div class="mobile-menu-toggle align-self-center">
                    <a href="#offcanvas-mobile-menu" class="offcanvas-toggle">
                        <i class="las la-bars"></i>
                    </a>
                </div>
            </div>
            <!-- Header Logo End -->

            <!-- Header Tools Start -->
            <div class="col-auto">
                <div class="header-tools justify-content-end">
                    <div class="cart-info d-flex align-self-center">
                        <div class="dropdown float-right">
                            <button type="button" id="dropdownMenuButton-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="las la-user"></i></button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-4">
                                <li><a href="my-account.html">My Account</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="login.html">Sign In</a></li>
                            </ul>
                        </div>
                        <a title="cart" href="#offcanvas-cart" class="bag offcanvas-toggle"><i class="las la-baby-carriage"></i><span class="item-total">$0.00</span><span class="item-count">3</span></a>
                    </div>
                </div>
            </div>
            <!-- Header Tools End -->

        </div>
    </div>
</div>


<!-- Search Category Start -->
@include('includes.user.mobile-search-area')
<!-- Search Category End -->
<!-- Mobile Header Section End -->


<!-- OffCanvas Search Start -->
@include('includes.user.mobile-navbar')


