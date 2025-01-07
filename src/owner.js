import React, { useEffect, useState } from 'react';
import style from './scss/owner.module.scss';
import axios from 'axios';
const Owner = () =>
{
    const [ property , setProperty ]=useState({image:"",price:"",name:"",address:"",description:"",conatct:""})
    useEffect(()=>
    {
        const fetchData = async() =>
        {   
            try{

                const response=await axios.get('http://192.168.1.114:8080/User/show')
                const data=response.data;
                setProperty({
                    image: data.image,
                    price: data.price,
                    name: data.name,
                    address: data.address,
                    description: data.description,
                    contact: data.contact
                });
            }
            catch(error)
            {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    },[])
    return (
        <div className={style.MAINOWNER}>
            <div className={style.OWNER}>
                <div className={style.LEFT}>
                    <div classname={style.IMAGE}>
                        <img src={property.image} alt="house" style={{width:'10em',borderRadius:'15px', boxShadow:'5px 5px 10px grey'}}/>
                    </div>
                    <div className={style.PRICE}>
                        <h3>{property.price}</h3>
                    </div>
                </div>
                <div className={style.RIGHT}>
                    <div className={style.DETAILS}>
                        <h2>{property.name}</h2>
                        <h4>{property.address}</h4>
                        <p>{property.description}</p>
                    </div>
                    <div className={style.BUTTON}>
                        <button>{property.conatct}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Owner;