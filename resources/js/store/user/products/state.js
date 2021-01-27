export const init_new_product = () => {
    return {
        title: '',
        description: '',
        images: [],
        price: '',
        city: '',
        state: '',
        show_phone: false,
        phone: '',
        level1_category_id: 0,
        level2_category_id: 0,
        level3_category_id: 0,
        current_step: 1,

    };
};

export const init_new_product_errors = () => {
    return {
        title: null,
        description: null,
        images: null,
        price: null,
        country: null,
        city: null,
        state: null,
        show_phone: null,
        phone: null,
        level1_category_id: null,
        level2_category_id: null,
        level3_category_id: null,
    };
};


let state = {
    new_product:init_new_product(),
    new_product_errors:init_new_product_errors(),
};

export default state;
