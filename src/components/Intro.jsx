import React from "react";

function Intro(props) {

  return (
    <section id="intro">
        <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">

            <h1 id="intro-h1" className="mb-4 pb-0"> {props.title} </h1>
            <h2 id='intro-h2' style={{fontSize: "2.5rem"}}> {props.slogan} </h2>
            <p id="intro-p" className="mb-4 pb-0">{props.date}</p>
            {/* <a href="https://www.youtube.com/watch?v=fVkrz-W1rY4" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> */}
            <div>
                <a id="2rem" href="#schedule" style={{fontSize: "2rem"}} className="about-btn scrollto intro-btn">Agenda </a>
            </div>
        </div>
    </section> //End Intro Section
  )
}

export default Intro;