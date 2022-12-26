import React from 'react';
import {Helmet} from "react-helmet";

class FooterScripts extends React.Component {
  render () {
    return (
      <Helmet>
        <script src={process.env.PUBLIC_URL + "/assets/js/monetization.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/jquery-3.3.1.min.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/owl.carousel.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/jquery.waypoints.min.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/jquery.countup.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/jquery-1.7.2.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/jquery.quicksand.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/script.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/jquery.prettyPhoto.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/bootstrap.min.js"} />
        <script src={process.env.PUBLIC_URL + "/assets/js/script-common.js"} />
      </Helmet>
    );
  }
};

export default FooterScripts;