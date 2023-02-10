import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div >
             <Header></Header>
             <Outlet />
             <Footer></Footer>

        </div>
    );
};

export default Layout;