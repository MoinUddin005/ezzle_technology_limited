import React from 'react';

const RecentWork = () => {
    return (
        <div className='container Recent-work'>
            <h1 className=''>Recent work</h1>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100">
                      <div className='bg-image hover-zoom'>
                        <img src="../../../public/images/ezze/mujib100.png" class="card-img-top" alt="..."/>
                      </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="../../../public/images/ezze/bloodbank.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>  
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="../../../public/images/ezze/startup.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="../../../public/images/ezze/eed.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                    </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-4">
                <button type="button" class="btn btn-outline-secondary text-uppercase">More Project</button>
            </div>
           
        </div>
    );
};

export default RecentWork;