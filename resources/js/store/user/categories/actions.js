let actions = {
    fetchCategories: async ({state, commit}) => {

        if (state.category.categories.length)
            return;

        //commit('SHOW_LOADER', null, {root: true});
        axios({url: '/all-categories', method: 'POST',}).then((resp) => {
            commit('SET_CATEGORIES', resp.data);
            //commit('HIDE_LOADER', null, {root: true});
        }).catch((err) => {
            console.log(err);
            //commit('HIDE_LOADER', null, {root: true});
        });
    },
};

export default actions;
