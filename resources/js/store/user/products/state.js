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
export const init_home_data = () => {
    return{
        main_categories : [],
        current_main_category : 0,

    }
};

// export const init_current_main_category =()=>{
//   return{
//       category_products : [],
//   }
// };


let state = {
    new_product:init_new_product(),
    new_product_errors:init_new_product_errors(),
    home_data : init_home_data(),
    // current_main_category: init_current_main_category(),
};

export default state;
