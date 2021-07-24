import React, { useEffect, useState } from 'react'
import Buttons from "../buttons/buttons"
import BetField from '../betField/betField'
import CountDownTimer from '../countDownTimer/countDownTimer'
import PlaysField from '../playsField/playsField'

import './gameField.css'


const GameField =()=>{
 
        return(
            <div className="gameField">
                <h1>Game Tech</h1>
              <Buttons/>
              <div className='betsInputs'>
                  <h2>Please, place your bet</h2>
                  <section className='betFieldsInput'>
                  <BetField/>
                  <PlaysField/>
                  </section>
                    <CountDownTimer/>
              </div>
              
            
            </div>
    
        )
        

    
}

export default GameField;