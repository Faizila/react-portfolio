import './Navbar.css';

function Nav() {
  return (
    <div>
    <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="../../images/profile-pic.jpg" alt="Pic" className="rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Faizila Amlani</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://github.com/Faizila" className="github" target="blank"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/faizila-amlani/" className="linkedin" target="blank"><i className="bx bxl-linkedin"></i></a>
          <a href="https://drive.google.com/file/d/1rA01BOBA5tVSh_7nI39QOUHfv5XAMH5B/view?usp=sharing" className="file-pdf" target="blank"><i className='bx bxs-file-pdf' ></i></a>
        </div>
      </div>
      
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About Me</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
    </div>
  );
}

export default Nav;
