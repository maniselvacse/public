import { Link } from "react-router-dom";

const Timeline = () => {
    return (
        <>
            {/* <!-- timeline --> */}
            <section className="w3l-timeline-1">
                <div className="container">
                    <div className="row example-centered">
                        <div className="col-12">
                            <ul className="timeline timeline-centered mb-0 pl-4">
                                <div className="timeline-item period pt-0">
                                    <div className="timeline-info"></div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h2 className="timeline-title editContent">2020</h2>
                                    </div>
                                </div>
                                <li className="timeline-item">
                                    <div className="timeline-info editContent">
                                        <span>March</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Worked as a Web designer</h3>
                                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, init sed accumsan a, consectet
                                            uer eget, posuere ut, mauris. Donec orci lectus, sed aliquam ut, faucibus non,
                                            euismod id, nulla. Donec vitae sapien ut libero. ullam dictum felis.</p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info editContent">
                                        <span>July </span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <Link to="/single"><img src="assets/images/1.jpg" className="img-fluid mb-4" alt="" /></Link>
                                        <h3 className="timeline-title">HTML, CSS, Bootstrap, SCSS.</h3>
                                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectet uer eget,
                                            posuere ut,
                                            mauris. Donec orci lectus, sed aliquam ut, faucibus non, euismod id, nulla. Donec vitae
                                            sapien
                                            ut libero venenatis faucibus. ullam dictum felis. </p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info editContent">
                                        <span>December</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <Link to="/single"><img src="assets/images/2.jpg" className="img-fluid mb-4" alt="" /></Link>
                                        <h3 className="timeline-title">Mobile App Developer</h3>
                                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectet uer eget,
                                            posuere ut, mauris. Donec orci lectus, sed aliquam ut, faucibus non, euismod id,
                                            nulla. Donec vitae sapien ut libero venenatis. ullam dictum felis. </p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info editContent">
                                        <span>February </span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Ecommerce website</h3>
                                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectet uer eget,
                                            posuere ut, mauris. Donec orci lectus, sed aliquam ut, faucibus non, euismod id,
                                            nulla. Donec vitae sapien ut libero. ullam dictum felis. </p>
                                    </div>
                                </li>
                                <li className="timeline-item period">
                                    <div className="timeline-info"></div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h2 className="timeline-title editContent">2019</h2>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info editContent">
                                        <span>April</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <Link to="/single"><img src="assets/images/3.jpg" className="img-fluid mb-4" alt="" /></Link>
                                        <h3 className="timeline-title">Frontend web technologies</h3>
                                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectet uer eget,
                                            posuere ut, mauris. Donec orci lectus, sed aliquam ut, faucibus non, euismod id,
                                            nulla. Donec vitae sapien ut libero. ullam dictum felis. </p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info editContent">
                                        <span>November</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">Developing awesome portfolio</h3>
                                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectet uer eget,
                                            posuere ut, mauris. Donec orci lectus, sed aliquam ut, faucibus non, id, nulla.
                                            Donec vitae sapien ut libero faucibus. ullam dictum felis. </p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info editContent">
                                        <span>May</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <Link to="/single"><img src="assets/images/1.jpg" className="img-fluid mb-4" alt="" /></Link>
                                        <h3 className="timeline-title">Javascript technologies</h3>
                                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectet uer eget,
                                            posuere ut, mauris. Donec orci lectus, sed aliquam ut, faucibus non, euismod id,
                                            nulla. Donec vitae sapien ut libero. ullam dictum felis. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- //timeline --> */}
        </>
    );
};

export default Timeline;