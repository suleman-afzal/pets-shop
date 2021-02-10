<template>
    <div class="panel panel-default single-my-account">
        <div class="panel-heading my-account-title">
            <h3 class="panel-title"><span>2 .</span> <a data-toggle="collapse" data-parent="#faq" href="#my-account-2">Change your password </a></h3>
        </div>
        <div id="my-account-2" class="panel-collapse collapse">
            <div class="panel-body">
                <div class="myaccount-info-wrapper">
                    <div class="account-info-wrapper">
                        <h4>Change Password</h4>
                        <h5>Your Password</h5>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="billing-info">
                                <label>Password</label>
                                <input type="password" v-model="new_account.password" />
                                <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.password"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['password'][0]}}</span></small>

                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="billing-info">
                                <label>Password Confirm</label>
                                <input type="password" v-model="new_account.confirm_password" />
                                <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.confirm_password"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['confirm_password'][0]}}</span></small>

                            </div>
                        </div>
                    </div>
                    <div class="billing-back-btn">
<!--                        <div class="billing-back">-->
<!--                            <a href="#"><i class="fa fa-arrow-up"></i> back</a>-->
<!--                        </div>-->
                        <small  style="color: #CA0B00;" v-if="new_account.password !== new_account.confirm_password"> <span class="fa fa-info-circle"> Password is not Matched</span></small>
                        <div class="billing-btn" >
                            <button type="submit" @click="confirmPassword()" >Save</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex';
export default {
    name: "change-your-password",
    methods: {
        ...mapActions([
            "confirmPassword"
        ])
    },
    computed: {
        ...mapState({
            new_account: function (state) {
                return state.account.new_account;
            },
            new_account_errors:function(state){
                return state.account.new_account_errors;
            }
        })
    }
}

</script>
