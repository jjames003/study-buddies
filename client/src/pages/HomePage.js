import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate, useLocation } from "react-router-dom";
import VideoComponent from "../components/video/SampleVideo.mp4";



function HomePage() {
  const navigate = useNavigate();
  const navigateToAboutUs = () => {
    navigate('/about-us');
  }
  return(
      <div id='header-home'>
        <video id='sample-video' autoPlay loop muted>
          <source src={VideoComponent} type="video/mp4" />
        </video>
          
        {/* <Typewriter 
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to the Study Buddies platform!")
              .pauseFor(10000)
              .deleteAll()
              .typeString("Explore our platform today!")
              .start();
          }}
        /> */}
        <h1 id='h1-home'> Welcome to the Study Buddies platform! </h1>
        <p id='p-home'>This platform was designed for students to meet up with others and study for class they are struggling in</p>
        <form>
        <button id='about-us' onClick={navigateToAboutUs} type="submit" className = "btn btn-info" formaction="https://github.com/chystarr/study-buddies">Learn about us</button>
        <button id='view-git-button' type="submit" className = "btn btn-info" formaction="https://github.com/chystarr/study-buddies">View on Github</button>
        </form>
         
      </div>

  );
}

export default HomePage;