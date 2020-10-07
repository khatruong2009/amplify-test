import React from "react";

function Sponsor(props) {
  return(
    <div className='col-lg-3 col-md-4 col-sm-6'>
      <img
        src={props.image}
        alt={props.name}
        className='img-fluid w-100'
      />
    </div>
  )
}

export default Sponsor;