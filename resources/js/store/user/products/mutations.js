let mutations = {
    // SET_NEW_PRODUCT_LEVEL1_CATEGORY_ID(state, id) {
    //     return state.product.new_product.level1_category_id = id;
    // },
    //
    // SET_NEW_PRODUCT_LEVEL1_CATEGORY_ID(state, id) {
    //     return state.product.new_product.level1_category_id = id;
    // },

    MOVE_TO_NEXT_WIZARD_STEP(state){
        return ++state.product.new_product.current_step;
    },

    MOVE_TO_PREVIOUS_WIZARD_STEP(state){
        return --state.product.new_product.current_step;
    },
    //ADD_PRODUCT:(state, newProduct)=> ( state.product.new_product = newProduct),
    ADD_PRODUCT(state, newProduct){
        return state.product.new_product = newProduct;
    }
  /*  HIDE_LOADER(state){

    },*/
};

export default mutations;
