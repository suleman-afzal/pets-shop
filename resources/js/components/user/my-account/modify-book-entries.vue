<template>
    <div class="panel panel-default single-my-account">
        <div class="panel-heading my-account-title">
            <h3 class="panel-title"><span>3 .</span> <a data-toggle="collapse" data-parent="#faq" href="#my-account-3">Modify your address book entries </a></h3>
        </div>
        <div id="my-account-3" class="panel-collapse collapse">
            <div class="panel-body">
                <div class="myaccount-info-wrapper">
                    <div class="account-info-wrapper">
                        <h4>Address Book Entries</h4>
                    </div>
                    <div class="entries-wrapper">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                <div class="entries-info text-center">
                                    <p>{{ new_account.street }}</p>
                                    <p>{{ new_account.city}},</p>
                                    <p>{{ new_account.state }},</p>
                                    <p>{{ new_account.country }}.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                <div class="entries-edit-delete text-center">
                                    <a class="edit" href="#" data-toggle="modal" data-target="#exampleModal">Edit</a>
<!--                                    <a href="#">Delete</a>-->
                                <!-- Button trigger modal -->
<!--                                <button type="button" class="btn " data-toggle="modal" data-target="#exampleModal">-->
<!--                                    Launch demo modal-->
<!--                                </button>-->

                                </div>
                                <!-- Modal -->
                                <div class="modal fade " id="exampleModal" tabindex="-2" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Address</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body" >
                                                <div class="entries-info text-center ">

                                                    <div class="d-flex align-items-center justify-content-center">
                                                        <div class="billing-info">
                                                            <label>Country</label>
                                                            <input type="text" v-model="new_account.country" />
                                                            <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.country"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['country'][0]}}</span></small>

                                                        </div>
                                                    </div>
                                                    <div class=" d-flex align-items-center justify-content-center">
                                                        <div class="billing-info">
                                                            <label>State</label>
                                                            <input type="text" v-model="new_account.state" />
                                                            <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.state"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['state'][0]}}</span></small>

                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-center">
                                                        <div class="billing-info">
                                                            <label>City</label>
                                                            <input type="text" v-model="new_account.city" />
                                                            <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.city"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['city'][0]}}</span></small>

                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center justify-content-center">
                                                        <div class="billing-info">
                                                            <label>Street</label>
                                                            <input type="text" v-model="new_account.street" />
                                                            <small  style="color: #CA0B00;" v-if="new_account_errors.validation_error.street"> <span class="fa fa-info-circle"> {{new_account_errors.validation_error['street'][0]}}</span></small>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer d-flex align-items-center justify-content-center">
                                                <button type="button" class="btn btn-secondary " data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary " @click="addressData()">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="billing-back-btn">
<!--                        <div class="billing-back">-->
<!--                            <a href="#"><i class="fa fa-arrow-up"></i> back</a>-->
<!--                        </div>-->
<!--                        <div class="billing-btn">-->
<!--                            <button type="submit" @click="addressData()">Save</button>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import {mapState, mapActions} from 'vuex';

export default {
    methods:{
      ...mapActions([
          'addressData',
          'userData',
      ])
    },
    computed: {
      ...mapState({
         new_account: function (state){
             return state.account.new_account;
         },
          new_account_errors: function(state){
             return state.account.new_account_errors;
          }
      }),
    },
    mounted() {
        this.$store.dispatch('userData');
    }
}

</script>
