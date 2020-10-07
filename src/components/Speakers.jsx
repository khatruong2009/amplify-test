import React from "react";
import Speaker from "./Speaker"

function Speakers() {
  return (
    <section id="speakers">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Event Speakers</h2>
                </div>

                <div className="row">

                    <Speaker 
                        name="Parag Khanna"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/speakers/Khanna_Parag_FutureMap.jpg"
                        description="Founder & Managing Partner, FutureMap"
                        gvip="https://www.gvip.io/expertise/4360"
                    />

                    <Speaker 
                        name="David H. Petraeus"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/speakers/Petraeus_David_KKR.jpg"
                        description="Chairman, KKR Global Institute and Former Director, Central Intelligence"
                        gvip=""
                    />

                    <Speaker  
                        name="Joaquim Levy"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/speakers/Levy_Joaquim_Safra-Bank.jpg"
                        description="Chief Economist, Safra bank and former Minister of Finance, Brazil"
                        gvip=""
                    />

                    <Speaker 
                        name="Javier Perez Fortea"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/speakers/Fortea_Javier_Globalvia.jpg"
                        description="CEO, Globalvia"
                        gvip=""
                    />

                    <Speaker 
                        name="Norman F. Anderson"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/speakers/norm.jpg"
                        description="CG/LA Infrastructure"
                        gvip="https://www.gvip.io/expertise/28"
                    />

                    <Speaker 
                        name="Roberto Escoto"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/SpeakersOpt/Escoto_Roberto_Apex.jpg"
                        description="Manager, Investment Department, APEX"
                        gvip=""
                    />

                    <Speaker 
                        name="Andrés Gluski"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/SpeakersOpt/Gluski_Andres_AES.png"
                        description="CEO, AES Corporation"
                        gvip=""
                    />

                    <Speaker 
                        name="Andrew Robb"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/SpeakersOpt/Robb_Andrew_Australia.jpg"
                        description="Minister of Trade and Investment, Government of Australia"
                        gvip=""
                    />

                    <Speaker 
                        name="Joseph Semsar"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/speakers/Semsar_Joe_US-Department.jpg"
                        description="Acting Under Secretary for International Trade, US Department of Commerce Agency"
                        gvip=""
                    />

                    <Speaker 
                        name ="Jim Pass"
                        image ="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/speakers/Pass_James_Guggenheim.jpg"
                        description="Senior Managing Director, Guggenheim Partners"
                        gvip=""
                    />

                    <Speaker 
                        name="Eric Jones"
                        image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/SpeakersOpt/Jones_Eric_US-International-Finance.jpg"
                        description="Managing Director, U.S. International Development Finance Corporation"
                        gvip=""
                    />

                </div>
            </div>
        </section>
        //End Speakers Section
  )
}

export default Speakers;