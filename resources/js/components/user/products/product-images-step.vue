<template>
    <fieldset>
        <div class="form-card">
            <h2 class="fs-title">Images</h2>
            <label class="pay">Choose images*</label>
            <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
<!--                :data-images="new_product.images"-->
                <vue-upload-multiple-image
                    @upload-success="uploadImageSuccess"
                    @before-remove="beforeRemove"
                    @edit-image="editImage"
                    @data-change="dataChange"
                    :dropText="'Drag & drop detail images'"
                    :dragText="'Drag & drop  detail images'"
                    :popupText="'Product detail images'"
                    :primaryText="'thumbnail'"
                    :markIsPrimaryText="'Detail Image'"
                    :browseText="'Browse image'"
                    :max-image="5"
                    :showDelete="false"
                    :accept="'image/gif,image/jpeg,image/png,image/bmp,image/jpg'"
                ></vue-upload-multiple-image>
                <input type="file" @change="upload($event)">
            </div>
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
import VueUploadMultipleImage from 'vue-upload-multiple-image';

export default {
    name: "product-images-step",
    data() {
        return {}
    },
    components:{
      VueUploadMultipleImage,
    },
    methods: {
upload($event){
    console.log($event.target.files[0]);
},
        uploadImageSuccess(formData, index, fileList) {
            this.new_product.images = formData;

            //Json
            console.log(formData.getAll('file'));
            console.log(formData)
            console.log(fileList)
           // console.log(formData[0].file);

            let formData2 = new FormData()
            formData2.append('name', 'Ali');
            formData2.append('files[0]', formData.getAll('file')[0])
            formData2.append('files[1]', formData.getAll('file')[0])
            axios.post('add-new-product', formData2).then(response => {
               // console.log(response)
            })

            // Upload image api
            // axios.post('add-new-product', fileList).then(response => {
            //   //console.log(response)
            // })
        },
        beforeRemove(index, done, fileList) {
            console.log('index', index, fileList)
            var r = confirm("remove image")
            if (r == true) {
                done()
            } else {
            }
        },
        editImage(formData, index, fileList) {
            console.log('edit data', formData, index, fileList)
        },
        dataChange() {

        },
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
            new_product: function (state) {
                return state.product.new_product;
            }
        })
    }
}
</script>

<style scoped>

</style>
