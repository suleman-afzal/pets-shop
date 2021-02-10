let mutations ={
    ACCOUNT(state){
        return state.account.new_account ;
    },
    PASSWORD(state){
        return state.account.new_account;
    },
    ADDRESS_INFORMATION(state){
        return state.account.new_account;
    },
    USER_INFORMATION(state, data){
         state.account.new_account.first_name = data[0]['first_name'];
        state.account.new_account.last_name = data[0]['last_name'];
        state.account.new_account.email = data[0]['email'];
        state.account.new_account.telephone = data[0]['phone'];
        state.account.new_account.street = data[0]['street'];
        state.account.new_account.city = data[0]['city'];
        state.account.new_account.state = data[0]['state'];
        state.account.new_account.country = data[0]['country'];



        // console.warn(data[0]['first_name']);
    },
    ACCOUNT_ERROR(state, error){
       state.account.new_account_errors.validation_error =error.response.data.errors;
         // console.warn(state.account.new_account_errors.validation_error);
    },
    PASSWORD_VALIDATION(state, error){
        state.account.new_account_errors.validation_error = error.response.data.errors;
    },
    ADDRESS_INFORMATION_ERROR(state,error){
        state.account.new_account_errors.validation_error = error.response.data.errors;
    }
}
export default mutations;
