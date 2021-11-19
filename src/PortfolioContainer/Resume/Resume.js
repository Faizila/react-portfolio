import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
  <section id="resume" className="resume">
  <div className="container">

    <div className="section-title">
      <h2>Resume <a href="https://drive.google.com/file/d/1SnuqZ4Qr0x71taFBEo0pTfkReLjCozvD/view?usp=sharing" className="file-pdf" target="blank"><i className='bx bxs-file-pdf' ></i></a></h2>
    </div>

    <div className="row">
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
              <li>Materialize CSS</li>
              <li>API Interaction: (API, JSON, AJAX)</li>
              <li>MERN (MongoDB, Express, React, Node)</li>
              <li>Object-oriented programming (OOP)</li>
              <li>MySQL</li>
              <li>NoSQL</li>
              <li>Insomnia</li>
              <li>Heroku</li>
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
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 className="resume-title">Projects</h3>
        <div className="resume-item">
          <h4>Password Generator</h4>
          <h5>(HTML, CSS & JavaScript)</h5>
          <p><em>Link: https://faizila.github.io/Password-Generator/</em></p>
            <p>Random Password Generator is a JavaScript project that can generate unique and secure passwords for the user. </p>
        </div>
        <div className="resume-item">
          <h4>Team Profile Generator</h4>
          <h5>(HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, OOP, inquirer, jest)</h5>
          <p><em>https://github.com/Faizila/Team-Profile-Generator</em></p>
          <p>A command-line application that takes in information about employees on a software engineering team and based on user input dynamically generates an HTML webpage.</p>
        </div>
        <div className="resume-item">
          <h4>Workday Scheduler</h4>
          <h5>(HTML, CSS, JavaScript, jQuery, Moment.js, Bootstrap)</h5>
          <p><em>Link: https://faizila.github.io/Work-Day-Scheduler/</em></p>
          <p>A simple calendar application that allows a user to save events for each working hour of the day.</p>
        </div>
        <div className="resume-item">
          <h4>Weather Dashboard</h4>
          <h5>(HTML, CSS, JavaScript, jQuery, Moment.js, Bootstrap, OpenWeather API)</h5>
          <p><em>Link: https://faizila.github.io/Weather-Dashboard/</em></p>
            <p>This weather application uses third-party API to find a weather condition of the given city and displays both the current and 5-Days forecast for the user.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>          
  );
}