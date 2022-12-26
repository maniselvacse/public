import { Link } from "react-router-dom";

const BlogTwo = () => {
    return (
        <>
            {/* <!-- video project --> */}
            <section class="text-11 py-5">
                <div class="text11 py-lg-5 py-md-3">
                    <div class="container">
                        <div class="text11-content">
                            <div class="text-left">
                                <h4 class="text-left">A Video by Aaron Covretta</h4>
                            </div>
                            <iframe src="https://player.vimeo.com/video/291599450?title=0&amp;byline=0&amp;portrait=0" frameborder="0"
                                allow="autoplay; fullscreen" allowfullscreen></iframe>
                            <h5 class="mt-4">A collection of my personal work from the past year! Responsible for all aspects.</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nesciunt veritatis in mollitia, sapiente
                                sint non rerum vero
                                saepe quaerat neque? Delectus ipsum accusantium consequuntur impedit provident quasi quis quidem iure,
                                consequatur ab ullam,
                                molestiae nesciunt obcaecati deleniti. Modi magni voluptate eaque nulla iure vitae.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti molestias tempore culpa porro
                                ducimus cupiditate
                                explicabo architecto ab? Eveniet, quod veniam error corrupti tempore iste molestiae fugit. Ipsam, eos!</p>
                            <div class="prev-next">
                                <Link to="blog-two" className="prev">Prev</Link>
                                <Link to="blog-three" className="next">Next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //video project --> */}
        </>
    );
};

export default BlogTwo;