import React, { useEffect, useState } from 'react'
import Buttons from "../buttons/buttons"
import BetField from '../betField/betField'
import './gameField.css'
const GameField =()=>{
 
  



   
        return(
            <div className="gameField">
                <h1>Game Tech</h1>
              <Buttons/>
              <div className='betsInputs'>
                  <h2>Please, place your bet</h2>
                  <section>
                  <BetField/>
                  </section>
              
              </div>
              
            
            </div>
    
        )
        

    
}

export default GameField;