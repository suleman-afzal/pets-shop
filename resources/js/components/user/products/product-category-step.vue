<template>
    <fieldset>
        <div class="form-card">
            <h2 class="fs-title">Choose Category</h2>
            <div class="row">
                <div class="col-12">

                    <!--Level One Categories Start-->
                    <div class="list-group col-6 float-left" id="list-tab" role="tablist">
                        <a :class="new_product.level1_category_id === category.id ?'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'"
                           :id="'category-'+category.id"
                           data-toggle="list"
                           :href="'#category-'+category.id+'-sub'" role="tab"
                           :aria-controls="'category-'+category.id+'-sub'"
                           @click="new_product.level1_category_id = category.id; new_product.level2_category_id = 0"
                           v-for="category in categories">{{ category.title }}
                        </a>
                    </div>
                    <!--Level One Categories END-->

                    <!--Level Two Categories Start-->
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
                            }}
                        </a>
                    </div>
                    <!--Level Two Categories End-->

                </div>
            </div>
        </div>
        <input type="button" name="next"
               value="Next Step"
               class="next action-button disabled"
               @click="wizardMoveNext()"
               :disabled="!new_product.level1_category_id > 0 || !new_product.level2_category_id > 0"
        />
    </fieldset>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "product-category-step",
    data() {
        return {}
    },
    methods: {
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

<style scoped>

</style>
