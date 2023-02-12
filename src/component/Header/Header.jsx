import {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [stickyNav, setSticky] = useState(false);

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 120) {
        setSticky(true);
      }else {
        setSticky(false);
      }
    });

    return (
      <nav className={stickyNav ? 'bg-light fixed-top navbar navbar-expand-lg pb-0 fade-in' : 'navbar navbar-expand-lg transparent-nav-bg navbar-dark position-absolute w-100 z-index-100'} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img alt="logo" src="../../../public/images/etl_logo_white.png" className={stickyNav ? 'd-none' : 'main-logo d-inline-block align-text-top'}/>
            <img alt="logo" src="../../../public/images/etl_logo_color.png" className={stickyNav ? 'main-logo d-inline-block align-text-top' : 'd-none'}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Press</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;