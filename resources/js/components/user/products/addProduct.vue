<template>
     <!-- Modal -->
    <div class="modal fade bd-example-modal-md" id="addProductModal" tabindex="-1" role="dialog" aria-labelledby="addProductModalTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addProductModalTitle">POST YOUR AD</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="row">
                        <div class="col-12 mt-1 mb-3">
                            CHOOSE A CATEGORY
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="list-group" id="list-tab" role="tablist">

                                <a :class="new_product.level1_category_id === category.id ?'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'"
                                   :id="'category-'+category.id"
                                   data-toggle="list" :href="'#category-'+category.id+'-sub'" role="tab"
                                   :aria-controls="'category-'+category.id+'-sub'"
                                   @click="new_product.level1_category_id = category.id"
                                   v-for="category in categories">{{category.title}}</a>


<!--                                <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>-->
<!--                                <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>-->
<!--                                <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>-->
<!--                                <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>-->
                            </div>
                        </div>

                        <div class="col-6" v-if="new_product.level1_category_id > 0">
                            <div class="list-group" id="list-tab2" role="tablist">
                                <a :class="new_product.level2_category_id === sub_category.id ?'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'"
                                   :id="'category-'+sub_category.id"
                                   data-toggle="list" :href="'#category-'+sub_category.id+'-sub'" role="tab"
                                   :aria-controls="'category-'+sub_category.id+'-sub'"
                                   @click="new_product.level2_category_id = sub_category.id"
                                   v-for="sub_category in categories.filter(category_ => {category_.id===new_product.level1_category_id})[0].sub_categories">{{sub_category.title}}</a>
                            </div>
                        </div>


<!--                        <div class="col-6">-->
<!--                            <div class="tab-content" id="nav-tabContent">-->
<!--                                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>-->
<!--                                <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>-->
<!--                                <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>-->
<!--                                <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    mounted() {
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
    border: 1px solid rgba(0,0,0,.125);
    color: rgba(0,47,52,.64);;
}
.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: rgba(0, 47, 52, 0.30);
    border: 1px solid rgba(0, 47, 52, 0.30);
}
</style>
