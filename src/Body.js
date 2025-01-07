import React, { useRef, useState } from 'react';
import './Body.css';
import img1 from "./Images/img1.jpeg"
import img2 from "./Images/img2.jpeg"
import img3 from "./Images/img3.jpeg"
import img4 from "./Images/img4.jpeg"
import center from './Images/centerimg.jpeg';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Rating, Flag, Button } from 'semantic-ui-react'
const Body = ({UserData}) => {
    const settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '80px', // Space around the centered slide
        // fade: true,
        pauseOnHover: true,
        // dots: true,
    };
    const navigate = useNavigate();
    
      const redirect=()=>{
        if(UserData?.id)
        {
            navigate('/Seller');
        }
        else{
            navigate('/login');
        }
    }
    const scroll=useRef(null);
    const scrollfunc=(ele)=>
    {
        window.scrollTo({
            top:ele.current.offsetTop,
            behavior:"smooth",
           });
        };
        
        const[troo,setroo]=useState(false)
        const Pagechange=(key)=>
        {
            localStorage.setItem("imgid",key)
            navigate("/ownerproperty")
        }
        return (
            <div className='Body'>
        
        
        <div className='Body23'>
        {/* <i class="material-icons">whatsapp</i> */}

            <img src={center} alt="image123" style={{width:"100%",height:"800px"}}/>
        <div className='overlay' style={{width:"100%",height:"910px"}}></div>
        </div>
        <div className='Body1' >  
            {troo ?(
                <h1 onMouseLeave={()=>setroo(false)}><span>FinD</span> a <span>HoMe</span> you'll <span>L0vE</span></h1>
                ):(
                    <h1 onMouseEnter={()=>setroo(true)}>Find a home you'll love</h1>
                    )}
        </div>
        <div  className="centercontent"><h1>Welcome back! Let’s continue your search</h1>
            <Button className='BUYHOME' onClick={()=>scrollfunc(scroll)}>FIND A HOME</Button>
            <Button className='SELLHOME' onClick={redirect}>SELL A HOME</Button>
        </div >
        <h1 style={{marginTop:"-150px",color: "#5e23dc", height:"60px",padding:"1rem",fontSize:"35px"}}>Popular Owner Properties</h1>
        <div className='Boxbody'>
            <div className="Body3" onClick={()=>Pagechange(1)}>
                <img className="img" src="https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/owner-property.webp" alt="1 BHK Flat"/>
                <div className="overlay"></div>
                <div className='body3content'>
                    <p>2568</p>
                    <p>Owner Properties</p>
                    <p>Explore --</p>
                </div>
            </div>
            <div className="Body3" onClick={()=>Pagechange(2)}>
                <img className="img"src="https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/new-projects.webp" alt="1 BHK Flat"/>
                <div className="overlay"></div>
                <div className='body3content'>
                    <p>23554</p>
                    <p>Projects</p>
                    <p>Explore --</p>
                </div>
            </div>
            <div className="Body3" onClick={()=>Pagechange(3)}>
                <img className="img"src="https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/ready-to-move-in.webp" alt="1 BHK Flat"/>
                <div className="overlay"></div>
                <div className='body3content'>
                    <p>3562</p>
                    <p>Ready to move-in</p>
                    <p>Explore --</p>
                </div>
            </div>
           
            <div className="Body3" onClick={()=>Pagechange(4)}>
                <img className="img"src="https://cdn.staticmb.com/magicservicestatic/images/mb-home-web/collection/buy/webp/budget-homes.webp" alt="1 BHK Flat"/>
                <div className="overlay"></div>
                <div className='body3content'>
                    <p>29654</p>
                    <p>Budget Homes</p>
                    <p>Explore --</p>
                </div>
            </div>
        </div>
        
        <div ref={scroll}></div>
        <h1  style={{height:"60px",padding:"1rem", color:"#5e23dc",fontSize:"35px"}}>Pick Your Dream House</h1>
            <div className='Body2'>
                <Slider {...settings}>
                    <div className="card">
                        <img src={img4} alt="img"/>
                        <div className="content">
                            <h3 className="header">1 BHK Flat</h3>
                            <p className="description">15 L | 535 sqrtr</p>
                            <p className="description">Tokyo Japan</p>
                            <Flag name='japan' />
                            <Rating maxRating={5} clearable />
                        </div>
                           
                    </div>
                    <div className="card">
                        <img src={img3}alt="img"/>
                        <div className="content">
                            <h3 className="header">2 BHK Flat</h3>
                            <p className="description">51 L | 1535 sqrtr</p>
                            <p className="description">Gerusalem Palestine</p>
                            <Flag name='palestine' />
                            <Rating maxRating={5} clearable />
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2}alt="img"/>
                        <div className="content">
                            <h3 className="header">3 BHK Flat</h3>
                            <p className="description">56 L | 1835 sqrtr</p>
                            <p className="description">Shangai Singapore</p>
                            <Flag name='singapore' />
                            <Rating maxRating={5} clearable />
                        </div>
                    </div>
                    <div className="card">
                        <img src={img1}alt="img"/>
                        <div className="content">
                            <h3 className="header">2 BHK Flat</h3>
                            <p className="description">36 L | 835 sqrtr</p>
                            <p className="description">Coimbatore India</p>
                            <Flag name='india' />
                            <Rating maxRating={5} clearable />
                        </div>
                    </div>
                </Slider>
            </div> 
    </div>
  )
}

export default Body

// responsive: [
//     {
//         breakpoint: 700,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true
//         }
//     }
// ]