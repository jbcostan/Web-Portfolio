import React,{useState} from 'react';
import TopNav from './Components/TopNav.js';
import Footer from './Components/Footer.js';
import AboutPage from './Components/AboutPage.js'
import ProjectsPage from './Components/ProjectsPage.js'
import Banner from './Components/Banner.js'
function App() {
  const [Redirect,setRedirect]=useState(0);
  return (
    <div>
      <TopNav setRedirect={setRedirect}/>
      <AboutPage/>
      <Banner/>
      <ProjectsPage Redirect={Redirect} setRedirect={setRedirect}/>
      <Footer Redirect={Redirect} setRedirect={setRedirect}/>
    </div>
  );
}

export default App;
