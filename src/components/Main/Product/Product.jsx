import React, { useState, useEffect } from 'react';
import './product.css';
import axios from "axios";

const Product = (props) => {
    const lan = {
        price: ["руб"]
    };
    const [data, setData] = useState({});
    const url = `http://localhost:4000/api${window.location.pathname}/?language=0`;
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(url);
            setData(result.data);
        };
        fetchData();
    }, []);
    const {title, feutures, imageUrls, description, colors, price} = data;
    const {addToCart} = props;
    return (
        !data.title ? "loading" :
            <div className='product-container-wrapper'>
                <div className="product-container">
                    <div className="product-img-wrapper">
                        <div className="product-img-list">
                            {
                                imageUrls.map(e => <img src={e} alt={title} />)
                            }
                        </div>
                        <div className="show-one">
                            <img src={imageUrls[0]} alt={title} />
                        </div>
                    </div>
                    <div className="descriptions">
                        <h3 className="product-title">{title}</h3>
                        <div className="price">{price} {lan.price[0]}</div>
                        <button >Add to cart</button>
                        <div className="feutures">
                            <ul>
                                {
                                    feutures.map((e, index) => <li key={index}>{ e }</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-desc">
                    <h4>Description</h4>
                    <p>{description[0]}</p>
                </div>
            </div>
    )
};


export default Product;
