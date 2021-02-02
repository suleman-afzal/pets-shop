<template>
    <fieldset>

        <div class="form-card">

            <h2 class="fs-title">Location</h2>

            <select class="form-control mt-3 pt-2" v-model="new_product.state">
                <option value="0">Choose State</option>
                <option selected value="Punjab">Punjab</option>

            </select>

            <select class="form-control mt-3 pt-2" v-model="new_product.city" >
               <option value="0">Choose City</option>
                <option selected value="Faisalabad">Faisalabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Gujranwala">Gujranwala</option>


            </select>

            <input type="text" name="phone" v-model="new_product.phone" placeholder="Phone"/>

            <div class="custom-control custom-switch">
                <label class="custom-control-label" for="switch1">Show my phone number on my ads</label>
                <input type="checkbox" v-model="new_product.show_phone" class="custom-control-input" id="switch1">
            </div>
        </div>

        <input type="button" name="previous"
               class="previous action-button-previous"
               @click="wizardMovePrevious()" value="Previous"/>
        <input type="button" name="next" class="next action-button"
               @click="addNewProduct()"
               value="Confirm"/>
    </fieldset>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    name: "product-address-step",
    data() {
        return {}
    },
    methods: {
        ...mapActions(
            [
                'wizardMoveNext',
                'wizardMovePrevious',
                'addNewProduct',
            ]
        )
    },
    mounted() {
    },
    computed: {
        ...mapState({
            new_product: function (state) {
                return state.product.new_product;
            }
        })
    }
}
</script>

<style scoped>

</style>
