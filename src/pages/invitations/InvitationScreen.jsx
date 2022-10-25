import React from "react";
import Header from "../../component/Header";
import RsvpFooter from "../../component/RsvpFooter";

const InvitationScreen = () => {
  return (
    <div>
      <Header />
      <div className="invitationImage">
        
      </div>
      <div className="invitationContainer">
        <div>
          
          <div style={{display:"flex", justifyContent:"center", fontSize:10, marginTop:60}}>SAVE THE DATE</div>
          <h3 style={{display:"flex", justifyContent:"center"}}>Celebrate love with us</h3  >
          <div style={{display:"flex", textAlign:"center", maxWidth:"70ch", fontSize:15, fontWeight:100}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud.
          </div>

          <div style={{marginTop:30, display:"flex", justifyContent:"center"}}>
            September 20, 2020. – 4pm
          </div>

          <div style={{marginTop:10, display:"flex", justifyContent:"center"}}>
          Vineyard at Pier 26, Hudson river
          </div>

          <div style={{marginTop:30, display:"flex", justifyContent:"center", maxWidth:"40ch", textAlign:"center", fontSize:12, marginLeft:170, fontWeight:100}}>
          Please, be here on time. Wedding starts at 4pm, celebration dinner starts at 5pm. 
          </div>
          
        </div>
      </div>

      <div >
       <RsvpFooter />
      </div>
     
    </div>
  );
};


export default InvitationScreen;
