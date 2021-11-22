import React from "react";
import "./Aboutme.css";
import pic from '../../images/profile-pic.jpg';

export default function Aboutme() {
  return (
    <div>
     <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={pic} alt="profile-pic"/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full Stack Developer</h3>
        <br/>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Richmond, Texas USA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Science</span></li>
                </ul>
              </div>
            </div>
            <br/>
            <div>
            <ul>
              <li>• Knowledgeable full stack Web Developer.</li>
              <li>• High energy confident professional with passion for technology.</li>
              <li>• Capable of comprehending ideas and integrating them into desired results.</li>
              <li>• Capable of balancing multiple projects at a time in a fast-paced environment.</li>
              <li>• Flexible to work in both team and self-directed environments.</li>
                  </ul>
            </div>
        </div>

      </div>
      </div>  
    </section>
    </div>          
  );
}