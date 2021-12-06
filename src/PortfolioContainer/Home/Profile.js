import React from "react";
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div>
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Faizila Amlani</h1>
      <Typical
loop={Infinity}
steps={[
    "Full Stack Developer",
    2000,
    "MERN stack Developer",
    2000,
    "React Developer",
    2000,
    "Web Developer",
    2000,  
    "UI/UX Designer",
    2000,
    "Enthusiastic Developer",
    2000,
]}
/>
    </div>
  </section>
    </div>          
  );
}
