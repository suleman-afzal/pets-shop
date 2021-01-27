<template>
    <fieldset>
        <div class="form-card">
            <h2 class="fs-title">Detail Description</h2>

            <select class="form-control mt-3 pt-2">
                <option selected value="0">Choose Category</option>
                <option
                    v-for="sub_category3 in categories.filter(category_ => { return category_.id===new_product.level1_category_id}
                        )[0].sub_categories.filter(category2 => { return category2.id===new_product.level2_category_id})[0].sub_categories">
                    {{sub_category3.title}}
                </option>
            </select>

            <input type="text" name="title" v-model="new_product.title" placeholder="Add Title"/>
            <textarea placeholder="Description" v-model="new_product.description"></textarea>
            <input type="text" name="price" v-model="new_product.price" placeholder="Price"/>
        </div>
        <input type="button" name="previous"
               class="previous action-button-previous"
               @click="wizardMovePrevious()" value="Previous"/>
        <input type="button" name="next" class="next action-button"
               @click="wizardMoveNext()"
               value="Next Step"/>
    </fieldset>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "product-detail-step",
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
