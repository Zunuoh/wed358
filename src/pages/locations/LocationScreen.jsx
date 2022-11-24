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
              <div style={locationDetails}>
                <div><FeatherIcon icon="map-pin" size="15" /></div>
                <div className='locationDetailsText'>Vineyard at Pier 26, Hudson river park, New York</div>
              </div>
              <div style={locationDetails}>
                <div><FeatherIcon icon="phone" size="15" /></div>
                <div className='locationDetailsText'>+ 00 123 456 7</div>
              </div>
              <div style={locationDetails}>
                <div><FeatherIcon icon="mail" size="15" /></div>
                <div className='locationDetailsText'>bridge@example.com</div>
              </div>
              <div style={locationDetails}>
                <div><FeatherIcon icon="instagram" size="15" /></div>
                <div className='locationDetailsText'>#janeandarthurwedding</div>
              </div>
              
              <div></div>
            </div>
            <div className='locationMap'>
              <img src="https://images.unsplash.com/photo-1586449480558-33ae22ffc60d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z29vZ2xlJTIwbWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='' style={locationMapImage}/>
            </div>

      </div>
      </div>
      

      <div style={{marginTop:"7%"}}>
       <RsvpFooter />
      </div>
     
    </div>
  )
}

const locationDetails = {display:"flex", marginTop:5}
const locationMapImage = {width:'40vw', height:'40vh'}


export default LocationScreen