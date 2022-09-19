import React from 'react'
import Header from '../../component/Header'
import {Button, Form} from 'react-bootstrap'
import ButtonComponent from '../../component/ButtonComponent'

const RsvpScreen = () => {
  return (
    <div>
      <Header/>

      <div className='rsvpContainer'>
        <div className='rsvpPage'>
          <div style={{textAlign:"center", fontSize:10}}>
             MAGICAL MOMENTS
          </div>
          <div style={{fontSize:25, textAlign:"center"}}>
              Will you attend to our special day?
          </div>

          <div style={{fontSize:12, textAlign:"center"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incidi dunt ut labore et dolore magna aliqua ut enim minim veniam, quis nostrud.
          </div>

          <div style={{justifyContent:"center",marginTop:20}}>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your name" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Your email" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Number of guests" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Meal preferences" style={formGroup}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Message" style={formGroup}/>
              </Form.Group>

             <div style={buttonContainer}>
                <ButtonComponent label='Submit'/>
             </div>
          </Form>
          </div>
        </div>
      </div>

     

    </div>
  )
}

const formGroup = {borderRadius:0, fontSize:10}
const buttonContainer = {display:"flex", justifyContent:"center"}
const button = {backgroundColor:"black", color:"white"}


export default RsvpScreen