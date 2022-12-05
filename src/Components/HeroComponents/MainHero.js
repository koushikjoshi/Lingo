import React from "react";
import "./MainHero.css"

export const MainHero = () => {
  return (
    <div id="background-image">
  
      <div className="bgImgg">
      <img className="bannerImg" src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/11/pexels-tima-miroshnichenko-9572723.jpg"/>
        <div className="overlay">
          <div className="info-container">
          <div className="Info">
            <span className="hero-subtitle">
              Study A Foreign Language with RMC Lingo
            </span>
            <h1 className="hero-title">
              RMC Lingo – The proactive way to become a linguist.
            </h1>
            <p className="hero-text">
              We at RMC Lingo are enthusiastic to offer many foreign languages
              and also provide English proficiency for IELTS and TOEFL tests
              preparation.
            </p>
            <div className="buttons">
              <div className="button-explore">Explore Courses</div>
              <div className="play-button"> Watch Video</div>
            </div>
          </div>

          </div>
        </div>
  

      
          
          
        </div>
        </div>
  );
};
