import React from 'react'
import './Footer.css'
import phoenix from './Images/phoenix.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Segment } from 'semantic-ui-react'
import { useRef } from 'react'
const Footer = () => {
    const scroll=useRef(null);
    const scrollfunc=(ele)=>
        {
           window.scrollTo({
            top:ele.current,
            behavior:"smooth",
           });
        };
  return (
      <div className='footer'>
        <h1 style={{marginTop:"10px",backgroundColor: "#D8232A", height:"60px",padding:"1rem",color:"white"}}>Stay with us</h1> 
        <div className='footerdown'>
            <div className='footerleft'>
                <h1>Phoenix</h1>
                <img src={phoenix} style={{width:"90px"}}alt="Pheonix"/>
            </div>
            <div className='footercenter'>
                <p>As the largest platform connecting property buyers 
                    and sellers, Magicbricks boasts over 2 crore
                     monthly visitors and 15 lakh active property 
                     platforms like MBTV, India's leading online real 
                     estate YouTube channel, along with proprietary tools 
                     providing home buyers with price trends, forecasts 
                     and locality reviews.</p>
            </div>
            <div className='footerright'>
                <h3>Quick Links</h3>
                    <ul>
                        <li onClick={()=>scrollfunc(scroll)}>Home</li>
                        <li>Blogs</li>
                        <li>About us</li>
                        <li><a href="https://web.whatsapp.com" target="blank">Contact us</a></li>
                    </ul>
            </div>
            
          </div>
          <div className='SOCIALMEDIA'>
          <a href="https://web.whatsapp.com" target="blank">
                <WhatsAppIcon style={{ fontSize: 40,color:'green' }} />
            </a>
           
            <a href="https://www.facebook.com" target="blank">
                <FacebookIcon style={{ fontSize: 40 }}/>
            </a>
            <a href="https://www.instagram.com" target="blank">
                <InstagramIcon style={{ fontSize: 40,color:'orangered' }}/>
            </a>
            <a href="https://www.twitter.com" target="blank">
                <TwitterIcon style={{ fontSize: 40,color:'deepskyblue'}}/>
            </a>
          </div>
          <Segment>&copy;2024 Phoenix. All Rights Reserved</Segment>
     </div>
  )
}

export default Footer
