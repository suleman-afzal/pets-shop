<template>
    <!-- Modal -->
    <div class="modal fade bd-example-modal-md" id="addProductModal" tabindex="-1" role="dialog"
         aria-labelledby="addProductModalTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <!-- Add Product Form -->
                    <div class="container-fluid" id="grad1">
                        <div class="row justify-content-center mt-0">
                            <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                                <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                    <h2><strong>ADD NEW PRODUCT</strong></h2>
                                    <p>Fill all form field to go to next step</p>
                                    <div class="row">
                                        <div class="col-md-12 mx-0">
                                            <form id="msform">

                                                <!-- progressbar start -->
                                                <ul id="progressbar">
                                                    <li :class="wizardHeaderClass(1)" id="add-product-category-step">
                                                        <strong>Category</strong></li>
                                                    <li :class="wizardHeaderClass(2)" id="add-product-detail-step">
                                                        <strong>Details</strong></li>
                                                    <li :class="wizardHeaderClass(3)" id="add-product-images-step">
                                                        <strong>Photos</strong></li>
                                                    <li :class="wizardHeaderClass(4)" id="add-product-address-step">
                                                        <strong>Finish</strong></li>
                                                </ul>
                                                <!-- progressbar end -->

                                                <!-- Wizard Steps Forms Start -->
                                                <product-category-step
                                                    v-if="new_product.current_step === 1"></product-category-step>
                                                <product-detail-step
                                                    v-else-if="new_product.current_step === 2"></product-detail-step>
                                                <product-images-step
                                                    v-else-if="new_product.current_step === 3"></product-images-step>
                                                <product-address-step
                                                    v-else-if="new_product.current_step === 4"></product-address-step>
                                                <!-- Wizard Steps Forms End -->

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import ProductCategoryStep from './product-category-step';
import ProductDetailStep from './product-detail-step';
import ProductImagesStep from './product-images-step';
import ProductAddressStep from './product-address-step';

export default {
    data() {
        return {}
    },
    methods: {
        wizardHeaderClass(step_number) {
            return (this.new_product.current_step >= step_number ? 'active' : '');
        },
        ...mapActions(
            [
                'wizardMoveNext',
                'wizardMovePrevious'
            ]
        )
    },
    mounted() {
        console.log(this.$store);
    },
    components: {
        ProductCategoryStep,
        ProductDetailStep,
        ProductImagesStep,
        ProductAddressStep,
    },
    computed: {
        ...mapState({
            categories: function (state) {
                return state.category.categories;
            },
            new_product: function (state) {
                return state.product.new_product;
            }
        })
    }
}
</script>

<style>
.list-group-item {
    position: relative;
    display: block;
    padding: 1rem 1rem;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
    color: rgba(0, 47, 52, .64);;
}

.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: rgba(0, 47, 52, 0.30);
    border: 1px solid rgba(0, 47, 52, 0.30);
}


* {
    margin: 0;
    padding: 0
}

html {
    height: 100%
}

#grad1 {
    background-color: #9C27B0;
    background-image: linear-gradient(120deg, #FF4081, #81D4FA)
}

#msform {
    text-align: center;
    position: relative;
    margin-top: 20px
}

#msform fieldset .form-card {
    background: white;
    border: 0 none;
    border-radius: 0px;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    padding: 20px 40px 30px 40px;
    box-sizing: border-box;
    width: 94%;
    margin: 0 3% 20px 3%;
    position: relative
}

#msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-bottom: 20px;
    position: relative
}

#msform fieldset:not(:first-of-type) {
    display: none
}

#msform fieldset .form-card {
    text-align: left;
    color: #9E9E9E
}

#msform input,
#msform select,
#msform textarea {
    padding: 0px 8px 4px 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 25px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 16px;
    letter-spacing: 1px
}

#msform input:focus,
#msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: none;
    font-weight: bold;
    border-bottom: 2px solid skyblue;
    outline-width: 0
}

#msform .action-button {
    width: 100px;
    background: skyblue;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 0px;
    /*cursor: pointer;*/
    padding: 10px 5px;
    margin: 10px 5px
}

#msform .action-button:hover,
#msform .action-button:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px skyblue
}

#msform .action-button-previous {
    width: 100px;
    background: #616161;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 0px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px
}

#msform .action-button-previous:hover,
#msform .action-button-previous:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #616161
}

select.list-dt {
    border: none;
    outline: 0;
    border-bottom: 1px solid #ccc;
    padding: 2px 5px 3px 5px;
    margin: 2px
}

select.list-dt:focus {
    border-bottom: 2px solid skyblue
}

.card {
    z-index: 0;
    border: none;
    border-radius: 0.5rem;
    position: relative
}

.fs-title {
    font-size: 25px;
    color: #2C3E50;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: left
}

#progressbar {
    margin-bottom: 30px;
    overflow: hidden;
    color: lightgrey
}

#progressbar .active {
    color: #000000
}

#progressbar li {
    list-style-type: none;
    font-size: 12px;
    width: 25%;
    float: left;
    position: relative
}

#progressbar #add-product-category-step:before {
    font-family: FontAwesome;
    content: "\f023"
}

#progressbar #add-product-detail-step:before {
    font-family: FontAwesome;
    content: "\f007"
}

#progressbar #add-product-images-step:before {
    font-family: FontAwesome;
    content: "\f09d"
}

#progressbar #add-product-address-step:before {
    font-family: FontAwesome;
    content: "\f00c"
}

#progressbar li:before {
    width: 50px;
    height: 50px;
    line-height: 45px;
    display: block;
    font-size: 18px;
    color: #ffffff;
    background: lightgray;
    border-radius: 50%;
    margin: 0 auto 10px auto;
    padding: 2px
}

#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: lightgray;
    position: absolute;
    left: 0;
    top: 25px;
    z-index: -1
}

#progressbar li.active:before,
#progressbar li.active:after {
    background: skyblue
}

.radio-group {
    position: relative;
    margin-bottom: 25px
}

.radio {
    display: inline-block;
    width: 204px;
    height: 104px;
    border-radius: 0;
    background: lightblue;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    cursor: pointer;
    margin: 8px 2px
}

.radio:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3)
}

.radio.selected {
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1)
}

.fit-image {
    width: 100%;
    object-fit: cover
}

.disabled {
    cursor: not-allowed;
}
</style>
