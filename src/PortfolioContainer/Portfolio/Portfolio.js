import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div>
<section id="portfolio" className="portfolio section-bg">
  <div className="container">

    <div className="section-title">
      <h2>Portfolio</h2>
    </div>

    <div className="row portfolio-container">

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="../images/logos3.png" className="img-fluid" alt="logo"/>
          <div className="portfolio-links">
            <a href="https://github.com/Faizila/Password-Generator" target="blank"><i className="bx bx-link">Git Repo</i></a>
            <a href="https://faizila.github.io/Password-Generator/" target="blank"><i className="bx bx-link">Webpage</i></a>         
          </div>
          <div>
            <p>Password Generator</p>
            <p>(HTML, CSS & JavaScript)</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="../images/logo4.png" className="img-fluid" alt="logo"/>
          <div className="portfolio-links">
            <a href="https://github.com/Faizila/Work-Day-Scheduler" target="blank"><i className="bx bx-link">Git Repo</i></a>
            <a href="https://faizila.github.io/Work-Day-Scheduler/" target="blank"><i className="bx bx-link">Webpage</i></a>
            </div>
            <div>
            <p>Workday Scheduler</p>
            <p>(HTML, CSS, JavaScript, jQuery, Moment.js, Bootstrap)</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="../images/logo4.png" className="img-fluid" alt="logo"/>
          <div className="portfolio-links">
            <a href="https://github.com/Faizila/Weather-Dashboard" target="blank"><i className="bx bx-link">Git Repo</i></a>
            <a href="https://faizila.github.io/Weather-Dashboard/" target="blank"><i className="bx bx-link">Webpage</i></a>
            </div>
            <div>
            <p>Weather Dashboard</p>
            <p>(HTML, CSS, JavaScript, jQuery, Moment.js, Bootstrap, OpenWeather API)</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="../images/node.png" className="img-fluid" alt="logo"/>
          <div className="portfolio-links">
            <a href="https://github.com/Faizila/Team-Profile-Generator/blob/main/assets/Screenshots/generatedteam.JPG" target="blank"><i className="bx bx-plus">Image</i></a>
            <a href="https://github.com/Faizila/Team-Profile-Generator" target="blank"><i className="bx bx-link">Git Repo</i></a>
            </div>
            <div>
              <br/>
              <p>Team Profile Generator</p>
            <p>(HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, OOP, inquirer, jest)</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="../images/logo1.png" className="img-fluid" alt="logo" width="65%" height="50%"/>
          <div className="portfolio-links">
            <a href="https://github.com/nskidmore7/GroupProject1" target="blank"><i className="bx bx-link">Git Repo</i></a>
            <a href="https://nskidmore7.github.io/GroupProject1/home.html" target="blank"><i className="bx bx-link">Webpage</i></a>
            </div>
            <div>
            <p>Group Project: Foodie</p>
            <p>(HTML, CSS, JavaScript, jQuery, Materialize, APIs)</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="../images/heroku.png" className="img-fluid" alt="logo"  width="60%" height="60%"/>
          <div className="portfolio-links">
            <a href="https://github.com/Faizila/Note-Taker" target="blank"><i className="bx bx-plus">Git Repo</i></a>
            <a href="https://shrouded-brushlands-22897.herokuapp.com/" target="blank"><i className="bx bx-link">Webpage</i></a>
            </div>
            <div>
              <br/>
              <p>Note Taker</p>
            <p>(HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, Insomnia, Heroku)</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="../images/heroku.png" className="img-fluid" alt="logo"  width="60%" height="60%"/>
          <div className="portfolio-links">
            <a href="https://github.com/Faizila/GroupProject2" target="blank"><i className="bx bx-plus">Git Repo</i></a>
            <a href="https://floating-basin-17034.herokuapp.com/" target="blank"><i className="bx bx-link">Webpage</i></a>
            </div>
            <div>
              <br/>
              <p>Group Project: SpineX</p>
              <p>(HTML, CSS, JavaScript, Bootstrap, Handlebars.js, Node.js, Express.js, MySQL, Sequelize ORM, MVC, Insomnia, Heroku)</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="../images/coming-soon.png" className="img-fluid" alt="logo"/>
          <div className="portfolio-links">
            <a href="../images/coming-soon.png"><i className="bx bx-plus"></i></a>
            <a href="#" target="blank"><i className="bx bx-link"></i></a>
            </div>
            <div>
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src="../images/coming-soon.png" class="img-fluid" alt="logo"/>
          <div className="portfolio-links">
            <a href="../images/coming-soon.png"><i className="bx bx-plus"></i></a>
            <a href="#" target="blank"><i className="bx bx-link"></i></a>
            </div>
            <div>
            <p>Coming Soon!</p>
          </div>
        </div>
      </div>

      </div>

  </div>
</section>
    </div>          
  );
}