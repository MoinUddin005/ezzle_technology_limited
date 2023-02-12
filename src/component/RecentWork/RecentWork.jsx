import React from 'react';

const RecentWork = () => {
    return (
        <div className='container Recent-work'>
            <h3 className='text-white recent-h3' >Recnt work</h3>
            <div className="row row-cols-1 row-cols-md-5 gap-5">
                
            <div className="col">
                    <div className="card h-100 ">
                    <div class="contain">
                      <img src="../../../public/images/ezze/mujib100.png" alt="Avatar" class="image px-2 py-2 zoom"/>
                      <div class="middle d-flex gap-2">
                      <a href="http://mujib100.parliament.gov.bd/#home" target="_blank"><button className='btn bg-info text-uppercase text-white'>veiw</button></a> 
                         <button className='btn bg-warning text-uppercase text-white'>Details</button>
                      </div>
                    </div>
                    <p><strong className=' ms-2 text-color text-black fw-bold'>PARLIAMENT MUJIB100</strong></p>
                     <p className='ms-2'>web Application</p>
                    </div>
              </div> 
              <div className="col">
                    <div className="card h-100 ">
                    <div class="contain">
                      <img src="../../../public/images/ezze/bloodbank.png" alt="Avatar" class="image px-2 py-2 zoom"/>
                      <div class="middle d-flex gap-2">
                      <a href="https://bloodbank.live/" target='_blank'> <button className='btn bg-info text-uppercase text-white'>veiw</button></a>         
                         <button className='btn bg-warning text-uppercase text-white'>Details</button>
                      </div>
                    </div>
                    <p><strong className=' ms-2 text-color text-black fw-bold'>BLOODBANK LIVE</strong></p>
                     <p className='ms-2'>Mobile Application</p>
                    </div>
                </div> 
                <div className="col">
                    <div className="card h-100 ">
                      <div class="contain ">
                          <img src="../../../public/images/ezze/startup.png" alt="Avatar" class="image px-2 py-2 zoom"/>
                          <div class="middle d-flex gap-2">
                            <button className='btn bg-info text-uppercase text-white'>veiw</button>
                            <button className='btn bg-warning text-uppercase text-white'>Details</button>
                          </div>
                      </div>
                      <p><strong className=' ms-2 text-color text-black fw-bold'>STARTUP BANGLADESH</strong></p>
                      <p className='ms-2'>Mobile Application</p>
                  </div>
              </div> 
                <div className="col">
                    <div className="card h-100 ">
                    <div class="contain">
                      <img src="../../../public/images/ezze/eed.png" alt="Avatar" class="image px-2 py-2 zoom"/>
                      <div class="middle d-flex gap-2">
                      <a href="http://mujib100.parliament.gov.bd/#home" target="_blank"><button className='btn bg-info text-uppercase text-white'>veiw</button></a>  
                         <button className='btn bg-warning text-uppercase text-white'>Details</button>
                      </div>
                    </div>
                    <p><strong className=' ms-2 text-color text-black fw-bold'>EDUCATION BUILDING</strong></p>
                     <p className='ms-2'>web Application</p>
                    </div>
                </div>          
            </div>
            <div className="d-flex justify-content-end mt-4">
                <button type="button" className="btn btn-outline-secondary text-uppercase">More Project</button>
            </div>
           
        </div>
    );
};

export default RecentWork;