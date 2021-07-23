import React, { useEffect, useState } from 'react'

import './betfield.css'

const BetField = ()=>{
 const[inputValue, setInputValue] = useState(1)
 
 const OnchangeHandler =(e)=>{
    //const value = parseFloat(e.target.value)
   setInputValue(e.target.value)

 }

 
    return(
        <div className="betField">
           <label className="betFieldLabel" htmlFor="bet">Bet</label>
           <span className="betFieldSpan">
               <input type='number' id="bet" name='bet' min='01' step='0.1' value={parseFloat(inputValue).toFixed(2)} onChange={OnchangeHandler}/>
           </span>
                            
        </div>
    )

}


export default BetField