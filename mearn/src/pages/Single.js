const Single = () => {
    return (
        <>
            {/* <!-- single post --> */}
            <section className="text-11 py-5">
                <div className="text11 py-lg-5 py-md-3">
                    <div className="container">
                        <div className="text11-content">
                            <div className="text-center">
                                <h4 className="">Background decoration design</h4>
                                <h6>January 28th, 2020</h6>
                                <a href="#category" className="category">- Design</a>
                            </div>
                            <img src="assets/images/blog.jpg" className="img-fluid my-4" alt="" />
                            <p>Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum, luctus
                                justo. ac purus semper. Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus
                                arcu elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo efficitur elementum.
                                Donec ipsum faucibus arcu elementum, luctus justo. ac purus semper.</p>
                            <p>Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum, luctus
                                justo. ac purus semper. Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus
                                arcu elementum, luctus justo. ac purus semper."</p>
                            <h5 className="quote">Lorem faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus arcu
                                elementum nec purus quis tempor.</h5>
                            <p>Lorem faucibus fusce ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum,
                                luctus
                                justo. ac purus semper. Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus.
                                Donec ipsum faucibus arcu elementum. Donec ipsum faucibus arcu elementum, luctus justo. ac purus
                                semper. Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum,
                                luctus justo. ac purus semper.</p>
                            <div className="social-share-blog mt-5">
                                <ul className="social m-0 p-0">
                                    <li>
                                        <p className="m-0"><b>Share this post :</b></p>
                                    </li>
                                    <li><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
                                    <li><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                                    <li><a href="#google"><span className="fa fa-google-plus"></span></a></li>
                                    <li><a href="#linkedin"><span className="fa fa-linkedin"></span></a></li>
                                </ul>
                            </div>
                            <div className="comments">
                                <h3 className="aside-title ">Recent comments</h3>
                                <div className="comments-grids">
                                    <div className="media-grid">
                                        <div className="media">
                                            <a className="" href="#"><img src="assets/images/client1.jpg" className="img-responsive" width="100px"
                                                alt="placeholders"/></a>
                                            <div className="media-body comments-grid-right">
                                                <h5>Jack Harry</h5>
                                                <ul className="p-0">
                                                    <li className="">Decemner 6th, 2019.
                                                    </li>
                                                </ul>
                                                <p>Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis
                                                    tempor. Phasellus ipsum bibendum eu nec purus quis tempor dolor set.</p>
                                                <ul className="p-0 mb-0 mt-3">
                                                    <li>
                                                        <a href="#comment" className="editContent">Reply</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-grid even-grid">
                                        <div className="media">
                                            <a className="" href="#"><img src="assets/images/client2.jpg" className="img-responsive" width="100px"
                                                alt="placeholder"/></a>
                                            <div className="media-body comments-grid-right">
                                                <h5>Charlie</h5>
                                                <ul className="p-0">
                                                    <li className="">Decemner 7th, 2019.
                                                    </li>
                                                </ul>
                                                <p>Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis
                                                    tempor. Phasellus eu nec purus quis tempor.
                                                </p>
                                                <ul className="p-0 mb-0 mt-3">
                                                    <li>
                                                        <a href="#comment" className="editContent">Reply</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-grid">
                                        <div className="media">
                                            <a className="" href="!#">
                                                <img src="assets/images/client3.jpg" className="img-responsive" width="100px" alt="placeholder client"/></a>
                                            <div className="media-body comments-grid-right">
                                                <h5>Jack Harry</h5>
                                                <ul className="p-0">
                                                    <li className="">Decemner 6th, 2019.
                                                    </li>
                                                </ul>
                                                <p>Mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis
                                                    tempor. Phasellus ipsum bibendum eu nec purus quis tempor.</p>
                                                <ul className="p-0 mb-0 mt-3">
                                                    <li>
                                                        <a href="#comment" className="editContent">Reply</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="leave-comment-form" id="comment">
                                <h3 className="aside-title">Leave a reply</h3>
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <textarea name="Comment" className="form-control" placeholder="Your Comment" required=""></textarea>
                                    </div>
                                    <div className="input-grids">
                                        <div className="form-group">
                                            <input type="text" name="Name" className="form-control" placeholder="Your Name" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="Email" className="form-control" placeholder="Email" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Email" className="form-control" placeholder="URL" required=""/>
                                        </div>
                                    </div>
                                    <div className="submit text-right">
                                        <button className="btn btn-primary btn-style">Post Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //single post --> */}
        </>
    );
};

export default Single;