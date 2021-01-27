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
        //commit('SHOW_LOADER', null, {root: true});
        await axios({
            url: '/add-new-product',
            method: 'POST',
            data:state.new_product
        }).then((resp) => {
            //commit('HIDE_LOADER', null, {root: true});
        }).catch((err) => {
            console.log(err);
            //commit('HIDE_LOADER', null, {root: true});
        });
    },
};

export default actions;
