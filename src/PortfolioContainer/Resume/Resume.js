import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
  <section id="resume" className="resume">
  <div className="container">

    <div className="section-title">
      <h2>RESUME <a href="https://drive.google.com/file/d/1WdnUJFJ7j3Ny0_n84lLAbas-YXlqU-kD/view?usp=sharing" className="file-pdf" target="blank"><i className='bx bxs-file-pdf' ></i></a></h2>
    </div>

    <div className="row">
    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Web Developer</h4>
              <h5>August 2021 - Present</h5>
              <p><em>Freelancer</em></p>
              <ul>
                <li>Develop web pages as per client specifications.</li>
                <li>Create creative UI with functional designs.</li>
                <li>Prepare and present multiple designs/concepts along with wireframes and site flow map for client review and feedback.</li>
                <li>Develop front-end web pages with HTML, CSS, JavaScript and React.</li>
                <li>Manage and execute multiple projects simultaneously to meet critical deadlines.</li>
              </ul>
            </div>
  
        <h3 className="resume-title">Education</h3>
        <div className="resume-item">
          <h4>Masters in User Experience</h4>
          <p><em>Arizona State University, Tempe, Arizona USA</em></p>
          <h5>Candidate</h5>
          </div>

        <div className="resume-item">
          <h4>Full Stack Web Development</h4>
          <p><em>Rice University, Houston, Texas USA</em></p>
          <h5>Dec 2021</h5>
          </div>

        <div className="resume-item">
          <h4>Bachelors of Science in Nursing</h4>
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
              <li>Figma</li>
              <li>Sketch</li>
              <li>GitHub</li>
              <li>MERN (MongoDB, Express, React, Node)</li>
              <li>GraphQL</li>
              <li>InVision</li>
              <li>Materialize CSS</li>
              <li>UX Research</li>
              <li>MySQL/NoSQL</li>
              <li>Responsive Web Design</li>
              <li>Journey Mapping</li>
              <li>User Interface Design</li>         
            </ul>
          </div>
      </div>

    </div>
    </div>
</section>
    </div>          
  );
}