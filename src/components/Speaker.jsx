import React from "react";

function Speaker(props) {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="speaker" data-aos="fade-up" data-aos-delay="200">
          <img src={props.image} alt="Speaker 1" className="img-fluid w-100"/>
          <div className="details">
              <h3><a href="#schedule">{props.name}</a></h3>
              <p>{props.description}</p>
              <div className="social">
                  <a href={props.gvip}><strong style={{fontSize: "larger"}, {display: props.gvip ? "block" : "none"}}>GVIP</strong></a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Speaker;