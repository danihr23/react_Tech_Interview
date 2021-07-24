import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './betfield.css'

const BetField = ()=>{
 const[inputValue, setInputValue] = useState(1)
 
 const dispatch = useDispatch();



   dispatch({type:"BET",amount:inputValue})

  
 const onclickDecreseBetHandler=()=>{
    
    if(inputValue>1){
        setInputValue(prev=> prev-0.2)
    }
     //dispatch({type:"BET_DECREASE",amount:0.2})
 }
 const onclickIncreaseBetHandler=()=>{
    setInputValue(prev=> prev+0.2)
    //dispatch({type:"BET_ICREASE",amount:0.2})
 }

 
    return(
        <div className="betField">
           <label className="betFieldLabel" htmlFor="bet">Bet</label>
           <span className="betFieldSpan">
           <button onClick={onclickIncreaseBetHandler} >+</button>
               <input type='text' id="bet" name='bet' min='1'  value={parseFloat(inputValue).toFixed(2)} />
               <button onClick={onclickDecreseBetHandler}>-</button>
           </span>
                            
        </div>
    )

}


export default BetField