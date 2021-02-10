let actions ={
    // userData
    accountData: async ({state, commit}) => {
        // console.log(state.account.new_account);
        //commit('SHOW_LOADER', null, {root: true});
        await axios({
            url: '/my-account',
            method: 'POST',
            data:state.account.new_account,
        }).then((resp) => {
            commit('ACCOUNT');
            // console.log(resp);
        }).catch((err) => {
            // console.warn(err.response.data.errors);
            commit('ACCOUNT_ERROR', err)
        });
    },
    confirmPassword: async ({state,commit}) =>{

        await axios({
            url: '/my-account-password',
            method: 'POST',
            data:state.account.new_account,
        }).then((resp) => {
            commit('PASSWORD');
            // console.log(resp);
        }).catch((err) => {
            // console.log(err.response.data);
            commit('PASSWORD_VALIDATION', err);
        });
    },

    addressData: async ({state,commit}) => {

        await axios({
            url: '/my-account-address',
            method: 'POST',
            data: state.account.new_account,
        }).then((resp)=> {
            commit('ADDRESS_INFORMATION');
        }).catch((err)=>{
            commit('ADDRESS_INFORMATION_ERROR', err);
        })
    },
    userData: async ({state, commit}) =>{

        await axios({
            url: '/my-account-information',
            method: 'GET'
        }).then((resp) =>{
            // console.log(resp.data[0]['first_name']);
            commit('USER_INFORMATION' , resp.data);
        }).catch((err)=>{
            console.log(err);
        })
    },

};
export  default actions;
