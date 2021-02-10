export const init_new_account = () => {
    return {
        first_name: '',
        last_name: '',
        email: '',
        telephone: '',
        fax: '',
        password:'',
        confirm_password: '',
        street: '',
        city: '',
        state: '',
        country: '',


    };
};

export const init_new_account_errors = () => {
    return {
        validation_error: []
    };
};


let state = {
    new_account:init_new_account(),
    new_account_errors:init_new_account_errors(),
};

export default state;
