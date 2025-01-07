import axios from 'axios';
import React, { useState } from 'react'
import style from './scss/seller.module.scss';
import { Input } from 'semantic-ui-react';
const Seller = ({UserId}) => {
  const [sellerInfo, setSellerInfo]=useState({name:"",street:"",description:"", city:"", price:"", pincode:"", contact:""})
  const [rent, setRent]=useState({ specification:"", availability:"" })
  const [buy, setBuy]=useState({ specifications:"", area:""})
  const [plot, setPlot]=useState({ size:"", type:"",watersupply:""})
  const [imgInfo, setImgInfo]=useState({photo:""})
  const { id }=UserId;
  const Rental = {...sellerInfo, ...rent}
  const Seller = {...sellerInfo, ...buy, id}
  const Plotter = {...sellerInfo, ...plot, id}
  const [ visible , setVisible ]=useState(true);                 
  const [ rentvisible , setRentVisible ]=useState(false);                 
  const [ buyvisible , setBuyVisible ]=useState(false);                 
  const [ plotvisible , setPlotVisible ]=useState(false);       
  const HandleButton =(e)=>
  {
    if (e===1)
    {
      setRentVisible(!rentvisible)
      setBuyVisible(false)
      setPlotVisible(false)
    } 
    else if (e===2)
    {
      setBuyVisible(!buyvisible)
      setRentVisible(false)
      setPlotVisible(false)
    }
    else if (e===3)
    {
      setPlotVisible(!plotvisible)
      setBuyVisible(false)
      setRentVisible(false)
    }
  }   

  const handleInput = (e) => {
    const { name , value } = e.target;
    setSellerInfo({...sellerInfo, [name] : value});
  };
  // convert image into base64
  const handleFileChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);

    const fileReaders = fileArray.map(file => {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file); 
      });
    });

    Promise.all(fileReaders).then(base64Images => {
      setImgInfo(base64Images);
    }).catch(error => {
      console.error('Error reading files:', error);
    });
  }

  const handleSubmit = async() => {
    console.log("image--------",imgInfo);
    console.log("userId--------",UserId);
    setVisible(true)
    const {name, street, description, price, city, contact, pincode}=sellerInfo;
    const {specification, availability}=rent;
    const {specifications, area}=buy;
    const {size,type, watersupply}=plot;
    // const { photo }=imgInfo;
    if(name!=="" && contact.length===10) 
    {
      if (specification!=="" && availability!=="")
      {
        setVisible(false)
        // Rent
        if (street!=="" && description!==""&& price!==""&& pincode!=="" && city!=="")
        {
          const response = await axios.post('http://192.168.1.150:8080/User/createRentalHouse',Rental)
          await axios.post('http://192.168.1.150:8080/User/uploadMultimedia',{photo:imgInfo})
          // const response = await axios.post('http://192.168.1.150:8080/User/createRentalHouse',{Rental:[sellerInfo,rent]})
          if (response)
          {
            console.log("---",response);
          }

        }
      }
      else if (specifications!=="" && area!=="")
      {
        setVisible(false)  
        // Buy or sell
        if (street!=="" && description!==""&& price!==""&& pincode!=="" && city!=="") 
        {
          const response = await axios.post('http://192.168.1.150:8080/User/createHouseToSale',Seller)
          await axios.post('http://192.168.1.150:8080/User/uploadMultimedia',imgInfo)
          // const response = await axios.post('http://192.168.1.150:8080/User/createHouseToSale',{Seller:[sellerInfo,buy]})
          if (response)
          {
            console.log("====",response);
          }
        } 
      }
      else if (size!=="" && type!==""&& watersupply!=="")
      {
        setVisible(false)
        //plot
        if (street!=="" && description!==""&& price!==""&& pincode!=="" && city!=="")
        {
          const response = await axios.post('http://192.168.1.150:8080/User/createPlotToSale',Plotter)
          // const response = await axios.post('http://192.168.1.150:8080/User/createPlotToSale',{Plot:[sellerInfo,plot]})
          await axios.post('http://192.168.1.150:8080/User/uploadMultimedia',imgInfo)
          if (response)
          {
            console.log("()()",response);
          }
        }
      }
      //   console.log(imgInfo);
      //   if (response1.data){
      //     alert("Succesfully Submitted")
      //   }
    
      // else{
      //   alert("Enter All Data")
      // }
    }
    else{
      alert("Enter All Data")
    }
  }
  return (
    <div className={style.TOPSELL}>
      <div className={style.SELLER}>
        <h1 className={style.HEADER}>New to Housing? Let’s get you started</h1>
        {visible?(
          <>
            <div className={style.SELLERINPUT}>
              <input type="text" placeholder='Name' name="name" value={sellerInfo?.name} onChange={handleInput}/>
              <input type="number" placeholder='Contact' name="contact" value={sellerInfo?.contact} onChange={handleInput}/>
            </div>
            <div className={style.TYPES}>
              <div className={style.TYPE}>
                <button onClick={()=>HandleButton(1)}>Rent</button>
                <button onClick={()=>HandleButton(2)}>Sell</button>
                <button onClick={()=>HandleButton(3)}>Plot</button>
              </div>
            </div>
            <div className={style.ALLTYPE}>
              <div className={style.RENT}>
                { rentvisible &&
                  <>
                    <label htmlFor="specification" style={{fontSize:"20px",margin:"5px",color:"black",fontWeight:"bolder"}}>Specification</label>
                    <Input type="number" placeholder='BHK' name="specification" value={rent?.specification} onChange={(e)=>{const{ name, value }=e.target;setRent((prevBuy)=>({...prevBuy,[name]: value}));}}/>  
                    <label htmlFor="availability" style={{fontSize:"20px",margin:"5px",color:"black",fontWeight:"bolder"}}>Availability</label>
                    <Input type="number" placeholder='Month' name="availability" value={rent?.availability} onChange={(e)=>{const{ name, value }=e.target;setRent((prevBuy)=>({...prevBuy,[name]: value}));}}/>  
                    
                  </>
                }
              </div>
              <div className={style.BUY}>
                { buyvisible &&
                  <>
                    <label htmlFor="specification" style={{fontSize:"20px",margin:"5px",color:"black",fontWeight:"bolder"}}>Specification</label>
                    <Input type="text" placeholder='BHK' name="specifications" value={buy?.specifications} onChange={(e)=>{const{ name, value }=e.target;setBuy((prevBuy)=>({...prevBuy,[name]: value}));}}/>  
                    <label htmlFor="area" style={{fontSize:"20px",margin:"5px",color:"black",fontWeight:"bolder"}}>Area</label>
                    <Input type="text" placeholder='Square feet' name="area" value={buy?.area} onChange={(e)=>{const{ name, value }=e.target;setBuy((prevBuy)=>({...prevBuy,[name]: value}));}}/>  
                    
                  </>
                }
              </div>
              <div className={style.PLOT}>
                { plotvisible &&
                  <>
                    <label htmlFor="size" style={{fontSize:"20px",margin:"5px",color:"black",fontWeight:"bolder"}}>Size</label>
                    <Input type="text" placeholder='Square Feet' name="size" value={plot?.size} onChange={(e)=>{const{ name, value }=e.target;setPlot((prevBuy)=>({...prevBuy,[name]: value}));}}/>  
                    <label htmlFor="watersupply" style={{fontSize:"20px",margin:"5px",color:"black",fontWeight:"bolder"}}>Watersupply</label>
                    <Input type="text" placeholder='Yes / No' name="watersupply" value={plot?.watersupply} onChange={(e)=>{const{ name, value }=e.target;setPlot((prevBuy)=>({...prevBuy,[name]: value}));}}/>  
                    <label htmlFor="type" style={{fontSize:"20px",margin:"5px",color:"black",fontWeight:"bolder"}}>Type</label>
                    <Input type="text" placeholder='Resident/Commercial/Agri' name="type" value={plot?.type} onChange={(e)=>{const{ name, value }=e.target;setPlot((prevBuy)=>({...prevBuy,[name]: value}));}}/>        
                  </>
                }
              </div>
            </div>
          </>
          ):(

          <div className={style.SELLERINPUT}>
            <input type="text" placeholder='Street' name="street" value={sellerInfo?.street} onChange={handleInput}/>
            <input type="text" placeholder='City' name="city" value={sellerInfo?.city} onChange={handleInput}/>
            <input type="number" placeholder='Pincode' name="pincode" value={sellerInfo?.pincode} onChange={handleInput}/>
            <input type="number" placeholder='Price' name="price" value={sellerInfo?.price} onChange={handleInput}/>
            <textarea className={style.TEXTBOX} placeholder='Description' name="description" value={sellerInfo?.description} onChange={handleInput}/>
            <p></p>
            <input  className={style.IMAGES} type="file" multiple name="photo" value={imgInfo?.photo} onChange={handleFileChange}/>
          </div>
          )}
        <div className={style.BUTTON}>
          {visible ? (
            <button onClick={(handleSubmit)}>Add Address and price</button>
            
          ):(
            <button onClick={(handleSubmit)}>Submit</button>
          )}
        </div>
      </div>
    </div>
  )
}
export default Seller;