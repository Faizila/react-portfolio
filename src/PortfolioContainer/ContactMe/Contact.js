import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
<section id="contact" className="contact">
  <div className="container">

    <div className="section-title">
    <h2>Contact
    <a href="https://github.com/Faizila" className="github" target="blank"><i className="bx bxl-github"></i></a>
    <a href="https://www.linkedin.com/in/faizila-amlani/" className="linkedin" target="blank"><i className="bx bxl-linkedin"></i></a>
    <a href="https://drive.google.com/file/d/1rA01BOBA5tVSh_7nI39QOUHfv5XAMH5B/view?usp=sharing" className="file-pdf" target="blank"><i className='bx bxs-file-pdf'></i></a></h2>
  </div>
    <div className="row" data-aos="fade-in">

      <div className="col-lg-5 d-flex align-items-stretch">
        <div className="info">
          <div className="email">
            <i className="bx bxs-envelope"></i>
            <h4>Email:</h4>
            <p>amlani.faizila@gmail.com</p>
          </div>

          <div className="phone">
            <i className='bx bxs-phone'></i>
            <h4>Call:</h4>
            <p>+1 847 730 7255</p>
          </div>       

        </div>

      </div>

      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form action="https://formsubmit.co/famlani88@gmail.com" method="POST" role="form" className="php-email-form">
          <div className="row">
            <div className="form-group col-md-6">
              <label for="name">Your Name</label>
              <input type="text" name="name" className="form-control" id="name" required/>
            </div>
            <div className="form-group col-md-6">
              <label for="name">Your Email</label>
              <input type="email" className="form-control" name="email" id="email" required/>
            </div>
          </div>
          <div className="form-group">
            <label for="name">Subject</label>
            <input type="text" className="form-control" name="subject" id="subject" required/>
          </div>
          <div className="form-group">
            <label for="name">Message</label>
            <textarea className="form-control" name="message" rows="10" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading...</div>
            <div className="error-message">Try Again!</div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>          
  );
}