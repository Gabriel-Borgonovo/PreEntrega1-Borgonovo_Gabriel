import React from 'react';
import './index.css'

export default function WidgetCart(){
    return(
        <>
            <a href="#ir-a-carrito" className="cart-button">
                <i className="fa-solid fa-cart-shopping carrito"></i><span id="contadorCarrito">0</span>
            </a>
        </>
    );
}
