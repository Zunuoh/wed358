import React from "react";
import { Button } from "react-bootstrap";

const ButtonComponent = (props) => {
  return (
    <div>
      <Button
        style={{
          borderRadius: 1,
          fontFamily: "Montserrat, sans-serif",
          fontSize: 12,
          width: 140,
          height: 30,
          backgroundColor: "#FFFFFF",
          color: "black",
          borderColor: "black",
        }}
      >
        {props.label}
      </Button>
    </div>
  );
};

export default ButtonComponent;
