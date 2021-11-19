import './App.css';
import Nav from './PortfolioContainer/Navbar/Navbar'
import Profile from './PortfolioContainer/Home/Profile'
import Aboutme from './PortfolioContainer/AboutMe/Aboutme';
// import Resume from './PortfolioContainer/Resume/Resume';
import Portfolio from './PortfolioContainer/Portfolio/Portfolio';
// import Contact from './PortfolioContainer/ContactMe/Contact';

function App() {
  return (
    <div id="main">
      <Nav/>
      <Profile/>
      <Aboutme/>
      {/* <Resume/> */}
      <Portfolio/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
