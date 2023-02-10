import React from 'react';
import { IoRocketOutline  } from "react-icons/io5";
import { FaLaptop , FaPaperPlane ,FaBriefcase } from 'react-icons/fa';
import { BiData } from "react-icons/bi";
import { TfiVideoCamera } from "react-icons/tfi";

const Whatwedo = () => {
    return (
        <div style={{backgroundColor: "#238de6"}}>
              <div className='container text-white mt-5' >
                <h1 className='text-center'>WHAT WE DO</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className='col d-flex gap-5'>
                        <div className='font-icon text-center text-white'>
                            <span className='dot' style={{backgroundColor: "#ea6a6a"}}><h2 className='icon mt-4'><IoRocketOutline/></h2></span>
                        </div>
                        <div>
                            <h3>Web Development</h3>
                            <p>Ezze Technology Ltd. offers web solutions which tend to be effective tools of marketing and ensure return on investments. We are devoted to give our customers affordable and custom based packages which surpass the expectation of the clientele.</p>
                        </div>
                    </div>
                    <div className='col d-flex gap-5'>
                        <div className='font-icon text-center text-white'>
                            <span className='dot' style={{backgroundColor: "#67bbb4"}}><h2 className='icon mt-4'><FaLaptop/></h2></span>
                        </div>
                        <div>
                            <h3>Web Development</h3>
                            <p>Ezze Technology Ltd. provides wide assortment of services for mobile applications and developments which makes the transition of your company into the online world as smooth as possible. Our professional team constantly hones their skill to ensure that your company stays ahead in this competitive world</p>
                        </div>
                    </div>
                    <div className='col d-flex gap-5'>
                        <div className='font-icon text-center text-white'>
                            <span className='dot' style={{backgroundColor: "#e8852d"}}><h2 className='icon mt-4'><FaPaperPlane/></h2></span>
                        </div>
                        <div>
                            <h3>Digital Marketing</h3>
                            <p>Digital Marketing is driving the society to a phase which creates new ways of thinking, interrelationships and global awareness. We are trying to provide out of the box solutions which can help to find lasting and hi-impact solutions to marketing issue.</p>
                        </div>
                    </div>
                    <div className='col d-flex gap-5'>
                        <div className='font-icon text-center text-white'>
                            <span className='dot' style={{backgroundColor: "#ce5281"}}><h2 className='icon mt-4'><BiData/></h2></span>
                        </div>
                        <div>
                            <h3>Domain & Hosting</h3>
                            <p>Ezze Technology Ltd. realizes that now a day’s everyone needs an online presence, regardless of their line of business or technical expertise. With an authoritative and straightforward way to hosting solution, we are able to cover everyone’s need and requirements.</p>
                        </div>
                    </div>
                    <div className='col d-flex gap-5'>
                        <div className='font-icon text-center text-white'>
                            <span className='dot' style={{backgroundColor: "#F44336"}}><h2 className='icon mt-4'><TfiVideoCamera/></h2></span>
                        </div>
                        <div>
                            <h3>Live Streming</h3>
                            <p>Live Streaming video is content that sent in compressed form over the Internet and displayed by the viewer in real time. We ensure video streaming platform which allows customers to live their video content in a seamless way.</p>
                        </div>
                    </div>
                    <div className='col d-flex gap-5'>
                        <div className='font-icon text-center text-white'>
                            <span className='dot' style={{backgroundColor: "#4CAF50"}}><h2 className='icon mt-4'><FaBriefcase/></h2></span>
                        </div>
                        <div>
                            <h3>E-Business Solution</h3>
                            <p>Ezze Technology Ltd. brings a package program that lets you build, customize, and run an online store. We will walk you through the entire process: hosting, design, pricing and payment options, marketing tools and reports.</p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Whatwedo;