import React, { useState } from 'react';
import { addItemToCart } from '../../redux/ProductsSlice';

const AddToCart = () => {
    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = () => {
        setAddedToCart(true);

        setTimeout(() => {
            setAddedToCart(false);
        }, 3000);
    };


    return (
        <div>
            <h2>Название товара</h2>
            <button onClick={addItemToCart}>Добавить в корзину</button>
            {addedToCart && <p>Добавлено в корзину!</p>}
        </div>
    );
};
export default AddToCart