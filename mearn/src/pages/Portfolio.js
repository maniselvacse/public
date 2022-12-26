import React from "react";
import { Link } from "react-router-dom";
class Portfolio extends React.Component {
    render() {
    return (
            <section className="w3-gallery py-5" id="portfolio">
                <div className="container py-lg-3">
                    <div className="title-section">
                        <h3 className="main-title-w3">Portfolio</h3>
                        <div className="title-line">
                        </div>
                        <h5>A few recent design and coding projects. want to see more?
                            <Link to="/contact"> Email Me.</Link>
                        </h5>
                    </div>
                    <ul className="portfolio-categ filter my-md-5 my-4 p-0">
                        <li className="port-filter all active">
                            <a href="#">Show All</a>
                        </li>
                        <li className="cat-item-1">
                            <a href="#" title="Category 1">Architecture</a>
                        </li>
                        <li className="cat-item-2">
                            <a href="#" title="Category 2">Web Design</a>
                        </li>
                        <li className="cat-item-3">
                            <a href="#" title="Category 3">Creative</a>
                        </li>
                        <li className="cat-item-4">
                            <a href="#" title="Category 4">Portfolio</a>
                        </li>
                    </ul>
                    <ul className="portfolio-area clearfix p-0 m-0">
                        <li className="portfolio-item2 content" data-id="id-1" data-type="cat-item-1">
                            <span className="image-block">
                                <a className="image-zoom" href="assets/images/p1.jpg" data-gal="prettyPhoto[gallery]">
                                    <img src="assets/images/p1.jpg" className="img-fluid project-img" alt="portfolio-img"/>
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-top">
                                            <h3 className="content-title">My Portfolio</h3>
                                            <p className="content-text">Project description</p>
                                        </div>
                                </a>
                            </span>
                        </li>
                        <li className="portfolio-item2 content" data-id="id-2" data-type="cat-item-2">
                            <span className="image-block">
                                <a className="image-zoom" href="assets/images/p2.jpg" data-gal="prettyPhoto[gallery]">
                                    <img src="assets/images/p2.jpg" className="img-fluid project-img" alt="portfolio-img"/>
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-left">
                                            <h3 className="content-title">My Portfolio</h3>
                                            <p className="content-text">Project description</p>
                                        </div>
                                </a>
                            </span>
                        </li>
                        <li className="portfolio-item2 content" data-id="id-3" data-type="cat-item-1">
                            <span className="image-block">
                                <a className="image-zoom" href="assets/images/p3.jpg" data-gal="prettyPhoto[gallery]">
                                    <img src="assets/images/p3.jpg" className="img-fluid project-img" alt="portfolio-img"/>
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">My Portfolio</h3>
                                            <p className="content-text">Project description</p>
                                        </div>
                                </a>
                            </span>
                        </li>
                        <li className="portfolio-item2 content" data-id="id-4" data-type="cat-item-3">
                            <span className="image-block">
                                <a className="image-zoom" href="assets/images/p4.jpg" data-gal="prettyPhoto[gallery]">
                                    <img src="assets/images/p4.jpg" className="img-fluid project-img" alt="portfolio-img"/>
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-top">
                                            <h3 className="content-title">My Portfolio</h3>
                                            <p className="content-text">Project description</p>
                                        </div>
                                </a>
                            </span>
                        </li>
                        <li className="portfolio-item2 content" data-id="id-5" data-type="cat-item-4">
                            <span className="image-block">
                                <a className="image-zoom" href="assets/images/p5.jpg" data-gal="prettyPhoto[gallery]">
                                    <img src="assets/images/p5.jpg" className="img-fluid project-img" alt="portfolio-img"/>
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-left">
                                            <h3 className="content-title">My Portfolio</h3>
                                            <p className="content-text">Project description</p>
                                        </div>
                                </a>
                            </span>
                        </li>
                        <li className="portfolio-item2 content" data-id="id-7" data-type="cat-item-3">
                            <span className="image-block">
                                <a className="image-zoom" href="assets/images/p6.jpg" data-gal="prettyPhoto[gallery]">
                                    <img src="assets/images/p6.jpg" className="img-fluid project-img" alt="portfolio-img"/>
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">My Portfolio</h3>
                                            <p className="content-text">Project description</p>
                                        </div>
                                </a>
                            </span>
                        </li>
                        <li className="portfolio-item2 content" data-id="id-4" data-type="cat-item-3">
                            <span className="image-block">
                                <a className="image-zoom" href="assets/images/p7.jpg" data-gal="prettyPhoto[gallery]">
                                    <img src="assets/images/p7.jpg" className="img-fluid project-img" alt="portfolio-img"/>
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-top">
                                            <h3 className="content-title">My Portfolio</h3>
                                            <p className="content-text">Project description</p>
                                        </div>
                                </a>
                            </span>
                        </li>
                        <li className="portfolio-item2 content" data-id="id-5" data-type="cat-item-4">
                            <span className="image-block">
                                <a className="image-zoom" href="assets/images/p8.jpg" data-gal="prettyPhoto[gallery]">
                                    <img src="assets/images/p8.jpg" className="img-fluid project-img" alt="portfolio-img"/>
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-left">
                                            <h3 className="content-title">My Portfolio</h3>
                                            <p className="content-text">Project description</p>
                                        </div>
                                </a>
                            </span>
                        </li>
                        <li className="portfolio-item2 content" data-id="id-7" data-type="cat-item-3">
                            <span className="image-block">
                                <a className="image-zoom" href="assets/images/p1.jpg" data-gal="prettyPhoto[gallery]">
                                    <img src="assets/images/p1.jpg" className="img-fluid project-img" alt="portfolio-img"/>
                                        <div className="content-overlay"></div>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">My Portfolio</h3>
                                            <p className="content-text">Project description</p>
                                        </div>
                                </a>
                            </span>
                        </li>
                        <div className="clear"></div>
                    </ul>
                    {/* <!--end portfolio-area --> */}
                </div>
                {/* <!-- //gallery container --> */}
            </section>
      );
    }
}
export default Portfolio;