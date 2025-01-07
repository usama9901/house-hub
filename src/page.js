import React from 'react';
import { useParams } from 'react-router-dom';
import {HouseContent} from './Json'; 
import style from './scss/Page.module.scss'
// import { useNavigate } from 'react-router-dom';
const Page =()=>{
const { id } = useParams(); 
// const navigate=useNavigate();
  const housedata=HouseContent.filter((us)=>(us.id===id))
    return(
        <div>  
            <div className={style.HEADER}>
                <ul>
                    <li>Phoenix</li>
                    <li>Login</li>
                </ul>
            </div>
            {housedata.map((data)=>(
                <div>
                <h1>{data.title}</h1>
                <h2>{data.description}</h2>
                <h3>{data.sections?.map((da)=>(<ul>{da.header}</ul>))}</h3>
                <h3>{data.sections?.map((da)=>(<ul>{da.header}</ul>))}</h3>
                </div>
            ))}
            {housedata.map((data)=>(
                <div>
                <h1>{data.title}</h1>
                <h2>{data.description}</h2>
                <h3>{data.sections?.map((da)=>(<ul>{da.header}</ul>))}</h3>
                <h3>{data.sections?.map((da)=>(<ul>{da.header}</ul>))}</h3>
                </div>
            ))}
            {housedata.map((data)=>(
                <div>
                <h1>{data.title}</h1>
                <h2>{data.description}</h2>
                <h3>{data.sections?.map((da)=>(<ul>{da.header}</ul>))}</h3>
                <h3>{data.sections?.map((da)=>(<ul>{da.header}</ul>))}</h3>
                </div>
            ))}
        </div>
    );
}
export default Page;
