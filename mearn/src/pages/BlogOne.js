import { Link } from "react-router-dom";

const BlogOne = () => {
    return (
        <>
            {/* <!-- image project --> */}
            <section class="text-11 py-5">
                <div class="text11 py-lg-5 py-md-3">
                    <div class="container">
                        <div class="text11-content">
                            <div class="text-left">
                                <h4 class="text-left">Background creativity decoration design</h4>
                                <span>UI/UX Designer and developer</span>
                                <h6>Exterior design Website</h6>
                                <p class="font-italic mt-2 mb-0">Fusce faucibus ante vitae just. Donec ipsum faucibus arcu
                                    elementum, luctus justo.</p>
                            </div>
                            <Link to="single"><img src="assets/images/blog.jpg" class="img-fluid mt-md-5 mt-3 mb-lg-4 mb-3"
                                alt="" /></Link>
                            <h5 class="mt-4">Exterior Website with Clean and Modern Design</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nesciunt veritatis in mollitia, sapiente
                                sint non rerum vero
                                saepe quaerat neque? Delectus ipsum accusantium consequuntur impedit provident quasi quis quidem iure,
                                consequatur ab ullam,
                                molestiae nesciunt obcaecati deleniti. Modi magni voluptate eaque nulla iure vitae.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti molestias tempore culpa porro
                                ducimus cupiditate
                                explicabo architecto ab? Eveniet, quod veniam error corrupti tempore iste molestiae fugit. Ipsam, eos!</p>
                            <div class="text-right">
                                <Link to="blog-two" class="next">Next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //image project --> */}
        </>
    );
};

export default BlogOne;