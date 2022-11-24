import React from 'react'
import Header from '../../component/Header'
import {Form} from 'react-bootstrap'
import ButtonComponent from '../../component/ButtonComponent'
import RsvpFooter from '../../component/RsvpFooter'

const RsvpScreen = () => {
  return (
    <div>
      <Header/>
      <div className="rsvpImage">
        {/* <div style={{marginLeft:"40%"}} className='rsvpContainerText'>
        CELEBRATE WITH US
        </div> */}
      </div>
      <div className='rsvpContainer'>
        <div className='rsvpPage'>
          <div style={{textAlign:"center", fontSize:10}}>
             MAGICAL MOMENTS
          </div>
          <div style={{fontSize:25, textAlign:"center"}}>
              Will you attend to our special day?
          </div>

          <div style={{fontSize:12, width:"100%",justifyContent:"center", display:"flex"}}>
            <div style={{width: "90%",textAlign:"center"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud.
            </div>
          </div>

          <div style={{justifyContent:"center",marginTop:20}}>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your name" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Your email" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox" style={checkBox}>
                <Form.Check type="checkbox" label="I'll be there" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox" style={checkBox}>
                <Form.Check type="checkbox" label="Sorry, I can't come" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Number of guests" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Meal preferences" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Message" style={messageBox}/>
              </Form.Group>

             <div style={buttonContainer}>
                <ButtonComponent label='Submit'/>
             </div>
          </Form>
          </div>
        </div>
        
      </div>
      <div style={{marginTop:18}}>
       <RsvpFooter />
      </div>

     

    </div>
  )
}

const formGroup = {borderRadius:0, fontSize:10, height:40}
const checkBox = {fontSize:10, marginTop:10}
const messageBox = {borderRadius:0, fontSize:10, height:70}
const buttonContainer = {display:"flex", justifyContent:"center"}
// const button = {backgroundColor:"black", color:"white"}


export default RsvpScreen