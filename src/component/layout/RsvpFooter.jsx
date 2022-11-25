import React from "react";
import ButtonComponent from "../ButtonComponent"
import Footer from "../layout/Footer";

const RsvpFooter = () => {
  return (
    <div>
      <div className="rsvpFooterContainer">
        <div className="rsvpfooterHeader">
          LINE WILL BE OPEN UNTIL SEPTEMBER 1ST
        </div>
        <div className="rsvpfooterText">
          Please, take a moment and respond to our invitation.
        </div>
        <div className="rsvpfooterButton">
          <ButtonComponent label="RSVP" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RsvpFooter;
