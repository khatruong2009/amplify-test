import React from "react";

function Subscribe() {
  return (
    //Subscribe Section
    <section id="subscribe">
    <div className="container" data-aos="zoom-in">
        <div className="section-header">
            <h2 id="subscribe-h2">Register Now</h2>
        </div>

        <form action="https://www.cg-la.com/store/global-registration-all-access">
            <div className="form-row justify-content-center">
                <div className="col-auto">
                    <button type="submit">Register All Access</button>
                </div>
            </div>
        </form>
        <br/>
        <form action="https://www.cg-la.com/store/r2xmfwrzr5gjrbw4luvs2s5racfx1t">
            <div className="form-row justify-content-center">
                <div className="col-auto">
                    <button type="submit">Register Basic</button>
                </div>
            </div>
        </form>

    </div>
  </section>
  //End Subscribe Section
  )
}

export default Subscribe;