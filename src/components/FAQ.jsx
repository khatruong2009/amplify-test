import React from "react";

function FAQ() {
  return (
    //F.A.Q Section
    <section id="faq">

      <div className="container" data-aos="fade-up">

          <div className="section-header">
              <h2>F.A.Q </h2>
          </div>

          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-9">
                  <ul id="faq-list">

                      <li>
                          <a data-toggle="collapse" className="collapsed" href="#faq1">How do I access the webinar sessions? <i className="fa fa-minus-circle"></i></a>
                          <div id="faq1" className="collapse" data-parent="#faq-list">
                              <p>
                                  Scroll up to the agenda and click the "Join Session" button on the left side of the session you would like to join.
                              </p>
                          </div>
                      </li>

                      <li>
                          <a data-toggle="collapse" href="#faq2" className="collapsed">What is GViP? <i className="fa fa-minus-circle"></i></a>
                          <div id="faq2" className="collapse" data-parent="#faq-list">
                              <p>
                                  GViP stands for "Global Visualization of Infrastructure Projects", and is a web application designed to be the LinkedIn of the Infrastructure community.
                              </p>
                          </div>
                      </li>

                      <li>
                          <a data-toggle="collapse" href="#faq3" className="collapsed">What is the Stimulus Map? <i className="fa fa-minus-circle"></i></a>
                          <div id="faq3" className="collapse" data-parent="#faq-list">
                              <p>
                                  The Stimulus Map is an interactive digital platform that identifies more than 550 infrastructure projects. These projects have the potential to revitalize the U.S. economy through strategic investments. They cover all infrastructure sectors, have an overall investment value of approximately $1 trillion, and could create approximately 2.4 million direct and indirect jobs.
                              </p>
                          </div>
                      </li>

                  </ul>
              </div>
          </div>

      </div>

    </section> //End  F.A.Q Section
  )
}

export default FAQ;