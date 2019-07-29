import React from 'react';
import './header.css';
import Top from './../../containers/Menu';
import Middle from './Middle/Middle';
import Bottom from './Bottom/Bottom';
import MobileVersion from './MobileVersion/MobileVersion'


const Header = () => {
    return(
        <header>
            <Top />
            <Middle />
            <Bottom />
            <MobileVersion />
        </header>
    )
};

export default Header;