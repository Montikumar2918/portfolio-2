import React from "react";
import "./About.css";
import Me from "../../Images/resumeProfile.jpg";
import { InfoContainer } from "./AboutElements";
function About() {
  return (
    <>
      <InfoContainer lightBg={false} id="about">
        <h1 className="logo-text text-center py-md-5 py-xs-5">𝘼𝙗𝙤𝙪𝙩 𝙈𝙚</h1>
        <div className="row">
          <div
            className="col-md-5 col-sm-12 mb-3  aboutImg"
            data-aos="fade-right"
          >
            <img src={Me} alt="my profile" />
          </div>
          <div className="col-md-6 col-sm-12" data-aos="fade-left">
            <p>
              I'm a passionate Full stack developer and to work in firm with a professional work driven environment where i can utilize and apply my knowledge, skills which would enable me as a beginner to grow while fulfilling organization goals. I'm having leverage knowledge in Mern Full Stack, Git, Heroku, Netlify, MongoDB Atlas.
            </p>

            <a
              className="btn btn-sm btn-success mt-3"
              rel="noreferrer"
              href={"https://drive.google.com/file/d/1P9ELxKyGoSxSh3SMBpioXoqAt6cCEML2/view?usp=drivesdk"}
              
              target="_blank"
              download
            >
               Resume  <i className="fad fa-download"></i>
            </a>
          </div>
        </div>
       
      </InfoContainer>
    </>
  );
}

export default About;
