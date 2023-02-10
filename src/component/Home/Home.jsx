import React from 'react';
import RecentWork from '../RecentWork/RecentWork';
import WelcomePart from '../WelcomePart/WelcomePart';
import Whatwedo from '../WhatWeDo/Whatwedo';

const Home = () => {
    return (
        <div>
            <WelcomePart></WelcomePart>
            <RecentWork></RecentWork>
            <Whatwedo/>
        </div>
    );
};

export default Home;