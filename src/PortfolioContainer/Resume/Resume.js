import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
  <section id="resume" className="resume">
  <div className="container">

    <div className="section-title">
      <h2>RESUME <a href="https://drive.google.com/file/d/1hhjSfImkKfXFGlFvFJeDzOtVasQKqCMf/view?usp=sharing" className="file-pdf" target="blank"><i className='bx bxs-file-pdf' ></i></a></h2>
    </div>

    <div className="row">
    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Web Developer</h4>
              <h5>August 2021 - Present</h5>
              <p><em>Freelancer</em></p>
              <ul>
                <li>Developing web pages as per client specifications.</li>
                <li>Prepared multiple designs and wireframes for client approval before proceeding with development.</li>
                <li>Managed and executed multiple projects simultaneously to meet critical deadlines.</li>
              </ul>
            </div>
  
        <h3 className="resume-title">Education</h3>
        <div className="resume-item">
          <h4>Full Stack Web Development</h4>
          <p><em>Rice University, Houston, TX USA</em></p>
          <h5>Dec 2021</h5>
          </div>

        <div className="resume-item">
          <h4>Bachelors of Science</h4>
          <p><em>University of Texas, Arlington, Texas USA</em></p>
        </div>    
            
      </div>

      <div className="col-lg-6" data-aos="fade-up">
        <h3 className="resume-title">Technical Skills</h3>
        <div className="resume-item">
          <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li> 
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>GitHub</li>
              <li>MERN (MongoDB, Express, React, Node)</li>
              <li>GraphQL</li>
              <li>Handlebars.js</li>
              <li>Materialize CSS</li>
              <li>API Interaction: (API, JSON, AJAX)</li>
              <li>Chakra UI</li>
              <li>MySQL</li>
              <li>Sequelize.js</li>
              <li>NoSQL</li>
              <li>Mongoose</li>
              <li>Jest</li>
              <li>Insomnia</li>
              <li>Heroku</li> 
              <li>Progressive Web Applications (PWAs)</li>             
            </ul>
          </div>
      </div>

    </div>
    </div>
</section>
    </div>          
  );
}