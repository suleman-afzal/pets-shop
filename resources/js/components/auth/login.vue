<template>
    <div>
        <breadcrumb></breadcrumb>
        <!-- login area start -->
        <div class="login-register-area pb-100px">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 ml-auto mr-auto">
                        <div class="login-register-wrapper">
                            <div class="login-register-tab-list nav">
                                <a class="active" data-toggle="tab" href="#lg1">
                                    <h4>login</h4>
                                </a>
                                <a data-toggle="tab" href="#lg2">
                                    <h4>register</h4>
                                </a>
                            </div>

                            <div class="tab-content">
                                <div id="lg1" class="tab-pane active">
                                    <div class="login-form-container">
                                        <div class="login-register-form">
                                            <form action="#" method="post">
                                                <div class="mb-4">
                                                    <input type="text" class="mb-2" name="user-name" placeholder="Email" v-model="auth.login.email" />
                                                    <small  style="color: #CA0B00;" v-if="errors.login['email']"> <span class="fa fa-info-circle"> {{errors.login['email'][0]}}</span></small>
                                                </div>

                                                <div class="mb-4">
                                                    <input type="password" class="mb-2" name="user-password" placeholder="Password" v-model="auth.login.password"/>
                                                    <small  style="color: #CA0B00;" v-if="errors.login['password']"> <span class="fa fa-info-circle"> {{errors.login['password'][0]}}</span></small>
                                                </div>

                                                <div class="button-box">
                                                    <div class="login-toggle-btn">
                                                        <input type="checkbox" v-model="auth.login.remember_token"/>
                                                        <a class="flote-none" href="javascript:void(0)">Remember me</a>
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                    <button type="submit" @click.prevent="login"><span>Login</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div id="lg2" class="tab-pane">
                                    <div class="login-form-container">
                                        <div class="login-register-form">
                                            <form action="#" method="post">
                                                <div class="mb-4">
                                                <input type="text" class="mb-2" name="user-fname" placeholder="First Name" v-model="auth.register.first_name"/>
                                                    <small  style="color: #CA0B00;" v-if="errors.register['first_name']"> <span class="fa fa-info-circle"> {{errors.register['first_name'][0]}}</span></small>
                                                </div>

                                                <div class="mb-4">
                                                    <input type="text" class="mb-2"  name="user-lname" placeholder="Last Name" v-model="auth.register.last_name"/>
                                                    <small  style="color: #CA0B00;" v-if="errors.register['last_name']"> <span class="fa fa-info-circle"> {{errors.register['last_name'][0]}}</span></small>
                                                </div>

                                                <div class="mb-4">
                                                    <input type="email" name="user-email" class="mb-2"  placeholder="Email" v-model="auth.register.email"/>
                                                    <small  style="color: #CA0B00;" v-if="errors.register['email']"> <span class="fa fa-info-circle"> {{errors.register['email'][0]}}</span></small>
                                                </div>


                                                <div class="mb-4">
                                                    <input type="password" name="password" class="mb-2"  placeholder="Password" v-model="auth.register.password"/>
                                                    <small  style="color: #CA0B00;" v-if="errors.register['password']"> <span class="fa fa-info-circle"> {{errors.register['password'][0]}}</span></small>
                                                </div>


                                                <div class="mb-4">
                                                    <input type="password" class="mb-2" name="c_password" placeholder="Confirm Password" v-model="auth.register.confirm_password"/>
                                                    <small  style="color: #CA0B00;" v-if="errors.register['confirm_password']"> <span class="fa fa-info-circle"> {{errors.register['confirm_password'][0]}}</span></small>
                                                </div>

                                                <div class="button-box">
                                                    <button type="submit" @click.prevent="register"><span>Register</span></button>
                                                </div>
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
        <!-- login area end -->
    </div>
</template>

<script>
    import {mapState} from "vuex";


    export default {
        data() {
            return {
                auth: {
                    login: {
                        email: '',
                        password: '',
                        remember_token: ''
                    },
                    register: {
                        first_name: '',
                        last_name: '',
                        phone: '',
                        email: '',
                        password: '',
                        confirm_password: '',
                    }
                },

                errors: {
                    login:[],
                    register:[],
                }
            }
        },

        methods: {
            login: async function () {
                self = this;
                //this.$store.commit('SHOW_LOADER', null, {root: true});
                await axios({
                    url: 'login',
                    method: 'POST',
                    data: self.auth.login
                }).then((resp) => {
                    if (resp.data.status) {
                        //redirecting back to login then middleware will decide where to redirect
                        window.location = "/login";
                    } else {
                        console.error(resp.data);
                    }
                   // this.$store.commit('HIDE_LOADER', null, {root: true});
                }).catch((err) => {
                    self.errors.login = err.response.data.errors;
                    //this.$store.commit('HIDE_LOADER', null, {root: true});
                });
            },

            register: async function () {
                self = this;
                //this.$store.commit('SHOW_LOADER', null, {root: true});
                await axios({
                    url: 'register',
                    method: 'POST',
                    data: self.auth.register
                }).then((resp) => {
                    console.log(resp);
                    if (resp.data.status) {
                        setTimeout(function () {
                            //window.location = resp.data.url;
                            //commit('HIDE_LOADER', null, {root: true});
                        }, 2000);
                    } else {
                        //this.$store.commit('HIDE_LOADER', null, {root: true});
                    }
                }).catch((err) => {
                    console.log(err.response.data.errors);
                    //this.$store.commit('HIDE_LOADER', null, {root: true});
                    self.errors.register = err.response.data.errors;
                });
            },

            resetErrors:function () {
                this.errors.login = [];
                this.errors.register = [];
            }
        },
        computed: {
            ...mapState({
                loader: (state) => {
                    return state.loader;
                },
            })
        },

        components: {
            //VueProgrammaticInvisibleGoogleRecaptcha,
        }
    }
</script>

<style scoped>

</style>
