import React ,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './scss/signup.module.scss';
import { Button } from 'semantic-ui-react';
const Signup = () => {

    const [ userInfomation, setUserInfomation ] = useState({name:"",email:"",phoneNo:"", password:""})
    const navigate=useNavigate();
    const handleInput=(e) => {
        const { name, value } = e.target;
        setUserInfomation({...userInfomation, [name] : value});
    }
    const handleform =async()=> {
        const { name, email, phoneNo, password } = userInfomation;
         try{
             if (name!=="" && email!=="" && phoneNo!=="" && password!==""){

                 const response = await axios.post('http://192.168.1.150:8080/User/signUp',userInfomation);
                 if(response.data){
                     setUserInfomation({
                        name:"",email:"",phoneNo:"", password:""}
                        );
                        navigate("/login");
                    }
                alert("succes")
            }else{
                alert("Invalid Data")
            }
        }
        catch(error){
            console.log("error")
        }
        }
    return (  
        <div className={style.signupform}>
            <div className={style.sign}>
                <div className={style.signup}> 
                    <h1 style={{color:'white',fontSize:'35px',textAlign:'center',backgroundColor:"#5e23dc"}}>Phoneix</h1>       
                    <input type='text' placeholder='Name' name="name" value={userInfomation?.name} onChange={handleInput}required/>
                    <input type='text'  placeholder='Email' name="email" value={userInfomation?.email} onChange={handleInput}required/>
                    <input type='number'  placeholder='Phone No' name="phoneNo" value={userInfomation?.phoneNo} onChange={handleInput}required/>
                    <input type='password'  placeholder='Password' name="password" value={userInfomation?.password} onChange={handleInput}required/>
                </div>
                <div className={style.account}>
                    <p style={{ position: 'relative', top: '7px', margin: 0 }}>Already have an Account</p>
                    <Button onClick={()=>navigate("/login")}>login</Button>
                </div>
                <div className={style.buttontag1}>
                    <button type="submit" onClick={handleform}>SignUp</button>
                </div>
            </div>
        </div>
);
}
export default Signup;
/* <FormField>
<input id="input" type='text' style={{borderRadius:"25px"}} placeholder='Buyer / Seller'  name="type" value={userInfomation?.type} onChange={handleInput} required/>
</FormField> */