import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skillsWrapper" id="skills">
      <h1 className="logo-text text-center py-md-5 py-xs-5">𝙎𝙠𝙞𝙡𝙡𝙨</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12" data-aos="flip-left">
          <div className="skillName">
            <div className="skill-icon"><i class="devicon-react-original-wordmark colored"></i>
          </div>
          </div>
          <div className="skillName">
            <div className="skill-icon"><i class="devicon-express-original-wordmark"></i>
          </div>
          </div>
          <div className="skillName">
            <div className="skill-icon"><i class="devicon-css3-plain-wordmark colored"></i>
          </div>
          </div>
          <div className="skillName">
            <div className="skill-icon"><i class="devicon-mysql-plain-wordmark colored"></i>
          </div>
          </div>
          <div className="skillName">
            <div className="skill-icon"><i class="devicon-html5-plain-wordmark colored"></i>
          </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12" data-aos="flip-right">
        <div className="skillName">
            <div className="skill-icon"><i class="devicon-javascript-plain colored"></i>
          </div>
          </div>
        <div className="skillName">
            <div className="skill-icon"><i class="devicon-github-original-wordmark colored"></i>
          </div>
          </div>
          <div className="skillName">
            <div className="skill-icon"><i class="devicon-mongodb-plain-wordmark colored"></i>
          </div>
          </div>
          <div className="skillName">
            <div className="skill-icon"><i class="devicon-bootstrap-plain-wordmark colored"></i>
          </div>
          </div>
          
          <div className="skillName">
            <div className="skill-icon"><i class="devicon-nodejs-plain-wordmark"></i>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
