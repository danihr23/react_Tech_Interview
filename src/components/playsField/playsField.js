import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'

import {plays} from '../../actions/gameActions'
import './playsField.css'

const PlaysField = ()=>{

 const[inputValue, setInputValue] = useState(1)
 const dispatch = useDispatch();
 
 
    
 dispatch(plays(inputValue));


 const onclickDecreaseHandler=()=>{
    if(inputValue>1){
        setInputValue(prev=> prev-1)
    }
    //dispatch({type:"PLAYS_DECREASE",amount:1})
 }
 const onclickIncreaseHandler=()=>{
    setInputValue(prev=> prev+1)
    //dispatch({type:"PLAYS_INCREASE",amount:1})
 }

 
    return(
        <div className="playsField">
           <label className="playsFieldLabel" htmlFor="plays">Plays</label>
           <span className="playsFieldSpan">
               <button  className="increaseDecreaseBtn" onClick={onclickIncreaseHandler} >+</button>
               <input type='text' id="plays" name='plays' min='1'  value={parseInt(inputValue)} />
               <button className="increaseDecreaseBtn" onClick={onclickDecreaseHandler}>-</button>
           </span>
                            
        </div>
    )

}


export default PlaysField