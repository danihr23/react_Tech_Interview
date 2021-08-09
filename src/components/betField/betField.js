import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'

import {betIncrease,betDecrease} from '../../actions/gameActions'
import BetFieldStyle from './betfield.module.css'

const BetField = ()=>{
 const[inputValue, setInputValue] = useState(1)
 
 const dispatch = useDispatch();



   //dispatch(bet(inputValue));

  
 const onclickDecreseBetHandler=()=>{
    
    if(inputValue>1){
        setInputValue(prev=> prev-0.2)
        dispatch(betDecrease())
    }
    
 }
 const onclickIncreaseBetHandler=()=>{
    setInputValue(prev=> prev+0.2)
    dispatch(betIncrease())
 }

 const onChangeBetHandler =(e)=>{
    const value= e.target.value
 }
 



    return(
    <div className={BetFieldStyle.betField}>
           <label className={BetFieldStyle.betFieldLabel} htmlFor="bet">Bet</label>
           <span className={BetFieldStyle.betFieldSpan}>
           <button onClick={onclickIncreaseBetHandler} >+</button>
               <input type='text'  className={BetFieldStyle.bet} id="bet" name='bet' min='1'  value={parseFloat(inputValue).toFixed(2)}  onChange={e=>onChangeBetHandler(e)}/>
               <button onClick={onclickDecreseBetHandler}>-</button>
           </span>
                            
        </div>
    )

}


export default BetField