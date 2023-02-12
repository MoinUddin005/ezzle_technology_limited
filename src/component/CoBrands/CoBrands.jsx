import React from 'react';

const CoBrands = () => {
    return (
        <div className='container'>
            <h3 className='co-brands text-center pt-5'>CO - BRANDS</h3>
             <hr className='hr-2' />
            <div className="row mt-5 row-cols-1 row-cols-md-4 g-2">
                <div className='col'>
                <a href="https://dhakalive.tv/" target="_blank"><img className='images' src='../../../public/images/ezze/dhakalive.png' /></a>
                </div>
                <div className='col'>
                <a href="https://itbazaar.com/" target="_blank"><img className='images' src='../../../public/images/ezze/itbazaar.png' /></a>
                </div>
                <div className='col'>
                <a href="http://techjobs.com.bd/" target="_blank"><img className='images' src='../../../public/images/ezze/techjobs.com.bd.png' /></a>
                </div>
                <div className='col'>
                <a><img className='images' src='../../../public/images/ezze/etlcampus.png' /></a>
                </div>
                
            </div>
        </div>
    );
};

export default CoBrands;