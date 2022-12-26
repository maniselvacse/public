import { Link } from "react-router-dom";

const BlogThree = () => {
  return (
    <>
      {/* <!-- sound project --> */}
      <section class="text-11 py-5">
        <div class="text11 py-lg-5 py-md-3">
          <div class="container">
            <div class="text11-content">
              <div class="text-left">
                <h4 class="text-left">Sound by HRVY</h4>
              </div>
              <iframe width="100%" scrolling="no" frameborder="no" allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/389497899&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
              <h5 class="mt-4">Personal (Sebastian Perez Remix)</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nesciunt veritatis in mollitia, sapiente
                sint non rerum vero
                saepe quaerat neque? Delectus ipsum accusantium consequuntur impedit provident quasi quis quidem iure,
                consequatur ab ullam,
                molestiae nesciunt obcaecati deleniti. Modi magni voluptate eaque nulla iure vitae.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti molestias tempore culpa porro
                ducimus cupiditate
                explicabo architecto ab? Eveniet, quod veniam error corrupti tempore iste molestiae fugit. Ipsam, eos!</p>
              <div class="text-left">
                <Link to="blog-two" className="next">Prev</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //sound project --> */}
    </>
  );
};

export default BlogThree;