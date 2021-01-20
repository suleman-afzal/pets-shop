<template>
    <div>
<!-- Breadcrumb banner Area Start -->
<div class="name-category" v-if="show_banner">
    <div class="container">
        <div class="row">
            <div class="col-md-12 ">
                <div class="category-banner d-flex " data-bg-image="assets/images/banner-image/bg_breadcrumb.jpg">
                    <div class="align-self-center w-100">
                        <div class="text-center">
                            <h2 class="color-white ">Pet Food</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb banner Area End -->
<!-- Breadcrumb Area Start -->
<div class="breadcrumb-area">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="breadcrumb-content">
                    <ul class="nav">
                        <li><a href="index-2.html">Home</a></li>
                        <li>Shop</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb Area End-->

    </div>
</template>
<script>
    export default {
    props: ['show_banner'],
        mounted() {
            console.log('mounted');
        }
    }
</script>

<style scoped>

</style>
