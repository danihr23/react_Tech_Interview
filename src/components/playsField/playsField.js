import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'

import {playsIncrease,playsDecrease} from '../../actions/gameActions'
import PlaysFieldStyle from './playsField.module.css'

const PlaysField = ()=>{

 const[inputValue, setInputValue] = useState(1)
 const dispatch = useDispatch();
 
 



 const onclickDecreaseHandler=()=>{
    if(inputValue>1){
        setInputValue(prev=> prev-1)
        dispatch(playsDecrease())
    }
    
 }
 const onclickIncreaseHandler=()=>{
    setInputValue(prev=> prev+1)
    dispatch(playsIncrease())
 }

 const onChangePlaysHandler =(e)=>{
    const value= e.target.value
 }

 
    return(
        <div className={PlaysFieldStyle.playsField}>
           <label className={PlaysFieldStyle.playsFieldLabel} htmlFor="plays">Plays</label>
           <span className={PlaysFieldStyle.playsFieldSpan}>
               <button  className={PlaysFieldStyle.increaseDecreaseBtn} onClick={onclickIncreaseHandler} >+</button>
               <input type='text' className={PlaysFieldStyle.plays} id="plays" name='plays' min='1'  value={parseInt(inputValue)} onChange={e=>onChangePlaysHandler(e)} />
               <button className={PlaysFieldStyle.increaseDecreaseBtn} onClick={onclickDecreaseHandler}>-</button>
           </span>
                            
        </div>
    )

}


export default PlaysField