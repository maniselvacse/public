import { Link } from "react-router-dom";

const LandingSingle = () => {
    return (
        <>
            {/* <!--  Main banner section --> */}
            <section className="w3l-main-banner">
                <div className="banner-view">
                    <div className="banner-info container">
                        <h3 className="banner-text"><small>Hello, I'm </small>
                            Johnson smith
                        </h3>
                        <p className="mt-3 mb-5"> I love to work in User Experience & User Interface designing. Because I love to
                            solve the design problem and find easy and
                            better solutions to solve it. I always try my best to make good user interface with the best user
                            experience.</p><br/>
                            <Link to="/portfolio" className="btn btn-light btn-style mr-3">My Work</Link>
                            <Link to="/about" className="btn btn-outline-light btn-style">Hire Me</Link>
                    </div>
                </div>

                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </section>
            {/* <!--  //Main banner section --> */}

            {/* <!-- w3l-content-photo-5 --> */}
            <div className="w3l-content-photo-5 py-5" id="about">
                <div className="content-main pt-lg-5 pt-md-3 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 content-photo">
                                <a href="#"><img src="assets/images/myimage.jpg" className="img-fluid" alt="content-photo"/></a>
                            </div>
                            <div className="col-lg-8 content-left mt-lg-0 mt-5 ">
                                <h3>I'm a Passionate designer & developer who loves simplicity in things and crafts beautiful
                                    user interfaces with love.</h3>
                                <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet non porro
                                    laboriosam rerum fugiat quod ullam earum
                                    dignissimos corporis, nemo provident nostrum, nihil culpa. Et corrupti sit hic amet, animi
                                    unde cumque consequuntur omnis ad nihil optio
                                    id eum qui, impedit deleniti? Veniam eum aspernatur incidunt? Doloremque, cum? Repellendus
                                    consectetur, cupiditate tenetur provident
                                    neque, quas, totam eveniet nisi eius veritatis ea maiores ducimus a reprehenderit minima
                                    magnam dicta! Aliquam libero voluptatum facilis
                                    dolorum architecto? Doloribus fuga voluptate voluptatem corporis rem! Culpa nam et accusamus
                                    beatae!</p>
                                <Link to="/about" className="btn-style btn-primary btn mt-lg-5 mt-4">About Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- //w3l-content-photo-5 --> */}

            {/* <!-- skills and hobbies --> */}
            <div className="w3l-skills py-5" id="skills">
                <div className="container py-lg-5 py-md-3">
                    <div className="modal-spa">
                        <div className="row skills">
                            <div className="col-lg-6 bar-grids bargrids-left">
                                <h4> My Skills </h4>
                                <h6>web design <span> 80% </span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped active editContent" style={{"width": "80%"}}>
                                    </div>
                                </div>
                                <h6>ui design & developer <span> 70% </span></h6>
                                <div className="progress  w3-bar-grids">
                                    <div className="progress-bar progress-bar-striped active" style={{"width": "70%"}}>
                                    </div>
                                </div>
                                <h6>Javascript<span>90% </span></h6>
                                <div className="progress  w3-bar-grids">
                                    <div className="progress-bar progress-bar-striped active" style={{"width": "90%"}}>
                                    </div>
                                </div>
                                <h6>Photoshop <span> 75% </span></h6>
                                <div className="progress  w3-bar-grids prgs-w3-last">
                                    <div className="progress-bar progress-bar-striped active" style={{"width": "70%"}}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 bar-grids w3-bar-grids mt-lg-0 mt-5">
                                <h4> My Hobbies </h4>
                                <div className="row pl-lg-5 pr-lg-5">
                                    <div className="col-4 hobbies-grid1 grid1">
                                        <div className="icon-bg">
                                            <span className="fa fa-codepen"></span>
                                        </div>
                                        <h5>Coding</h5>
                                    </div>
                                    <div className="col-4 hobbies-grid1 grid2">
                                        <div className="icon-bg">
                                            <span className="fa fa-hourglass"></span>
                                        </div>
                                        <h5>Research</h5>
                                    </div>
                                    <div className="col-4 hobbies-grid1 grid3">
                                        <div className="icon-bg">
                                            <span className="fa fa-camera"></span>
                                        </div>
                                        <h5>Photography</h5>
                                    </div>
                                    <div className="col-4 hobbies-grid1 grid4">
                                        <div className="icon-bg">
                                            <span className="fa fa-plane"></span>
                                        </div>
                                        <h5>Travelling</h5>
                                    </div>
                                    <div className="col-4 hobbies-grid1 grid5">
                                        <div className="icon-bg">
                                            <span className="fa fa-headphones"></span>
                                        </div>
                                        <h5>Music</h5>
                                    </div>
                                    <div className="col-4 hobbies-grid1 grid6">
                                        <div className="icon-bg">
                                            <span className="fa fa-tint"></span>
                                        </div>
                                        <h5>Thinking</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- //skills and hobbies --> */}

            {/* <!-- stats --> */}
            <section className="w3l-stats py-lg-5 py-4" id="stats">
                <div className="gallery-inner container py-md-5 py-4">
                    <div className="row stats-con text-white">
                        <div className="col-sm-3 col-6 stats_info counter_grid">
                            <span className="fa fa-lightbulb-o"></span>
                            <p className="counter">645</p>
                            <h4>Projects Done</h4>
                        </div>
                        <div className="col-sm-3 col-6 stats_info counter_grid1">
                            <span className="fa fa-heart"></span>
                            <p className="counter">563</p>
                            <h4>Satisfied Clients</h4>
                        </div>
                        <div className="col-sm-3 col-6 stats_info counter_grid mt-sm-0 mt-5">
                            <span className="fa fa-magic"></span>
                            <p className="counter">1145</p>
                            <h4>Awards</h4>
                        </div>
                        <div className="col-sm-3 col-6 stats_info counter_grid2 mt-sm-0 mt-5">
                            <span className="fa fa-smile-o"></span>
                            <p className="counter">1045</p>
                            <h4>Happy Clients</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //stats --> */}
            {/* <!-- services block1 --> */}
            <div className="w3-services py-5" id="services">
                <div className="container py-lg-3">
                    <div className="title-section">
                        <h3 className="main-title-w3">My Services</h3>
                        <div className="title-line">
                        </div>
                    </div>
                    <div className="row w3-services-grids mt-lg-5 mt-4">
                        <div className="col-lg-5 w3-services-left-grid">
                            <h4>What i do</h4>
                            <p>Lorem ipsum dolor sit amet, init sed adipisci ngelit. In a et euismod faucibus quam, a sodales er
                                osplacerat vitae. Sed pretium fermentum luctus.Cras sodales nisl vitae dolor facilisis dapibus.
                                Integer consectetur in velit eget viverra. Quisque vulputate a nisi blandit molestie. Aenean sit
                                amet consequat risus, eget egestas est.Nullam eu turpis diam. Ut ac erat vestibulum, laoreet ex
                                faucibus, iaculis ex. Donec at dolor volutpat, laoreet nisi. </p>
                            <div className="more">
                                <a href="#more" className="btn-primary btn btn-style mt-lg-5 mt-4">Know more</a>
                            </div>
                        </div>
                        <div className="col-lg-7 w3-services-right-grid mt-lg-0 mt-5 pl-lg-5">
                            <div className="row w3-icon-grid-gap1">
                                <div className="col-md-6 col-sm-6 w3-icon-grid1">
                                    <a href="#link">
                                        <span className="fa fa-codepen editContent" aria-hidden="true"></span>
                                        <h3>Web design</h3>
                                        <div className="clearfix"></div>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, init sed adipisci ngelit. In euismod faucibus.</p>
                                </div>
                                <div className="col-md-6 col-sm-6 w3-icon-grid1">
                                    <a href="#link">
                                        <span className="fa fa-mobile editContent" aria-hidden="true"></span>
                                        <h3>Mobile Apps</h3>
                                        <div className="clearfix"></div>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, init sed adipisci ngelit. In euismod faucibus.</p>
                                </div>
                                <div className="col-md-6 col-sm-6 w3-icon-grid1">
                                    <a href="#link">
                                        <span className="fa fa-hourglass editContent" aria-hidden="true"></span>
                                        <h3>Animation</h3>
                                        <div className="clearfix"></div>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, init sed adipisci ngelit. In euismod faucibus.</p>
                                </div>
                                <div className="col-md-6 col-sm-6 w3-icon-grid1">
                                    <a href="#link">
                                        <span className="fa fa-modx editContent" aria-hidden="true"></span>
                                        <h3>Photoshop</h3>
                                        <div className="clearfix"></div>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, init sed adipisci ngelit. In euismod faucibus.</p>
                                </div>
                                <div className="col-md-6 col-sm-6 w3-icon-grid1">
                                    <a href="#link">
                                        <span className="fa fa-bar-chart editContent" aria-hidden="true"></span>
                                        <h3>Marketing</h3>
                                        <div className="clearfix"></div>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, init sed adipisci ngelit. In euismod faucibus.</p>
                                </div>
                                <div className="col-md-6 col-sm-6 w3-icon-grid1">
                                    <a href="#link">
                                        <span className="fa fa-shopping-bag editContent" aria-hidden="true"></span>
                                        <h3>Development</h3>
                                        <div className="clearfix"></div>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, init sed adipisci ngelit. In euismod faucibus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- //services block1 --> */}

            {/* <!-- services block 2 --> */}
            <div className="w3l-services-block py-5" id="classes">
                <div className="container py-lg-5 py-md-3">
                    <div className="services-block_grids_bottom">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 service_grid_btm_left">
                                <div className="service_grid_btm_left1">
                                    <div className="service_grid_btm_left2">
                                        <span className="fa fa-desktop editContent" aria-hidden="true"></span>
                                        <h5>web development</h5>
                                        <p>Maecenas sodales eu velit in varius. vitae sem vitae urna tempus commodo.</p>
                                    </div>
                                    <img src="assets/images/1.jpg" alt=" " className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 service_grid_btm_left mt-md-0 mt-sm-5 mt-4">
                                <div className="service_grid_btm_left1">
                                    <div className="service_grid_btm_left2">
                                        <span className="fa fa-camera-retro editContent" aria-hidden="true"></span>
                                        <h5>Photography</h5>
                                        <p>Maecenas sodales eu velit in varius. vitae sem vitae urna tempus commodo.</p>
                                    </div>
                                    <img src="assets/images/2.jpg" alt=" " className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 service_grid_btm_left mt-lg-0 mt-sm-5 mt-4">
                                <div className="service_grid_btm_left1">
                                    <div className="service_grid_btm_left2">
                                        <span className="fa fa-apple editContent" aria-hidden="true"></span>
                                        <h5>Apps development</h5>
                                        <p>Maecenas sodales eu velit in varius. vitae sem vitae urna tempus commodo.</p>
                                    </div>
                                    <img src="assets/images/3.jpg" alt=" " className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- // services block2 --> */}

            {/* <!-- portfolio --> */}
            <section className="w3-gallery py-5" id="portfolio">
                <div className="container py-lg-3">
                    <div className="title-section">
                        <h3 className="main-title-w3">Portfolio</h3>
                        <div className="title-line">
                        </div>
                        <h5>A few recent design and coding projects. want to see more? <Link to="/contact">Email Me.</Link>
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
            {/* <!-- //portfolio --> */}
            {/* <!-- testimonial --> */}
            <section className="w3l-quote-main" id="client">
                <div className="quote py-5">
                    <div className="container py-lg-5">
                        <div className="row">
                            <div className="col-lg-9">
                                <h4>" There are many variations of passages of Lorem Ipsum available, randomised words which
                                    don't look even slightly believable.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed dignissimos explicabo
                                    facilis incidunt maiores eos "</h4>
                            </div>
                            <div className="col-lg-3 mt-lg-0 mt-3 text-lg-center tablet-grid">
                                <img src="assets/images/client1.jpg" alt="" className="img-fluid" />
                                <div>
                                    <h6 className="mb-0 mt-lg-3">christopher robin</h6>
                                    <h5 className="mt-1">- UI/UX Designer </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //testimonial --> */}

            {/* <!-- blog with slider --> */}
            <section className="blog-slider py-5" id="blog">
                <div className="container py-lg-4">
                    <div className="title-section">
                        <h3 className="main-title-w3">Blog Posts</h3>
                        <div className="title-line">
                        </div>
                        <h5>I Write beautiful things and stories.</h5>
                    </div>
                    <div className="inner-sec-w3layouts mt-md-5 mt-4">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="content-left-sec">
                                    <a className="blog-link" href="single"><img src="assets/images/1.jpg" className="img img-fluid"
                                        alt=""/></a>
                                    <Link to="/single">
                                        <h4 className="mt-4 mb-0">Blog post title 1</h4>
                                    </Link>
                                    <h6 className="mt-sm-2 mt-1">Dec 6th, 2019</h6>
                                    <a href="#category" className="category">- Personal</a>
                                    <p className="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content-left-sec">
                                    <Link className="blog-link" to="/single"><img src="assets/images/2.jpg" className="img img-fluid"
                                        alt=""/></Link>
                                    <Link to="/single">
                                        <h4 className="mt-4 mb-0">Blog post title 2</h4>
                                    </Link>
                                    <h6 className="mt-sm-2 mt-1">Dec 7th, 2019</h6>
                                    <a href="#category" className="category">- Personal</a>
                                    <p className="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content-left-sec">
                                    <Link className="blog-link" to="/single"><img src="assets/images/3.jpg" className="img img-fluid"
                                        alt=""/></Link>
                                    <Link to="/single">
                                        <h4 className="mt-4 mb-0">Blog post title 3</h4>
                                    </Link>
                                    <h6 className="mt-sm-2 mt-1">Dec 8th, 2019</h6>
                                    <a href="#category" className="category">- Personal</a>
                                    <p className="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content-left-sec">
                                    <Link className="blog-link" to="/single"><img src="assets/images/4.jpg" className="img img-fluid"
                                        alt=""/></Link>
                                    <Link to="/single">
                                        <h4 className="mt-4 mb-0">Blog post title 4</h4>
                                    </Link>
                                    <h6 className="mt-sm-2 mt-1">Dec 9th, 2019.</h6>
                                    <a href="#category" className="category">Personal</a>
                                    <p className="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content-left-sec">
                                    <a className="blog-link" href="single"><img src="assets/images/1.jpg" className="img img-fluid"
                                        alt=""/></a>
                                    <Link to="/single">
                                        <h4 className="mt-4 mb-0">Blog post title 5</h4>
                                    </Link>
                                    <h6 className="mt-sm-2 mt-1">Dec 10th, 2019.</h6>
                                    <a href="#category" className="category">Personal</a>
                                    <p className="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content-left-sec">
                                    <Link className="blog-link" to="/single"><img src="assets/images/2.jpg" className="img img-fluid"
                                        alt=""/></Link>
                                    <Link to="/single">
                                        <h4 className="mt-4 mb-0">Blog post title 6</h4>
                                    </Link>
                                    <h6 className="mt-sm-2 mt-1">Dec 11th, 2019.</h6>
                                    <a href="#category" className="category">Personal</a>
                                    <p className="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content-left-sec">
                                    <Link className="blog-link" to="/single"><img src="assets/images/3.jpg" className="img img-fluid"
                                        alt=""/></Link>
                                    <Link to="/single">
                                        <h4 className="mt-4 mb-0">Blog post title 7</h4>
                                    </Link>
                                    <h6 className="mt-sm-2 mt-1">Dec 12th, 2019.</h6>
                                    <a href="#category" className="category">Personal</a>
                                    <p className="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //blog with slider --> */}
            {/* <!-- freelance hire me --> */}
            <section className="w3l-grid-quote py-5">
                <div className="container py-lg-3">
                    <h6>I'am available for freelance projects.</h6>
                    <h3>Let's work together indeed!</h3>
                    <Link to="/contact" className="btn-style btn-primary btn">Get quotes</Link>
                    <Link to="/contact" className="btn btn-style btn-light ml-2">Hire me</Link>
                </div>
            </section>
            {/* <!-- //freelance hire me --> */}

            {/* <!-- contact form --> */}
            <section className="w3l-contacts-12 py-5" id="contact">
                <div className="container py-md-3">
                    <div className="contacts12-main">
                        <div className="title-section">
                            <h3 className="main-title-w3 mb-md-5 mb-4">Want to get in touch? <br/>Find me on
                                <a href="tel:+12-331-456-789" className="editContent">phone</a>,
                                <a href="mailto:mymail@mail.com" className="editContent">email</a>,
                                <a href="#twitter" className="editContent">twitter</a>
                                or <a href="#linkedin" className="editContent">linkedin</a>.
                            </h3>
                        </div>
                        <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="">
                            <div className="main-input">
                                <input type="text" name="w3lName" placeholder="Enter your name" className="contact-input"
                                    required="" />
                                <input type="email" name="w3lSender" placeholder="Enter your mail" className="contact-input"
                                    required="" />
                                <input type="email" name="w3lSubject" placeholder="Subject" className="contact-input" />
                                <textarea className="contact-textarea contact-input" name="w3lMessage"
                                    placeholder="Enter your message" required=""></textarea>
                            </div>
                            <div className="text-right">
                                <button className="btn-primary btn btn-style">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- //contact form --> */}
        </>
    );
};

export default LandingSingle;