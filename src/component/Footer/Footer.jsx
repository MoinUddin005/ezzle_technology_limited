import React from 'react';
import { BsChevronRight } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <div className='footer'>
             <div className=' container'>
            <div className='row mt-5 row-cols-1 row-cols-md-2 pt-5 g-5'>
                <div className='col'>
                    <h3 className='text-uppercase footer-h3'>address</h3>
                    <p className='footer-p'><strong>CORPORATE OFFICE</strong> : 49, Vision 2021 Tower-1, STP (Level 7), <br /> Kawran Bazar, Dhaka-1215.</p>
                    <p className='footer-p'><strong>Phone</strong> : +88 0244810014</p>
                    <p className='footer-p'><strong>Email</strong> : founders@etl.com.bd</p>
                    <p className='footer-p'><strong>Web</strong> : www.etl.com.bd</p>
                </div>
                <div className='col d-flex gap-5'>
                    <div className='gap ms-5 me-5'>
                        <h3 className='text-uppercase footer-h3'>company</h3>
                        <p className='a-p'><BsChevronRight/> about</p>
                        <p className='a-p'><BsChevronRight/> Careers</p>
                        <p className='a-p'><BsChevronRight/> Services</p>
                        <p className='a-p'><BsChevronRight/> Terms & service</p>
                        <p className='a-p'><BsChevronRight/> Quality policy</p>
                        <p className='a-p'><BsChevronRight/> Contact Us</p>
                    </div>
                    <div className=''>
                        <h3 className='text-uppercase footer-h3'>follow</h3>
                        <p ><BsChevronRight/> <a className='a-p' href="https://etl.com.bd/blog/" target="_blank">ETL BLOG</a></p>
                        <p><BsChevronRight/> <a className='a-p' href="http://www.linkedin.com/company/ezze-technology" target="_blank">Linkedin</a></p>
                        <p><BsChevronRight/> <a className='a-p' href="https://www.facebook.com/ezzetech" target="_blank">Facbook</a></p>
                        <p><BsChevronRight/> <a className='a-p' href="https://twitter.com/ezzetech" target="_blank">Twitter</a></p>
                        <p><BsChevronRight/> <a className='a-p' href="https://plus.google.com/110450403155295837733/" target="_blank">Google plus</a></p>
                        <p><BsChevronRight/> <a className='a-p' href="https://www.youtube.com/ezzetech" target="_blank">Youtube</a></p>
                    </div>

                </div>
                
            </div>
            <div className='copyright pt-5'>
                    <p className='text-center'>© 2023 Ezze Technology Ltd.</p>
            </div>
        </div>
       </div>
    );
};

export default Footer;