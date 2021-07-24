import React, { useEffect, useState } from 'react'

import './playsField.css'

const PlaysField = ()=>{

 const[inputValue, setInputValue] = useState(1)
 
 const OnchangeHandler =(e)=>{
    
   setInputValue(e.target.value)

 }

 
    return(
        <div className="playsField">
           <label className="playsFieldLabel" htmlFor="plays">Plays</label>
           <span className="playsFieldSpan">
               <input type='number' id="plays" name='plays' min='1' step='1' value={parseInt(inputValue)} onChange={OnchangeHandler}/>
           </span>
                            
        </div>
    )

}


export default PlaysField