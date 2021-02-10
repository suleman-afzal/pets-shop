import category from './categories/actions';
import product from './products/actions';
import account from './account/actions'

let module_actions = {
    ...category,
    ...product,
    ...account,
};


export default module_actions;
