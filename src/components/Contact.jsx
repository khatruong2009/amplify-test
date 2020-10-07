import React from "react";

function Contact() {
  return (
    //Contact Section
    <section id="contact" className="section-bg">

      <div className="container" data-aos="fade-up">

          <div className="section-header">
              <h2>Contact Us</h2>
              <p>CG/LA Infrastructure</p>
          </div>

          <div className="row contact-info">

              <div className="col-md-4">
                  <div className="contact-address">
                      <i className="ion-ios-location-outline"></i>
                      <h3>Address</h3>
                      <address>729 15th St. NW
                          Suite 600
                          Washington, D.C. 20005
                      </address>
                  </div>
              </div>

              <div className="col-md-4">
                  <div className="contact-phone">
                      <i className="ion-ios-telephone-outline"></i>
                      <h3>Phone Number</h3>
                      <p><a href="tel:+12027760990">+1 (202) 776-0990</a></p>
                  </div>
              </div>

              <div className="col-md-4">
                  <div className="contact-email">
                      <i className="ion-ios-email-outline"></i>
                      <h3>Email</h3>
                      <p><a href="mailto:info@cg-la.com">info@cg-la.com</a></p>
                  </div>
              </div>

          </div>
      </div>
    </section> //End Contact Section
  )
}

export default Contact;