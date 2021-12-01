import React from "react";
import "./projects.css";
import * as SiIcons from "react-icons/si";
import f1 from "../../Images/f1.png";
import f2 from "../../Images/f2.png";
import f3 from "../../Images/f3.png";
import f4 from "../../Images/f4.png";
import f5 from "../../Images/f5.png";
import f6 from "../../Images/f6.png";
import f7 from "../../Images/f7.png";
import b2 from "../../Images/b2.png";


function Projects() {
  return (
    <div id="projects">
      <h1 className="logo-text">𝙋𝙧𝙤𝙟𝙚𝙘𝙩𝙨</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={f1} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Cosmetify Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">Cosmetify</div>
            <div className="img-description">
              <p>
                Developed a Cosmetify application using React.js along with various roles(Admin,Client) &
                 allow people to filter products by Brand,Product_type,Price range using filter bars.
                 </p>
                 <p>
                Integrated Stripe payment & also Integrated Jwt,Mongo Atlas,bCrypt frameworks for Authentication and persistance.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/cosmetify-2f"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/cosmetify"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://trusting-dijkstra-410988.netlify.app"
                  >
                   Fronted demo <i className="fad fa-link"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://cosemetify.herokuapp.com/product"
                  >
                  Backend demo <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={f3} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Naukri.Com Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">Naukri.Com</div>
            <div className="img-description">
              <p>
                Develeoped an Naukri.Com application to manage and track all the details of Employer and Recruiters, Employer Registration, Search Job.
                </p>
              <p>
                Utilesd  React.js, React-router-dom, React-icons, React-dom, Axios, Node.js, Cors, Dotenv, Mongoose,Jwt 
                Nodemon etc. for better functionality.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/Naukri.com-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/Naukri.com-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://focused-chandrasekhar-d3af65.netlify.app/"
                  >
                   Fronted demo <i className="fad fa-link"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://monti-naukri-backend.herokuapp.com/"
                  >
                  Backend demo <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={f7} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Data Scraping Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">Data Scraping</div>
            <div className="img-description">
              <p>
              Developed a Data scraping Application to show the specification of mobiles
               means those details scraping from different sites like Amazon,Flipcart ,Snapdeal.
              </p>
              <p>
                Utilesd  React.js, React-router-dom, Axios, React-dom, Node.js, Cors, Dotenv, Mongodb,Express etc.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/Data-scraping-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/Data-scraping-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://nervous-euler-ee6f33.netlify.app/"
                  >
                   Fronted demo <i className="fad fa-link"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://monti-data-scriping.herokuapp.com/products"
                  >
                  Backend demo <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={f2} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Ecommerce Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">Ecommerce</div>
            <div className="img-description">
              <p>
                Developed an eCommerce application with React.js to allow people to buy their products by adding into cart.
              </p>
              <p>
                Utilised Material-ui,Axios,React-dom and Node.js for back-end,Mongo Atlas for persistance.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/ecommerce--frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/ecommerce-backend-app/tree/main"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://eager-tesla-fe7ac2.netlify.app/"
                  >
                   Fronted demo <i className="fad fa-link"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://blooming-stream-66576.herokuapp.com/product/getproduct"
                  >
                  Backend demo <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={f4} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">VCS(Github Clone) Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">VCS</div>
            <div className="img-description">
              <p>
                Developed an version controll system application to allow developer used as Github in which developer can make repository with it's details
              </p>
              <p>
                Utilised  React-js, Axios, Bootstrap, Font-awesome,react-dom, Node-js, Cors, Dotenv, Mongoose,UUid,Nodemon
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/version-system-controll-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/version-controll-system-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://quirky-meitner-6a7713.netlify.app"
                  >
                   Fronted demo <i className="fad fa-link"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://ibb.co/wwX6fSP"
                  >
                  Backend demo <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={f5} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">CRUD-App Aplication </h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">CRUD-App </div>
            <div className="img-description">
              <p>
                User can Perform all Crud operation with validation in which user can post, delete, update, edit the data. 
              </p>
              <p>
                Utilsed React-js, Axios, Bootstrap, react-dom, React-router-dom, Material, React-crud-icons
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/task-crud-app"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://happy-pike-5212df.netlify.app/"
                  >
                   Fronted demo <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={f6} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Price-cart Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">Price-Cart</div>
            <div className="img-description">
              <p>
               Developed a price-cart application by React-js and React-dom to show the details like storage, single or multi-user monthly status, reports etc. to Users.
                Basically specifying the details of items .
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/price-cart"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://brave-wiles-dc6ed0.netlify.app/"
                  >
                   Fronted demo <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="card" data-aos="zoom-in-up">
          <img src={b2} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Mentor-Task Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">Mentor-Task</div>
            <div className="img-description">
              <p>
               Made a Restful Api by using Node.js in which host can create mentor and students. He can also assign the mentor for particular students
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/Mentor-task"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://mentor-task.herokuapp.com/mentors/"
                  >
                  Backend demo <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
