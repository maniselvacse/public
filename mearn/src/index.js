import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

/* Pages */
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from './layouts/Layout.js';
import LandingSingle from './pages/LandingSingle';
import Blog from './pages/Blog';
import BlogOne from './pages/BlogOne';
import BlogTwo from './pages/BlogTwo';
import BlogThree from './pages/BlogThree';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Timeline from './pages/Timeline';
import Single from './pages/Single';

import ScrollToTop from './ScrollToTop.js';

import profileContext from './context/profileContext';
import profileServices from './services/profileServices';

export default class Router extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profileData: null,
      profileError: null,
      profileLoader: false
    };
  }

  async profileService() {
    const profile = new profileServices();
    this.setState(await profile.getProfile());
  }

  componentDidMount() {
    this.profileService();
  }

  render() {

    if (!this.state.profileLoader) {
      return <div />
    }

    return (
      <BrowserRouter>
        <ScrollToTop />
        <profileContext.Provider value={this.state}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog-one" element={<BlogOne />} />
              <Route path="blog-two" element={<BlogTwo />} />
              <Route path="blog-three" element={<BlogThree />} />
              <Route path="contact" element={<Contact />} />
              <Route path="landing-single" element={<LandingSingle />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="resume" element={<Resume />} />
              <Route path="services" element={<Services />} />
              <Route path="single" element={<Single />} />
              <Route path="timeline" element={<Timeline />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </profileContext.Provider>
      </BrowserRouter>
    );
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();