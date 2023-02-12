import React from 'react';
import { BsFillTrophyFill } from "react-icons/bs";
const Achievenments = () => {
    return (
        <div>
            <div  className="row row-cols-1 row-cols-md-2 ms-3">
                <div className="col">
                    <h1 className='Achive-ment mt-5'> Achievements</h1>
                    <h4 className='mt-5'><span><BsFillTrophyFill/></span> NATIONAL MOBILE APP DEVELOPMENT AWARD-15</h4>
                    <p className='pra'>Awarded For Live Blood Bank Mobile Application, Category- Health & Environment, Position: Runner-up</p>
                    <h4 className='mt-5'><span><BsFillTrophyFill/></span>BEST LIVE STREMING AWARD</h4>
                    <p className='pra'>Online Streaming Partnership: Bangladesh ICT Expo-2015 (15 June to 17 June) at BICC</p>
                    <h4 className='mt-5'><span><BsFillTrophyFill/></span> ARIJIT SINGH LIVE IN CONCERT</h4>
                    <p className='pra'>Arijit Singh Live in Concert: 12th Dec 2014 — at Jamuna Future Park, Dhaka</p>
                </div>
                <div className="col">
                    <img className='w-100' src='../../../public/images/achive-two.jpg'/>
                </div>
            </div>
        </div>
    );
};

export default Achievenments;