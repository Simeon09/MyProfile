import React from "react";
import "./sass/testimonial.css";
import Testimony from "../images/testimony.svg";
const Testimonial = () => {
  return (
    <div className="testimony">
      <div className="fristChild">
        <h1>Testimonies & Recommendations</h1>
      </div>
      <div className="secondDiv">
        <div>
          <span>
            <img src={Testimony} alt="passport" />
            <h6>Akinrinola Tolulope</h6>
            <p>
              Simeon gets things done. <br></br>He’s very passionate about what he does<br></br>
              and he’s always fun to be with.
            </p>
          </span>
          <span>
            <img src={Testimony} alt="passport" />
            <h6>BabaTunde</h6>
            <p>
              Simeon gets things done. <br></br>He’s very passionate about what he does<br></br>
              and he’s always fun to be with.
            </p>
          </span>
        </div>
        <div>
          <span>
            <img src={Testimony} alt="text" />
            <h6>Buhari Suliamon</h6>
            <p>
              Simeon gets things done. <br></br>He’s very passionate about what he does<br></br>
              and he’s always fun to be with.
            </p>
          </span>df
          <span>
            <img src={Testimony} alt="text" />
            <h6>Ayoola victor</h6>
            <p>
              Simeon gets things done. <br></br>He’s very passionate about what he does<br></br>
              and he’s always fun to be with.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
