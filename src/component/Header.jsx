import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <>
    <div style={navHeader}>JANE & ARTHUR</div>
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" style={navLink}>HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" style={navLink}>INVITATION</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" style={navLink}>LOCATIONS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" style={navLink}>RSVP</Nav.Link>
      </Nav.Item>
    </Nav>
   
  </>
  )
}

const navHeader = {display:"flex", justifyContent:"center", marginTop:30, fontFamily: 'Dancing Script cursive'}
const navLink = {fontSize:10, color:"black"}
export default Header