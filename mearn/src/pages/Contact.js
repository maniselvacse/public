const Contact = () => {
    return (
        <>
            {/* <!-- contact form --> */}
            <section className="w3l-contacts-12 py-5" id="contact">
                <div className="container py-md-3">
                    <div className="contacts12-main">
                        <div className="title-section">
                            <h3 className="main-title-w3 mb-md-5 mb-4">Want to get in touch? <br />Find me on
                                <a href="tel:+12-331-456-789" className="editContent">phone</a>,
                                <a href="mailto:mymail@mail.com" className="editContent">email</a>,
                                <a href="#twitter" className="editContent">twitter</a>
                                or <a href="#linkedin" className="editContent">linkedin</a>
                            </h3>
                        </div>
                        <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="">
                            <div className="main-input">
                                <input type="text" name="w3lName" placeholder="Enter your name" className="contact-input" required="" />
                                <input type="email" name="w3lSender" placeholder="Enter your mail" className="contact-input" required="" />
                                <input type="email" name="w3lSubject" placeholder="Subject" className="contact-input" />
                                <textarea className="contact-textarea contact-input" name="w3lMessage" placeholder="Enter your message"
                                    required=""></textarea>
                            </div>
                            <div className="text-right">
                                <button className="btn-primary btn btn-style">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- //contact form --> */}
        </>
    );
};

export default Contact;