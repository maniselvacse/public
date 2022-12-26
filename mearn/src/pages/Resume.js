import React from "react";
import profileContext from "../context/profileContext";

class Resume extends React.Component {
  render() {
    const profile = this.context;
    const data = profile.profileData.data.data[0];
    const reversedExperience = [...data.experience].reverse();
    const reversedEducation = [...data.education].reverse();
    const skillsChunks = this.sliceIntoChunks(data.skills.split(","), 4);
    const homeImage = data.hasOwnProperty('attachments') ? data.attachments.home_image : process.env.PUBLIC_URL + "/assets/images/myimage.jpg";

    return (
      <>
        {/* <!-- resume block --> */}
        <div className="w3l-resume py-5 bg-light">
          <div className="container py-lg-3">
            <div className="resume-block">
              <div className="top">
                <div className="my-image">
                  <img
                    src={homeImage}
                    width="100px"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="my-info">
                  <h4>
                    <small>Hey there,</small> <br /> I'm {data.name}
                  </h4>
                </div>
              </div>
              <h2 className="mb-md-5 mb-4">{data.about_me}</h2>

              <div className="experience">
                <span className="exp-title">Experience</span>
                {reversedExperience.map((experience, key) => {
                  return (
                    <>
                      <div className="card p-4">
                        <div className="row">
                          <div className="col-md-8">
                            <p className="m-0 mb-2">
                              {this.getMonthAndYEar(experience.start_date)} -{" "}
                              {this.getMonthAndYEar(experience.end_date)}
                            </p>
                            <h5>
                              {experience.company_name} -{" "}
                              {experience.designation}
                            </h5>
                          </div>
                          <div className="col-md-4 text-md-right mt-md-0 mt-3">
                            <p> {experience.location}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="education mt-5 pt-md-3">
                <span className="edu-title">Education</span>
                {reversedEducation.map((education, key) => {
                  return (
                    <>
                      <div className="card p-4">
                        <div className="row">
                          <div className="col-md-8">
                            <p className="m-0 mb-2">
                              {this.getMonthAndYEar(education.start_date)} -{" "}
                              {this.getMonthAndYEar(education.end_date)}
                            </p>
                            <h5>
                              {education.qualification} -{" "}
                              {education.institution_name}
                            </h5>
                          </div>
                          <div className="col-md-4 text-md-right mt-md-0 mt-3">
                            <p> {education.location}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="row bottom">
                <div className="col-lg-6 skillset mt-5 pt-md-3">
                  <span className="skill-title">Skill Set</span>
                  {skillsChunks.map((skills, key) => {
                    return (
                      <>
                        <div className={"card p-3 " + (key ? "mt-3" : "")}>
                          <h5>{skills.join(", ")}</h5>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="col-lg-6 contact mt-5 pt-md-3 position-relative">
                  <span className="contact-title">Contact</span>
                  {data.social_media.map((socialMedia, key) => {
                    return (
                      <>
                        <div className={"card p-3 " + (key ? "mt-3" : "")}>
                          <h5>
                            <span>{socialMedia.name}</span>{" "}
                            <span>
                              {socialMedia.name === "Mail" ? (
                                <a href={"mailto:" + socialMedia.url}>{socialMedia.url}</a>
                              ) : (
                                <a href={socialMedia.url}>{socialMedia.url.replace(/^https?:\/\//, "").replace("www.", "")}</a>
                              )}
                            </span>
                          </h5>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //resume block --> */}
      </>
    );
  }

  getMonthAndYEar(ddmmyyyy) {
    if (ddmmyyyy.includes("-")) {
      const date = ddmmyyyy;
      const [year, month] = date.split("-");
      return `${month}-${year}`;
    } else {
      return ddmmyyyy;
    }
  }

  sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  componentDidMount() { }
}

Resume.contextType = profileContext;

export default Resume;
