<template>
    <!-- Modal -->
    <div class="modal fade bd-example-modal-md" id="addProductModal" tabindex="-1" role="dialog"
         aria-labelledby="addProductModalTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <!--                <div class="modal-header">-->
                <!--                    <h5 class="modal-title" id="addProductModalTitle">POST YOUR AD</h5>-->
                <!--                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
                <!--                        <span aria-hidden="true">&times;</span>-->
                <!--                    </button>-->
                <!--                </div>-->
                <div class="modal-body">


                    <!-- MultiStep Form -->
                    <div class="container-fluid" id="grad1">
                        <div class="row justify-content-center mt-0">
                            <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                                <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                    <h2><strong>Sign Up Your User Account</strong></h2>
                                    <p>Fill all form field to go to next step</p>
                                    <div class="row">
                                        <div class="col-md-12 mx-0">
                                            <form id="msform">
                                                <!-- progressbar -->
                                                <ul id="progressbar">
                                                    <li :class="current_step >= 1 ? 'active':''" id="account"><strong>Category</strong></li>
                                                    <li :class="current_step >= 2 ? 'active':''" id="personal"><strong>Details</strong></li>
                                                    <li :class="current_step >= 3 ? 'active':''"  id="payment"><strong>Photos</strong></li>
                                                    <li :class="current_step >= 4 ? 'active':''"  id="confirm"><strong>Finish</strong></li>
                                                </ul> <!-- fieldsets -->
                                                <fieldset v-if="current_step == 1">
                                                    <div class="form-card">
                                                        <h2 class="fs-title">Choose Category</h2>
                                                        <vue-upload-multiple-image
                                                            @upload-success="uploadImageSuccess"
                                                            @before-remove="beforeRemove"
                                                            @edit-image="editImage"
                                                            @data-change="dataChange"
                                                            :data-images="images"
                                                        ></vue-upload-multiple-image>


                                                        <div class="row">
                                                        <div class="col-12">
                                                            <div class="list-group col-6 float-left" id="list-tab" role="tablist">

                                                                <a :class="new_product.level1_category_id === category.id ?'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'"
                                                                   :id="'category-'+category.id"
                                                                   data-toggle="list"
                                                                   :href="'#category-'+category.id+'-sub'" role="tab"
                                                                   :aria-controls="'category-'+category.id+'-sub'"
                                                                   @click="new_product.level1_category_id = category.id; new_product.level2_category_id = 0"
                                                                   v-for="category in categories">{{
                                                                        category.title
                                                                    }}</a>

                                                            </div>

                                                            <div class="list-group col-6" id="list-tab2" role="tablist"
                                                                 v-if="new_product.level1_category_id > 0">
                                                                <a :class="new_product.level2_category_id === sub_category.id ?'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'"
                                                                   :id="'category-'+sub_category.id"
                                                                   data-toggle="list"
                                                                   :href="'#category-'+sub_category.id+'-sub'"
                                                                   role="tab"
                                                                   :aria-controls="'category-'+sub_category.id+'-sub'"
                                                                   @click="new_product.level2_category_id = sub_category.id"
                                                                   v-for="sub_category in categories.filter(category_ => { return category_.id===new_product.level1_category_id})[0].sub_categories">{{
                                                                        sub_category.title
                                                                    }}</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                        <!--                                                        <input type="email" name="email" placeholder="Email Id"/> -->
                                                        <!--                                                        <input type="text" name="uname" placeholder="UserName"/> -->
                                                        <!--                                                        <input type="password" name="pwd" placeholder="Password"/> -->
                                                        <!--                                                        <input type="password" name="cpwd" placeholder="Confirm Password"/>-->
                                                    </div>
                                                    <input type="button" name="next"
                                                           value="Next Step"
                                                           class="next action-button disabled"
                                                           @click="new_product.level1_category_id > 0 && new_product.level2_category_id > 0 ? current_step = 2:false"
                                                           :disabled="!new_product.level1_category_id > 0 || !new_product.level2_category_id > 0"
                                                    />
                                                </fieldset>
                                                <fieldset v-else-if="current_step === 2">
                                                    <div class="form-card">
                                                        <h2 class="fs-title">Detail Description</h2>

                                                        <select class="form-control mt-3">
                                                            <option selected value="0">Choose Category</option>
                                                            <option>Category 1</option>
                                                        </select>

                                                        <input type="text" name="title" placeholder="Add Title"/>
                                                        <textarea placeholder="Description"></textarea>
                                                        <input type="text" name="price" placeholder="Price"/>
                                                        <input type="text" name="phone" placeholder="Phone"/>

                                                        <div class="custom-control custom-switch">
                                                            <label class="custom-control-label" for="switch1">Show my phone number on my ads</label>
                                                            <input type="checkbox" class="custom-control-input" id="switch1">
                                                        </div>
                                                    </div>
                                                    <input type="button" name="previous"
                                                           class="previous action-button-previous" @click="current_step=1" value="Previous"/>
                                                    <input type="button" name="next" class="next action-button" @click="moveToNextStep()" value="Next Step"/>
                                                </fieldset>
                                                <fieldset>
                                                    <div class="form-card">
                                                        <h2 class="fs-title">Payment Information</h2>
                                                        <div class="radio-group">
                                                            <div class='radio' data-value="credit"><img
                                                                src="https://i.imgur.com/XzOzVHZ.jpg" width="200px"
                                                                height="100px"></div>
                                                            <div class='radio' data-value="paypal"><img
                                                                src="https://i.imgur.com/jXjwZlj.jpg" width="200px"
                                                                height="100px"></div>
                                                            <br>
                                                        </div>
                                                        <label class="pay">Card Holder Name*</label> <input type="text"
                                                                                                            name="holdername"
                                                                                                            placeholder=""/>
                                                        <div class="row">
                                                            <div class="col-9"><label class="pay">Card Number*</label>
                                                                <input type="text" name="cardno" placeholder=""/></div>
                                                            <div class="col-3"><label class="pay">CVC*</label> <input
                                                                type="password" name="cvcpwd" placeholder="***"/></div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-3"><label class="pay">Expiry Date*</label>
                                                            </div>
                                                            <div class="col-9"><select class="list-dt" id="month"
                                                                                       name="expmonth">
                                                                <option selected>Month</option>
                                                                <option>January</option>
                                                                <option>February</option>
                                                                <option>March</option>
                                                                <option>April</option>
                                                                <option>May</option>
                                                                <option>June</option>
                                                                <option>July</option>
                                                                <option>August</option>
                                                                <option>September</option>
                                                                <option>October</option>
                                                                <option>November</option>
                                                                <option>December</option>
                                                            </select> <select class="list-dt" id="year" name="expyear">
                                                                <option selected>Year</option>
                                                            </select></div>
                                                        </div>
                                                    </div>
                                                    <input type="button" name="previous"
                                                           class="previous action-button-previous" value="Previous"/>
                                                    <input type="button" name="make_payment" class="next action-button"
                                                           value="Confirm"/>
                                                </fieldset>
                                                <fieldset>
                                                    <div class="form-card">
                                                        <h2 class="fs-title text-center">Success !</h2> <br><br>
                                                        <div class="row justify-content-center">
                                                            <div class="col-3"><img
                                                                src="https://img.icons8.com/color/96/000000/ok--v2.png"
                                                                class="fit-image"></div>
                                                        </div>
                                                        <br><br>
                                                        <div class="row justify-content-center">
                                                            <div class="col-7 text-center">
                                                                <h5>You Have Successfully Signed Up</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!--                    <div class="row">-->
                    <!--                        <div class="col-12 mt-1 mb-3">-->
                    <!--                            CHOOSE A CATEGORY-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                    <div class="row">-->
                    <!--                        <div class="col-6">-->
                    <!--                            <div class="list-group" id="list-tab" role="tablist">-->

                    <!--                                <a :class="new_product.level1_category_id === category.id ?'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'"-->
                    <!--                                   :id="'category-'+category.id"-->
                    <!--                                   data-toggle="list" :href="'#category-'+category.id+'-sub'" role="tab"-->
                    <!--                                   :aria-controls="'category-'+category.id+'-sub'"-->
                    <!--                                   @click="new_product.level1_category_id = category.id"-->
                    <!--                                   v-for="category in categories">{{category.title}}</a>-->


                    <!--&lt;!&ndash;                                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>&ndash;&gt;-->
                    <!--                            </div>-->
                    <!--                        </div>-->

                    <!--                        <div class="col-6" v-if="new_product.level1_category_id > 0">-->
                    <!--                            <div class="list-group" id="list-tab2" role="tablist">-->
                    <!--                                <a :class="new_product.level2_category_id === sub_category.id ?'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'"-->
                    <!--                                   :id="'category-'+sub_category.id"-->
                    <!--                                   data-toggle="list" :href="'#category-'+sub_category.id+'-sub'" role="tab"-->
                    <!--                                   :aria-controls="'category-'+sub_category.id+'-sub'"-->
                    <!--                                   @click="new_product.level2_category_id = sub_category.id"-->
                    <!--                                   v-for="sub_category in categories.filter(category_ => {category_.id===new_product.level1_category_id})[0].sub_categories">{{sub_category.title}}</a>-->
                    <!--                            </div>-->
                    <!--                        </div>-->


                    <!--&lt;!&ndash;                        <div class="col-6">&ndash;&gt;-->
                    <!--&lt;!&ndash;                            <div class="tab-content" id="nav-tabContent">&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;                                <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;                            </div>&ndash;&gt;-->
                    <!--&lt;!&ndash;                        </div>&ndash;&gt;-->
                    <!--                    </div>-->

                </div>
                <!--                <div class="modal-footer">-->
                <!--                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                <!--                    <button type="button" class="btn btn-primary">Save changes</button>-->
                <!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import VueUploadMultipleImage from 'vue-upload-multiple-image'

export default {
    data(){
        return {
        current_step:1,
            images:[
                {
                    path: 'http://example.com/image.jpg',
                    caption: 'caption to display. receive', // Optional
                }
            ]

        }
    },
    action:{
        moveToNextStep(){

        },
    },
    mounted() {
    },
    components: {
        VueUploadMultipleImage,
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

#progressbar #account:before {
    font-family: FontAwesome;
    content: "\f023"
}

#progressbar #personal:before {
    font-family: FontAwesome;
    content: "\f007"
}

#progressbar #payment:before {
    font-family: FontAwesome;
    content: "\f09d"
}

#progressbar #confirm:before {
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
.disabled{
    cursor: not-allowed;
}
</style>
