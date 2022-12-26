import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <>
            {/* <!-- blog with slider --> */}
            <section class="blog-slider py-5" id="blog">
                <div class="container py-lg-4">
                    <div class="title-section">
                        <h3 class="main-title-w3">Blog Posts</h3>
                        <div class="title-line">
                        </div>
                        <h5>I Write beautiful things and stories.</h5>
                    </div>
                    <div class="inner-sec-w3layouts mt-md-5 mt-4">
                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <div class="content-left-sec">
                                    <Link class="blog-link" to="single"><img src="assets/images/1.jpg" class="img img-fluid" alt=""/></Link>
                                    <Link to="single">
                                        <h4 class="mt-4 mb-0">Blog post title 1</h4>
                                    </Link>
                                    <h6 class="mt-sm-2 mt-1">Dec 6th, 2019</h6>
                                    <a href="#category" class="category">- Personal</a>
                                    <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-left-sec">
                                    <Link class="blog-link" to="single"><img src="assets/images/2.jpg" class="img img-fluid" alt=""/></Link>
                                    <Link to="single">
                                        <h4 class="mt-4 mb-0">Blog post title 2</h4>
                                    </Link>
                                    <h6 class="mt-sm-2 mt-1">Dec 7th, 2019</h6>
                                    <a href="#category" class="category">- Personal</a>
                                    <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-left-sec">
                                    <Link class="blog-link" to="single"><img src="assets/images/3.jpg" class="img img-fluid" alt=""/></Link>
                                    <Link to="single">
                                        <h4 class="mt-4 mb-0">Blog post title 3</h4>
                                    </Link>
                                    <h6 class="mt-sm-2 mt-1">Dec 8th, 2019</h6>
                                    <a href="#category" class="category">- Personal</a>
                                    <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-left-sec">
                                    <Link class="blog-link" to="single"><img src="assets/images/4.jpg" class="img img-fluid" alt=""/></Link>
                                    <Link to="single">
                                        <h4 class="mt-4 mb-0">Blog post title 4</h4>
                                    </Link>
                                    <h6 class="mt-sm-2 mt-1">Dec 9th, 2019.</h6>
                                    <a href="#category" class="category">Personal</a>
                                    <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-left-sec">
                                    <Link class="blog-link" to="single"><img src="assets/images/1.jpg" class="img img-fluid" alt=""/></Link>
                                    <Link to="single">
                                        <h4 class="mt-4 mb-0">Blog post title 5</h4>
                                    </Link>
                                    <h6 class="mt-sm-2 mt-1">Dec 10th, 2019.</h6>
                                    <a href="#category" class="category">Personal</a>
                                    <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-left-sec">
                                    <Link class="blog-link" to="single"><img src="assets/images/2.jpg" class="img img-fluid" alt=""/></Link>
                                    <Link to="single">
                                        <h4 class="mt-4 mb-0">Blog post title 6</h4>
                                    </Link>
                                    <h6 class="mt-sm-2 mt-1">Dec 11th, 2019.</h6>
                                    <a href="#category" class="category">Personal</a>
                                    <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-left-sec">
                                    <Link class="blog-link" to="single"><img src="assets/images/3.jpg" class="img img-fluid" alt=""/></Link>
                                    <Link to="single">
                                        <h4 class="mt-4 mb-0">Blog post title 7</h4>
                                    </Link>
                                    <h6 class="mt-sm-2 mt-1">Dec 12th, 2019.</h6>
                                    <a href="#category" class="category">Personal</a>
                                    <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                        orci a.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //blog with slider --> */}

            {/* <!-- blog 3 grids --> */}
            <section class="content-with-photo-15 py-5">
                <div class="content-photo py-lg-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 content-left-sec">
                                <Link class="blog-link" to="single"><img src="assets/images/1.jpg" class="img img-fluid" alt=""/></Link>
                                <Link to="single">
                                    <h4 class="mt-4 mb-0">Blog post title 1</h4>
                                </Link>
                                <h6 class="mt-sm-2 mt-1">Dec 6th, 2019</h6>
                                <a href="#category" class="category">- Personal</a>
                                <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                    orci a.</p>
                            </div>
                            <div class="col-lg-4 col-md-6 content-left-sec mt-md-0 mt-5">
                                <Link class="blog-link" to="single"><img src="assets/images/2.jpg" class="img img-fluid" alt=""/></Link>
                                <Link to="single">
                                    <h4 class="mt-4 mb-0">Blog post title 2</h4>
                                </Link>
                                <h6 class="mt-sm-2 mt-1">Dec 6th, 2019</h6>
                                <a href="#category" class="category">- Portfolio</a>
                                <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                    dolor.</p>
                            </div>
                            <div class="col-lg-4 col-md-6 content-left-sec mt-lg-0 mt-md-5 mt-5">
                                <Link class="blog-link" to="single"><img src="assets/images/3.jpg" class="img img-fluid" alt=""/></Link>
                                <Link to="single">
                                    <h4 class="mt-4 mb-0">Blog post title 3</h4>
                                </Link>
                                <h6 class="mt-sm-2 mt-1">Dec 6th, 2019</h6>
                                <a href="#category" class="category">- Category</a>
                                <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra orci a.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //blog 3 grids --> */}

            {/* <!-- blog full with image post --> */}
            <div class="multi-post py-5">
                <div class="full-width-image-post py-lg-4">
                    <div class="container mx-auto">
                        <div class="content-left-sec">
                            <Link class="blog-link" to="single">
                                <img src="assets/images/g1.jpg" class="img img-fluid" alt="full width" />
                            </Link>
                        </div>
                        <div class="full-width-image-post-content mt-4">
                            <Link to="single">
                                <h4 class="mt-2 mb-0">Full width image Blog post title</h4>
                            </Link>
                            <h6 class="mt-sm-2 mt-1">Dec 6th, 2019</h6>
                            <a href="#category" class="category">- Uncategorized</a>
                            <p class="mb-0 mt-2">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra orci
                                condimentum a.
                                Quisque nibh tortor, mollis placerat semper ac, auctor quis mauris. Praesent dignissim sed
                                magna eu urna consectetur, at pretium nisi aliquet. Sed vestibulum malesuada semper.</p>
                            <Link to="single" class="btn-primary btn mt-md-5 mt-4 btn-style">Read More</Link>
                        </div>
                    </div>
                    <div class="text-image-post">
                    </div>
                </div>
            </div>
            {/* <!-- //blog full with image post --> */}

            {/* <!-- image and text blog grids --> */}
            <section class="content-with-photo-15 py-5">
                <div class="content-photo py-lg-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 content-left-sec">
                                <Link class="blog-link" to="single"><img src="assets/images/1.jpg" class="img img-fluid" alt=""/></Link>
                            </div>
                            <div class="col-lg-6 content-left-sec">
                                <Link to="single">
                                    <h4 class="mt-4 mb-0">Blog Post title</h4>
                                </Link>
                                <h6 class="mt-sm-2 mt-1">Dec 6th, 2019.</h6>
                                <a href="#category" class="category">Portfolio</a>
                                <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                    dolor. id viverra orci condimentum a. Donec luctus rhoncus dignissim. Integer blandit mattis
                                    arcu,
                                    Quisque nibh tortor, mollis placerat semper ac, auctor quis mauris. Praesent dignissim sed
                                    magna eu urna consectetur, at pretium nisi aliquet. Sed malesuada semper</p>
                                <Link to="single" class="btn-primary btn mt-lg-5 mt-4 btn-style">Read More</Link>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-lg-6 content-left-sec info-order">
                                <Link to="single">
                                    <h4 class="mt-4 mb-0">Blog post title</h4>
                                </Link>
                                <h6 class="mt-sm-2 mt-1">Dec 6th, 2019.</h6>
                                <a href="#category" class="category">Portfolio</a>
                                <p class="mt-2 mb-0">Donec luctus rhoncus dignissim. Integer blandit mattis arcu, id viverra
                                    dolor. id viverra orci condimentum a. Donec luctus rhoncus dignissim. Integer blandit mattis
                                    arcu,
                                    Quisque nibh tortor, mollis placerat semper ac, auctor quis mauris. Praesent dignissim sed
                                    magna eu urna consectetur, at pretium nisi aliquet. Sed malesuada semper</p>
                                <Link to="single" class="btn-primary btn mt-lg-5 mt-4 btn-style">Read More</Link>
                            </div>
                            <div class="col-lg-6 content-left-sec img-order">
                                <Link class="blog-link" to="single"><img src="assets/images/4.jpg" class="img img-fluid" alt=""/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- image and text blog grids --> */}
        </>
    );
};

export default Blog;