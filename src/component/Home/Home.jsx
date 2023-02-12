import React from 'react';
import Achievenments from '../Achievenments/Achievenments';
import CoBrands from '../CoBrands/CoBrands';
import OurClients from '../OurClients/OurClients';
import PhotoStream from '../PhotoStream/PhotoStream';
import RecentWork from '../RecentWork/RecentWork';
import WelcomePart from '../WelcomePart/WelcomePart';
import Whatwedo from '../WhatWeDo/Whatwedo';

const Home = () => {
    return (
        <div>
            <WelcomePart></WelcomePart>
            <RecentWork></RecentWork>
            <Whatwedo/>
            <Achievenments></Achievenments>
            <OurClients></OurClients>
            <PhotoStream></PhotoStream>
            <CoBrands></CoBrands>
        </div>
    );
};

export default Home;