import React from 'react'
import FeatherIcon from 'feather-icons-react'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerShare'>
        Share this story
      </div>
      <div  className='linksContainer'>
        Find us:
        <FeatherIcon icon="facebook" size="15" style={{marginLeft:10}}/>
        <FeatherIcon icon="instagram" size="15" style={{marginLeft:10}}/>
        <FeatherIcon icon="twitter" size="15" style={{marginLeft:10}}/>
        

      </div>
    </div>
  )
}

export default Footer
