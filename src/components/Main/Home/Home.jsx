import React, { lazy, Suspense } from 'react';
import './home.css';
import SpecialCategories from "../SpecialCategories/SpecialCategories";
import PromoSlider from "../PromoSlider/PromoSlider";
const NewCollections = lazy( () => import("../NewCollections/NewCollections"));
const SellOut = lazy(() => import("../SellOut/SellOut"));
const About = lazy(() => import("../About/About"));


function Home(props) {

const dresses = props.dresses;
    return(
        <div className="home-wrapper">
            {
                dresses === null ? "...Loading"
                    :
                    <div className="home">
                        <SpecialCategories/>
                        <Suspense fallback={<div>....Loading</div>}>
                            <PromoSlider/>
                            <NewCollections dresses={dresses}/>
                            <SellOut dresses={dresses}/>
                            <About />
                        </Suspense>
                    </div>
            }
        </div>
    )
}


export default Home;
