import React, { useEffect, useState } from 'react'

import './buttons.css'

const Buttons =() =>{

    const [btns,setBtns]= useState([])

  useEffect (()=>{

    let bntNumbers =[];

    for (let i = 1; i <= 20; i++) {
        bntNumbers.push(i);
        
    }

    setBtns(bntNumbers)
  },[])

  console.log(btns);


    return(
      <div className='buttonsWrap'>
          {btns.map(x=>{
                  return(
                      <article>
                  <button className='btnClasic'  key={x} value={x} name={x}>{x}</button>
                  </article>
                  )
              })}
      </div>
    )

}

export default Buttons