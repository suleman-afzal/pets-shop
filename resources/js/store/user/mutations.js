import category from './categories/mutations';
import product from "./products/mutations";


let module_mutations = {
    ...category,
    ...product,
};


export default module_mutations;
