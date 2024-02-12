import { configureStore } from '@reduxjs/toolkit'
import Products from './ProductsSlice';


const store = configureStore({
    reducer: {
        products: Products,
    }
})

export default store;

