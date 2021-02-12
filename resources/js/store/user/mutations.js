import category from './categories/mutations';
import product from "./products/mutations";
import account from './account/mutations';
let module_mutations = {
    ...category,
    ...product,
    ...account,
};


export default module_mutations;
