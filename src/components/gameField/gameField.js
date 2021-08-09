import React, { useEffect, useState } from 'react'
import Buttons from "../buttons/buttons"
import BetField from '../betField/betField'
import CountDownTimer from '../countDownTimer/countDownTimer'
import PlaysField from '../playsField/playsField'
import PriceField from '../priceField/priceField'
import Comments from '../comments/comments'
import GameStyle from './gameField.module.css'

const GameField =()=>{
 
        return(
            <div className={GameStyle.gameField}>
                <h1>Game Tech</h1>
              <Buttons/>
              <div className={GameStyle.betsInputs}>
                  <h2>Please, place your bet</h2>
                  <section className={GameStyle.betFieldsInput}>
                  <BetField/>
                  <PlaysField/>
                  <PriceField/>
                  </section>
                    <CountDownTimer/>
                    <section className={GameStyle.commentsField}>
                    <Comments/>
                    </section>
              </div>
              
            
            </div>
    
        )
        

    
}

export default GameField;