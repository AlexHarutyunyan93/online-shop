import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './promoSlider.css';

const PromoSlider = () => {
    return (
        <div id="elem" className="promo-slider-wrapper">
            <Carousel>
                <div>
                    <img alt="special category"
                        src="https://static-eu.insales.ru/files/1/1631/5031519/original/83dd8126869ec4e1906ecdd94bf1ac30.png"/>
                </div>
                <div>
                    <img alt="special category"
                        src="https://static-eu.insales.ru/files/1/1772/5031660/original/506bbb6b212118e0fce2256d359831ff.png"/>
                </div>
                <div>
                    <img alt="special category"
                        src="https://static-eu.insales.ru/files/1/1824/5031712/original/89b7b83d5ea3b4ab39be54294abe4c8e.png"/>
                </div>
            </Carousel>
        </div>
    )
};

export default PromoSlider;
