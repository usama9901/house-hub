import React,{useEffect, useState, useRef} from 'react'
import './Header.css'
import { Icon } from 'semantic-ui-react'
import { Link , useNavigate} from 'react-router-dom';
// import { Link, usenavigate } from 'react-router-dom/cjs/react-router-dom.min'
// import { HashLink } from 'react-router-hash-link'
import phoenix from './Images/phoenix.png'
const Header = () => {
    const userRef = useRef("");
    const navigate=useNavigate()
    const [welcomeuser, setwelcomeuser]=useState(false)
    const [logout, setlogout]=useState(false)
    const [buy, setBuy]=useState(true)
    const [sell, setSell]=useState(true)
    const [rent, setRent]=useState(true)
    const [help, setHelp]=useState(true)
    useEffect(() => {
        userRef.current = localStorage.getItem("username");
        if (userRef.current) {
            setwelcomeuser(true);
        }
    }, []);
    const HandlePage=(key)=>
    {
        navigate(`/page/${key}`)
    }
    
  return (
    <div className='Head'>
        <div className='Header'>
            <div className='lefth'>
                <h2>Phoenix</h2>
                <img src={phoenix} style={{width:"50px"}}alt="Pheonix"/>
            </div>
            <div className='righth'>
                {welcomeuser ? (
                    <div style={{display:"flex",gap:"10px"}}>
                        <h3 className="loginin" onClick={()=>setlogout(!logout)}>Welcome {userRef.current}</h3>
                        {logout && <p onClick={()=>setwelcomeuser(false)} style={{padding:".2em",fontWeight:"600"}}>Log Out</p>}
                    </div> 
                    ) : (
                        <h3><Link to="/login" className="link">Login</Link></h3>
                        )}
            </div>
        </div>
        <div className='Header2'>
            <div className='buy'>
                <h3 onMouseEnter={()=>setBuy(false)} onMouseLeave={()=>setBuy(true)} onClick={()=>HandlePage(1)}>Buy</h3>
                        {buy ?(
                            
                            <Icon name="angle down" className='Icon' />
                            ):(
                                <Icon name="angle up" className='Icon'/>
                        )
                    }
            </div>
            <div className='sell'>
                <h3 onMouseEnter={()=>setSell(false)} onMouseLeave={()=>setSell(true)} onClick={()=>HandlePage(2)}>Sell</h3>
                        {sell ?(
                            
                            <Icon name="angle down" className='Icon' />
                            ):(
                                <Icon name="angle up" className='Icon'/>
                                )
                    }
            </div>
            <div className='rent'>
                <h3 onMouseEnter={()=>setRent(false)} onMouseLeave={()=>setRent(true)} onClick={()=>HandlePage(3)}>Rent</h3>
                        {rent ?(
                            
                            <Icon name="angle down" className='Icon' />
                            ):(
                                <Icon name="angle up" className='Icon'/>
                                )
                            }
            </div>
            <div className='help'>
                <h3 onMouseEnter={()=>setHelp(false)} onMouseLeave={()=>setHelp(true)} onClick={()=>HandlePage(4)}>Help</h3>
                        {help ?(
                            
                            <Icon name="angle down" className='Icon' />
                            ):(
                                <Icon name="angle up" className='Icon'/>
                                )
                            }
            </div>
        </div>
        
    </div>
  )
}

export default Header

/* <h3><Link to="/login" className="link">Login</Link></h3> 
 {valid ?(
    
    <Icon name="angle down" className='Icon' />
    ):(
        <Icon name="angle up" className='Icon'/>
        )
    } 
   <HashLink to="#" smooth>dream</HashLink> 
   <h3 onMouseEnter={()=>setValid(false)} onMouseLeave={()=>setValid(true)}> */