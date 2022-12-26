import React from "react";
import profileContext from "../context/profileContext";

class Footer extends React.Component {
  render(props) {
    const data = this.props.profileData;
    return (
      <section className="w3l-footers-1">
        <div className="footer py-3">
          <div className="container">
            <div className="footer-content">
              <div className="row">
                <div className="col-lg-8 footer-left">
                  <p className="m-0">&copy; {(new Date().getFullYear())} Mearn Project. All Rights Reserved.</p>
                </div>
                <div className="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
                  <ul className="social m-0 p-0">
                    {data.social_media.map((socialMedia, key) => {
                      if (['facebook', 'instagram', 'linkedin', 'twitter'].includes(socialMedia.name.toLowerCase())) {
                        return (
                            <li key={key}>
                              <a href={socialMedia.url}>
                                <span className={"fa fa-" + socialMedia.name.toLowerCase()}></span>
                              </a>
                            </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Footer.contextType = profileContext;

export default Footer;
