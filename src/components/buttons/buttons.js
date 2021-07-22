import React, { useEffect, useState } from 'react'

import './buttons.css'



const Buttons =() =>{

    const [btns,setBtns]= useState([])
    const [clickState,setClickState]= useState({})
    const [count,setCount]= useState(0)
    let count1 =0;

  useEffect (()=>{

    let bntNumbers =[];

    for (let i = 1; i <= 20; i++) {
        bntNumbers.push(i);
        
    }

    setBtns(bntNumbers)
  },[])


  const onclickHandler =(e)=>{
    e.preventDefault();

    //e.target.disabled=true;
    let state =clickState[e.target.name];
   
    console.log(state);
     if(state!=true ){
        setCount(prev=>prev+1)
         console.log("dadsada");
         e.target.style.backgroundColor = "red"
        return setClickState({...clickState,  [e.target.name]: true});
        

    }
    setClickState({...clickState,  [e.target.name]: false});
    setCount(prev=>prev-1);
    e.target.style.backgroundColor = "lightblue"
      //setCount(clickState.length)
  }

 


  console.log(count);
  console.log(clickState);

    return(
      <div className='buttonsWrap'>
          {btns.map(x=>{
                  return(
                      <article>
                         
                          <button type="button" className='btnClasic {btnColor}'  key={x} value={x} name={x}  onClick={(e)=>onclickHandler(e)}>{x}</button>
                
                  </article>
                  )
              })}
      </div>
    )

}

export default Buttons