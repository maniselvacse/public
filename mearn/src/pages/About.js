import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import profileContext from "../context/profileContext";
import counterStore from "../services/redux/stores/counter.store";
import { getCounterValues } from "../services/redux/reducers/counter.reducer";
class About extends React.Component {

    constructor(props) {
        super(props);
        this.counter = counterStore.getState().counter.value;
    }

    componentDidMount() {
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
        </Helmet>
    }

    render() {
        const profile = this.context;
        const data = profile.profileData.data.data[0];
        const icon = ["codepen", "hourglass", "camera", "plane", "headphones", "tint"];

        const aboutImage = data.hasOwnProperty('attachments') ? data.attachments.about_image : 'assets/images/me.jpg';
        const aboutMyProfile = data.hasOwnProperty('attachments') ? data.attachments.about_my_profile_image : 'assets/images/about.jpg';
        const resume = data.hasOwnProperty('attachments') ? data.attachments.resume_document : "#";

        counterStore.subscribe(() => {
            this.counter = counterStore.getState().counter.value
        })
        counterStore.dispatch(getCounterValues())

        return (
            <>
                <div className="w3l-about py-5">
                    <div className="container py-lg-3">
                        <div className="row about-content mb-lg-5">
                            <div className="col-lg-6 pr-md-5">
                                <div className="image-block">
                                    <img src={aboutImage} className="img-fluid myphoto" alt="me" />
                                    <img src="assets/images/cross.png" className="img-fluid pos" alt="dots" />
                                </div>
                            </div>
                            <div className="col-lg-6 info pl-lg-5 mt-lg-0 mt-5 pt-lg-0 pt-3 align-center">
                                <h4 className="">I’m {data.name}</h4>
                                <p className="mt-md-4 mt-3 mb-0">{data.about_me}</p>
                                <p className="mt-md-4 mt-3 mb-0" style={{ "font-family": "Dancing Script", "font-size": "40px", "font-weight": "bold" }}>{data.name}</p>
                                <br></br>
                                <p className="m-0 mb-2">{data.name}</p>
                                <h6>{new Date(data.dob).toLocaleDateString()}</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="w3l-stats py-lg-5 py-4" id="stats">
                    <div className="gallery-inner container py-md-5 py-4">
                        <div className="row stats-con text-white">
                            {this.counter.map(counter => {
                                return (
                                    <>
                                        <div className="col-sm-3 col-6 stats_info counter_grid">
                                            <span className={counter.icon}></span>
                                            <p className="counter">{counter.count}</p>
                                            <h4>{counter.name}</h4>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="w3l-about-bottom py-5" id="about">
                    <div className="container py-lg-5 py-md-3">
                        <div className="row middle-grids">
                            <div className="col-lg-7 advantage-grid-info">
                                <div className="advantage_left">
                                    <h4>About my profile </h4>
                                    <p className="mb-3">{data.about_my_profile}</p>
                                    <a href={resume} target="_blank" rel="noreferrer" className="btn-style btn-primary btn mt-lg-5 mt-4">Download CV</a>
                                    <Link to="/contact" className="btn-style btn-secondary btn mt-lg-5 mt-4 ml-1">Hire Me</Link>
                                </div>
                            </div>
                            <div className="col-lg-5 advantage-grid-info1">
                                <div className="advantage_left1 mt-lg-0 mt-5">
                                    <img src={aboutMyProfile} className="img img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- //about my profile --> */}

                {/* <!-- skills and hobbies --> */}
                <div className="w3l-skills py-5" id="skills">
                    <div className="container py-lg-5 py-md-3">
                        <div className="modal-spa">
                            <div className="row skills">
                                <div className="col-lg-6 bar-grids bargrids-left">
                                    <h4> My Skills </h4>
                                    {data.skills_and_percentage.map(skill => {
                                        return (
                                            <>
                                                <h6>{skill.name} <span> {skill.percentage}% </span></h6>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped active" style={{ width: skill.percentage + '%' }}>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                                <div className="col-lg-6 bar-grids w3-bar-grids mt-lg-0 mt-5">
                                    <h4> My Hobbies </h4>
                                    <div className="row pl-lg-5 pr-lg-5">
                                        {data.hobbies.split(',').map((hobbies, key) => {
                                            return (
                                                <>
                                                    <div className="col-4 hobbies-grid1 grid1">
                                                        <div className="icon-bg">
                                                            <span className={"fa fa-" + icon[key]}></span>
                                                        </div>
                                                        <h5>{hobbies}</h5>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- //skills and hobbies --> */}
            </>
        );

    }
}

About.contextType = profileContext;

export default About;