import React from 'react'
import Header from '../../component/Header';
import RsvpFooter from '../../component/RsvpFooter';
import FeatherIcon from 'feather-icons-react'


const LocationScreen = () => {
  return (
    <div>
      <Header />
      <div>
      <div className="locationContainer">
        <div>
          <div style={{display:"flex", justifyContent:"center", fontSize:10, marginTop:20}}>MAGICAL MOMENTS</div>
          <h3 style={{display:"flex", justifyContent:"center"}}>We are in love with this place</h3  >
          <div style={{display:"flex", textAlign:"center", maxWidth:"70ch", fontSize:15, fontWeight:100}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud.
          </div>

        </div>
      </div>

      <div className='mapContainer'>
            <div className='locationDetails'>
              <div style={{fontSize:25}}>Location & Informations</div>
              <div style={{display:"flex", marginTop:5}}>
                <div><FeatherIcon icon="map-pin" size="15" /></div>
                <div className='locationDetailsText'>Vineyard at Pier 26, Hudson river park, New York</div>
              </div>
              <div style={{display:"flex", marginTop:5}}>
                <div><FeatherIcon icon="phone" size="15" /></div>
                <div className='locationDetailsText'>+ 00 123 456 7</div>
              </div>
              <div style={{display:"flex", marginTop:5}}>
                <div><FeatherIcon icon="mail" size="15" /></div>
                <div className='locationDetailsText'>bridge@example.com</div>
              </div>
              <div style={{display:"flex", marginTop:5}}>
                <div><FeatherIcon icon="instagram" size="15" /></div>
                <div className='locationDetailsText'>#janeandarthurwedding</div>
              </div>
              
              <div></div>
            </div>
            <div className='locationMap'>
              {/* <div className='map'>ff</div> */}
            </div>

      </div>
      </div>
      

      <div style={{marginTop:15}}>
       <RsvpFooter />
      </div>
     
    </div>
  )
}


export default LocationScreen