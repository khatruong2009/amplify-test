import React from "react";

function About() {
  return (
    // About Section 
    <section id="about">
    <div className="container" data-aos="fade-up">
        <div className="row">
            <div id="about-text" className="col-lg-9">
                <h2 id="about-h2">About The Event</h2>
                <p id="about-p"></p>
            </div>
            <div className="container">
                <div className="row">
                    <a href="https://www.cg-la.com/privatemeetings" className="col-lg-6 thumbnail">
                        <div className="overlay">
                            <h1 className="overlay-head">Private Meetings:</h1>
                            <p className="overlay-text">
                                Schedule one-on-one meetings with project owners and industry experts
                                across the globe with our private meeting system. See who is available
                                to build your business now!
                            </p>
                        </div>
                        <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/aboutopt/Private_Meeting.jpg" className="img-fluid w-100" alt="" />
                    </a>
                    <a href="https://www.cg-la.com/virtualtradeshow" className="col-lg-6 thumbnail">
                        <div className="overlay">
                            <h1 className="overlay-head">Virtual Trade Show:</h1>
                            <p className="overlay-text">
                                Our virtual trade show booth experience is aninteractive experience!
                                Check out our exhibition booths, chat with sponsors live, enter
                                raffles to win!
                            </p>
                        </div>
                        <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/aboutopt/Virtual_Private_Tradeship.jpg" className="img-fluid w-100" alt="" />
                    </a>
                    <a href="https://www.cg-la.com/store" className="col-lg-6 thumbnail">
                        <div className="overlay">
                            <h1 className="overlay-head">GVIP Member Services</h1>
                            <p className="overlay-text">
                                Harness the power of GVIP On time solutions, Expert Insight,
                                Unprecedented connectivity.Make projects happen.
                            </p>
                        </div>
                        <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/aboutopt/GVIPmember1.jpg" className="img-fluid w-100" alt="" />
                    </a>
                    <a href="https://www.gvip.io/gviptv" className="col-lg-6 thumbnail">
                        <div className="overlay">
                            <h1 className="overlay-head">GVIPTV</h1>
                            <p className="overlay-text">
                                Next Generation TV. Vital discussions with infra insider - exclusive
                                interviews with industry experts.
                            </p>
                        </div>
                        <img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/aboutopt/GVIPTV.jpg" className="img-fluid w-100" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>  //End About Section
  )
}

export default About;