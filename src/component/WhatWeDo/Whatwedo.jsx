import React from 'react';
import { IoRocketOutline } from "react-icons/io5";

const Whatwedo = () => {
    return (
       <div className='container'>
        <h1 className='text-center'>WHAT WE DO</h1>
             <div className='class="row row-cols-1 row-cols-md-2 g-4"'>
            <div className='col d-flex'>
                <div className='font-icon'>
                    <h2 className='icon'><IoRocketOutline/></h2>
                </div>
                <div>
                    <h3>Web Development</h3>
                    <p>Ezze Technology Ltd. offers web solutions which tend to be effective tools of marketing and ensure return on investments. We are devoted to give our customers affordable and custom based packages which surpass the expectation of the clientele.</p>
                </div>
            </div>
            <div className='col'>
            
            </div>

        </div>
       </div>
    );
};

export default Whatwedo;