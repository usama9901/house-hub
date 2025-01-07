import React,{useState}from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import style from "./scss/login.module.scss"
import { Button } from 'semantic-ui-react';
const Login = ({onLogin}) => {
    const [ userInfo, setUserInfo ] = useState({phoneNo:"", password:""})
    const [ userName, setUserName ] = useState(false);
    const [ pass , setPass ] = useState(false);
    const [ phn , setPhn ] = useState(false);
    const [ button1 , setbutton1 ] = useState(true);
    // const [ userId , setUserId ] = useState(null);

    const navigate=useNavigate();

    const handleInput=(e) => {
        const { name, value } = e.target;
        setUserInfo({...userInfo, [name] : value});
    }
    const handleChange=() => {
        const { phoneNo }=userInfo;
        if (phoneNo.length===10)
        {
            setbutton1(false)
            setUserName(true)
        }
        else{
            setPhn(true);
        }
    }
    const handleAdd=async()=>{
        try{                                                  
            const response = await axios.post('http://192.168.1.150:8080/user/login',userInfo);
            console.log(response.data.message,"------")
            if(response.data.message===true){ 
                const user = {
                    id: response.data.userId,
                    name: response.data.name,
                  };
                  console.log("login page",response.data.userId);
                  onLogin(user);
                navigate("/");
            }else{
                setPass(true)
            }
        }
        catch(error){
            console.log("error",error)
        }
    }
    
    return ( 
        
        <div className={style.loginform}>
            <div className={style.Log}>
                    <div className={style.login}> 
                        <h1 style={{color:'white',fontSize:'35px',textAlign:'center'}}>Phoneix</h1>
                        <h2 style={{fontSize:"15px",textAlign:'center',position:'relative',bottom:'4em'}}>Your Trusted Partner Phoneix</h2>
                        {!userName ?( 
                            <>                      
                            <input type='tel' name='phoneNo' placeholder='Phone No' value={userInfo?.phoneNo} onChange={handleInput} maxlength="10" required/>
                            {phn && <h2 style={{color:"black",fontSize:"14px",margin:'6px 0px -5px'}}>Enter the valid Number</h2>}
                            </>
                            ):( 
                            <>
                            <input type='password' name='password' placeholder='Password' value={userInfo?.password} onChange={handleInput} required/>
                            {pass && <h2 style={{color:"black",fontSize:"14px",margin:'6px 0px -5px'}}>Incorrect Password</h2>}
                            </>  
                            )
                        }
                    
                    <div className={style.buttontag}>
                        {button1 ? (
                            <button onClick={handleChange}>Continue</button>
                        ):(
                            <button onClick={handleAdd}>Submit</button>
                        ) 
                         }
                    </div>
                    <div className={style.SIGNUP}>  
                        <p style={{ position: 'relative', top: '7px', margin: 0 }}>Create New Account</p>
                        <Button onClick={()=>navigate("/signup")}>SignUp</Button>
          
                       
                    </div>
                    </div>
            </div>
        </div>
);
}
export default Login;













// import { FormField, Form} from 'semantic-ui-react'
// import { userDetails } from './Json';
/* <Form>
<FormField> 
</FormF/</Form>ield> 
<FormField> 
</FormField> 
 </Form> */
 /* <Link to="/">Login</Link> *
 <Link to="/signup" ></Link> 
 <button onClick={checkdata}>Login</button> 
 <div className={style.back'>
<button><Link to="/" className={style.back1">Back</Link></button>
</div> */