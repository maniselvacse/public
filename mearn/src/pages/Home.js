import React from "react";
import { Link } from "react-router-dom";
import profileContext from "../context/profileContext";

class Home extends React.Component {

    componentDidMount() {
    }

    render() {
        const profile = this.context;
        const data = profile.profileData.data.data[0];
        const serviceIcon = ["fa-bar-chart", "fa-laptop", "fa-codepen", "fa-modx", "fa-signal", "fa-paint-brush icon-fea"];
        const homeImage = data.hasOwnProperty('attachments') ? data.attachments.home_image : process.env.PUBLIC_URL + "/assets/images/myimage.jpg";

        return (
            <>
                {/* <!--  Main banner section --> */}
                <section className="w3l-main-banner">
                    <div className="banner-view">
                        <div className="banner-info container">
                            <h3 className="banner-text"><small>Hello, I’m </small>
                                {data.name}
                            </h3>
                            <p className="mt-3 mb-5"> {data.my_self}
                            </p><br />
                            <Link to="portfolio" className="btn btn-light btn-style mr-3">My Work</Link>
                            <Link to="about" className="btn btn-outline-light btn-style">Hire Me</Link>
                        </div>
                    </div>
                    <div id='stars'></div><div id='stars2'></div><div id='stars3'></div>
                </section>
                {/* <!--  //Main banner section --> */}

                {/* <!-- w3l-content-photo-5 --> */}
                <div className="w3l-content-photo-5 py-5" id="about">
                    <div className="content-main pt-lg-5 pt-md-3 pb-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 content-photo">
                                    <Link to="/">
                                        <img src={homeImage} className="img-fluid" alt="content" />
                                    </Link>
                                </div>
                                <div className="col-lg-8 content-left mt-lg-0 mt-5 ">
                                    <h3>{data.about_me}</h3>
                                    <p className="mb-0">{data.about_my_profile}</p>
                                    <Link to="about" className="btn-style btn-primary btn mt-lg-5 mt-4">About Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- //w3l-content-photo-5 --> */}

                <section className="w3l-services-block-3">
                    <div className="features-main pb-5 pt-0 text-center">
                        <div className="container pb-lg-3">
                            <div className="row features">
                                {data.services.map((service, key) => {
                                    return (
                                        <>
                                            <div className="col-lg-4 col-md-6 feature-grid">
                                                <a href="#url">
                                                    <div className={"feature-body service" + parseInt(key+1)}>
                                                        <div className="feature-img">
                                                            <span className={"fa " + serviceIcon[key]} aria-hidden="true"></span>
                                                        </div>
                                                        <div className="feature-info mt-4">
                                                            <h3 className="feature-titel mb-2">{service.name}</h3>
                                                            <p className="feature-text">{service.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- freelance hire me --> */}
                <section className="w3l-grid-quote py-5">
                    <div className="container py-lg-3">
                        <h6>I'am available.</h6>
                        <h3>Let's work together indeed!</h3>
                        <Link to="contact" className="btn-style btn-primary btn">Get quotes</Link>
                        <Link to="contact" className="btn btn-style btn-light ml-2">Hire me</Link>
                    </div>
                </section>
                {/* <!-- //freelance hire me --> */}

            </>
        );
    }
}

Home.contextType = profileContext;

export default Home;