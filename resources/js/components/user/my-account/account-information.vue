<template>
    <div class="login-register-area pb-100px">

        <div class="container">
            <div class="row">
                <div class="ml-auto mr-auto col-lg-9">
                    <div class="checkout-wrapper">
                        <div id="faq" class="panel-group">
                            <div class="panel panel-default single-my-account">
                                <div class="panel-heading my-account-title">
<!--                                    <button type="submit" @click="userData()">Data</button>-->
                                    <h3 class="panel-title"><span>1 .</span> <a data-toggle="collapse" data-parent="#faq" href="#my-account-1">Edit your account information </a></h3>
                                </div>
                                <div id="my-account-1" class="panel-collapse collapse show">
                                    <div class="panel-body">
                                        <div class="myaccount-info-wrapper">
                                            <div class="account-info-wrapper">
                                                <h4>My Account Information</h4>
                                                <h5>Your Personal Details</h5>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="billing-info">
                                                        <label>First Name</label>
                                                        <input type="text"  v-model="new_account.first_name">
                                                        <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.first_name"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['first_name'][0]}}</span></small>

                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="billing-info">
                                                        <label>Last Name</label>
                                                        <input type="text" v-model="new_account.last_name" />
                                                        <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.last_name"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['last_name'][0]}}</span></small>

                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="billing-info">
                                                        <label>Email Address</label>
                                                        <input type="email" v-model="new_account.email" />
                                                        <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.email"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['email'][0]}}</span></small>

                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="billing-info">
                                                        <label>Telephone</label>
                                                        <input type="text" v-model="new_account.telephone"/>
                                                        <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.telephone"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['telephone'][0]}}</span></small>

                                                    </div>
                                                </div>
<!--                                                <div class="col-lg-6 col-md-6">-->
<!--                                                    <div class="billing-info">-->
<!--                                                        <label>Fax</label>-->
<!--                                                        <input type="text" v-model="new_account.fax" />-->
<!--                                                    </div>-->
<!--                                                </div>-->
                                            </div>
                                            <div class="billing-back-btn">
<!--                                                <div class="billing-back">-->
<!--                                                    <a href="#"><i class="fa fa-arrow-up"></i> back</a>-->
<!--                                                </div>-->
                                                <div class="billing-btn" >
                                                    <button type="submit" @click="accountData()">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <ChangeYourPassword></ChangeYourPassword>
                                <ModifyBookEntries></ModifyBookEntries>
                                <ModifyWishlist></ModifyWishlist>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import {mapActions,mapState} from 'vuex';

import ChangeYourPassword from "./change-your-password";
import ModifyBookEntries from "./modify-book-entries";
import ModifyWishlist from "./modify-wishlist";
import {init_new_account} from "../../../store/user/account/state";

export default {
    name : "account-information",
    components: {
        ModifyWishlist,
        ModifyBookEntries,
        ChangeYourPassword
    },
    methods:{
        ...mapActions([
            'accountData',
             'userData',
        ])
    },
    computed:{
        ...mapState ({
            new_account: function (state) {
                return state.account.new_account;
            },
            new_account_errors: function (state){
                return state.account.new_account_errors;
            }
        })
    },
    mounted() {
        this.$store.dispatch('userData');

        console.log('Edit Account Information')
    }
}

</script>
<style scoped>
.container{
    padding : 30px 0px;
}
</style>
