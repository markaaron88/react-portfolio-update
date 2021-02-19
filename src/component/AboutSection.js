import React from "react";
import home2 from '../img/home2.jpg'

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2> We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              {" "}
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true. </h2>
          </div>
        </div>
        <p>Contact us for any photography or videography. We have professioanls to help.</p>
     <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home2} alt="me"/>
      </div>
    </div>
  );
};

export default AboutSection;
