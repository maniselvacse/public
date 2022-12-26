import React from 'react';
import ReactDOM from 'react-dom/client';

import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import FooterScripts from './FooterScripts';
import profileContext from "../context/profileContext";

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  render() {
    this.head();
    this.footer();
    this.footerScripts();
    return <Header/>;
  }

  head() {
    // Common Head
    const head = ReactDOM.createRoot(document.querySelector('head'));
    head.render(<Head />);
  }


  footer() {
    const profile = this.context;
    const data = profile.profileData.data.data[0];

    // Common Footer
    const footer = ReactDOM.createRoot(document.querySelector('footer'));
    footer.render(<Footer profileData={data}/>);
  }

  footerScripts() {
    // Common Footer Scripts
    const footerScripts = ReactDOM.createRoot(document.querySelector('footerScripts'));
    footerScripts.render(<FooterScripts />);
  }

}

Layout.contextType = profileContext;

export default Layout;