import React from "react";
import './styles.css';

const Card = ({ product }) => {
    const { id, categoryId, description, image, name, price, stock } = product || {};
    return (
        <div className="card">
            <a href="index.html">
                <img className="card-image" src={image} alt={name} />
            </a>
            
            <div className="card-content">
                <a href="index.html" className="card-name">{name}</a>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <p className="card-stock">{stock} in stock</p>
            </div>
            <div className="card-button-container">
                <a href="index.html" className='btn btn-primary'>Comprar</a>
            </div>
        </div>
    )
}

export default Card;