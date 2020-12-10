<!DOCTYPE html>
<html class="no-js" lang="en-US">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

@include('includes.user.head')
@stack('b_css')
<body>
<!-- Desktop Header Section Start From Here -->
@include('includes.user.desktop-header')
<!-- Desktop Header Section End Here -->

<!-- Mobile Header Section & Search Category Start -->
@include('includes.user.mobile-header')
<!-- Mobile Header Section & Search Category End -->
<!-- Cart Nav-bar Start -->
@include('includes.user.navbar-cart')
<!-- Cart Nav-bar End -->
<div class="offcanvas-overlay"></div>
<div id="app">
@yield('content')
</div>
@yield('ajax_script')
@include('includes.user.footer')
@include('includes.user.quick-view')
</body>
</html>
