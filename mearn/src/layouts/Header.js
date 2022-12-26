import React from 'react';
import { Link, Outlet } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="w3l-header" id="home">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-dark pl-0 pr-0">
                <Link className="navbar-brand m-0" to="/"><span className="fa fa-gamepad"></span> Mearn </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-lg-4">
                      <Link to="/" className="nav-link pl-0 pr-0">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-lg-4">
                      <Link to="/about" className="nav-link pl-0 pr-0">About me<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-lg-4">
                      <Link to="/portfolio" className="nav-link pl-0 pr-0">Portfolio<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item mr-lg-4">
                      <Link to="/resume" className="nav-link pl-0 pr-0">Resume<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link pl-0 pr-0">Contact</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div><Outlet /></div>
      </>
    )
  }

}

export default Header;