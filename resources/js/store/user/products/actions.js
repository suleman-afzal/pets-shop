let actions ={
    wizardMoveNext: async ({state, commit}) => {
        commit('MOVE_TO_NEXT_WIZARD_STEP');
        //return step_number <= current_step ? 'active':''
    },
    wizardMovePrevious: async ({state, commit}) => {
        commit('MOVE_TO_PREVIOUS_WIZARD_STEP');
        //return step_number <= current_step ? 'active':''
    },

    addNewProduct: async ({state, commit}) => {
        //console.log(state.product.new_product);
        //commit('SHOW_LOADER', null, {root: true});
        await axios({
            url: '/add-new-product',
            method: 'POST',
            data:state.product.new_product,

        }).then((resp) => {
           // commit('HIDE_LOADER', null, {root: true});
            commit('ADD_PRODUCT',resp);
           // console.log(resp);
        }).catch((err) => {
            console.log(err);
           // commit('HIDE_LOADER', null, {root: true});
        });
    },
    homeData: async ({commit, state})=>{
        await axios({
            url:'/home-data',
            method: 'GET'
        }).then((resp)=>{
            // console.warn(resp.data.data.main_categories);
            commit('CATEGORIES',resp);
        }).catch((err)=>{
            console.error(err);
        });
},
    featuredItems: async ({commit, state})=>{
        await axios({
            url:'/home-data',
            method: 'GET'
        }).then((resp)=>{
            // console.warn(resp.data);
            commit('FEATURED_ITEMS',resp);
        }).catch((err)=>{
            console.error(err);
        });
    },

};

export default actions;
