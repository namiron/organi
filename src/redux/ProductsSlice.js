import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const BaseURL = 'http://localhost:3001'
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BaseURL}/products`)
            if (!response.ok) {
                throw new Error('server error')
            }
            const data = response.json()
            console.log(data);
            return data
        } catch (error) {
            console.log(error.message);
            rejectWithValue(error.message)

        }
    }
)
const Products = createSlice({
    name: 'products',
    initialState: {
        list: [],
        cart: [],
        status: null,
        error: null,
    },
    reducers: {
        addItemToCart: (state, { payload }) => {
            let newCart = [...state.cart]
            const found = state.cart.find(({ id }) => id === payload.id)

            if (found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } : item
                })
            } else newCart.push({ ...payload, quantity: 1 })
            state.cart = newCart
        },
        removeToCart: (state, { payload }) => {
            let filterCart = state.cart.filter((item) => payload.id !== item.id)
            state.cart = filterCart
        },
    },
    extraReducers(builder) {
        builder.addCase(getProducts.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled'
                state.list = payload
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.status = 'rejected'
                state.error = payload
            })
    }
})
export const { addItemToCart, removeToCart } = Products.actions

export default Products.reducer