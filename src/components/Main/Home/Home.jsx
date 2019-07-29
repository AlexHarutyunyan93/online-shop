import React, { Component, lazy, Suspense } from 'react';
import './home.css';
import SpecialCategories from "../SpecialCategories/SpecialCategories";
import PromoSlider from "../PromoSlider/PromoSlider";
const NewCollections = lazy( () => import("../NewCollections/NewCollections"));
const SellOut = lazy(() => import("../SellOut/SellOut"));
const About = lazy(() => import("../About/About"));


class Home extends Component {
    state = {
        dresses: null
    };
    componentDidMount() {
        const { url, request } = this.props;
        request(url, res => this.setState({dresses: res}) )
    }
    render() {
        const { dresses } = this.state;
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
}

export default Home;