import React from 'react';
import Sponsor from "./Sponsor";

function Sponsors() {
  return (
    //Sponsors Section
    <section id='sponsors'>
      <div className='container' data-aos='fade-up'>
        <div className='section-header'>
          <h2>Event Sponsors</h2>
        </div>
        <div className='row'>
          <h1 className='col-12' style={{ borderBottom: '2px solid #060c22;' }}>
            Strategic Sponsors
          </h1>
          <Sponsor 
            name="Apcol"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Strategic/Apcoll.jpg"
          />
          
          <Sponsor 
            name="Hexagon"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Strategic/Hexagon.jpg"
          />
          
          <Sponsor 
            name="Oracle"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Strategic/oracle.jpg"
          />

          <Sponsor 
            name="Starr"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Strategic/starr.jpg"
          />
          
          <Sponsor 
            name="Trimble"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Strategic/Trimble.jpg"
          />
        </div>
        <div className='row'>
          <h1 className='col-12' style={{ borderBottom: '2px solid #060c22;' }}>
            Platinum Sponsors
          </h1>

          <Sponsor 
            name="Acea"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Platinum/acea.jpg"
          />
          
          <Sponsor 
            name="Apex Brasil"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Platinum/apexbrasil copy.jpg"
          />

          <Sponsor 
            name="CamGLL"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Platinum/CamGLLp.jpg"
          />
          
          <Sponsor 
            name="Crowell"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Platinum/crowell.jpg"
          />

          <Sponsor 
            name="Northeast Maglev"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Platinum/Northeastmaglev.jpg"
          />
          
          <Sponsor 
            name="Theia"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Platinum/theia.jpg"
          />
          
        </div>
        <div className='row'>
          <h1 className='col-12' style={{ borderBottom: '2px solid #060c22;' }}>
            Gold Sponsors
          </h1>

          <Sponsor 
            name="Arup"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/Arup.jpg"
          />
          
          <Sponsor 
            name="CCR"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/CCR.jpg"
          />
          
          <Sponsor 
            name="Black Buffalo"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/blackbuffalo.jpg"
          />

          <Sponsor 
            name="COLE"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/COLE.jpg"
          />
          
          <Sponsor 
            name="BNA"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/BNA.jpg"
          />
          
          <Sponsor 
            name="Lattice"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/Lattice.jpg"
          />
          
          <Sponsor 
            name="DP"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/DP.jpg"
          />
          
          <Sponsor 
            name="Globalvia"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/Global VIA.jpg"
          />
          
          {/*                    
              <div className="col-lg-3 col-md-4 col-sm-6"><img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/Simco.jpg" alt="Simco" className="img-fluid w-100"></div> -->
              <!-- 
              <div className="col-lg-3 col-md-4 col-sm-6"><img src="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Gold/Structural.jpg" alt="Structural" className="img-fluid w-100"></div> */}
        </div>

        <div className='row'>
          <h1 className='col-12' style={{ borderBottom: '2px solid #060c22;' }}>
            Silver Sponsors
          </h1>

          <Sponsor 
            name="Autodesk"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Silver/Autodesk.jpg"
          />
          
          <Sponsor 
            name="Cadiz"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Silver/Cadiz.jpg"
          />
          
          <Sponsor 
            name="Great Lakes"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Silver/GreatLakes.jpg"
          />
          
          <Sponsor 
            name="Port of Montreal"
            image="https://d2huw5an5od7zn.cloudfront.net/onlineforum/assets/img/sponsors/Silver/Port of Montreal.jpg"
          />
          
        </div>
      </div>
    </section>
    //End Sponsors Section
  );
}

export default Sponsors;
