import category from './categories/actions';
import product from './products/actions';

let module_actions = {
    ...category,
    ...product,
};


export default module_actions;
