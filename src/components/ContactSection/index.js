import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1 className="logo-text">πΎπ€π£π©πππ© ππ</h1>
      <div className="mail-contact mb-5">

        <h4 className="logo-text">if you've got a project in  mind, why not get in touch. Let's work together</h4>
        <a
          href="mailto:kumarmonti445@gmail.com"
          rel="noreferrer"
          className="btn btn-sm btn-success"
        >
          Let's Discuss
        </a>
      </div>
      <div className="mail-contact mb-5">
        <div className="contacts p-4 text-center">
          <i className="fad fa-envelope"></i> <span>kumarmonti445@gmail.com</span>
        </div>
        <div className="contacts p-4 text-center">
          <i className="fad fa-mobile-alt"></i> <span>+91 8383814080</span>
        </div>
        <div className="contacts p-4 text-center mb-3">
          <i className="fad fa-map-marker-alt"></i>{" "}
          <span>Noida, Uttar-pradesh</span>
        </div>
      </div>
      <div className="footer mt-3">
        <span className="float-left">
          <a
            href="https://github.com/Montikumar2918"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-github"></i>
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/monti-kumar-8726b51b7"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &emsp;
        </span>
        <span>Copyright Β© 2021. </span>&emsp;{" "}
        <span> All Rights Reserved by Monti kumar </span>
      </div>
    </div>
  );
}

export default Contact;
