import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {buttonCount} from '../../actions/gameActions'
import './buttons.css'



const Buttons =() =>{

    const [allButtonsNumbers,setAllButtonsNumbers]= useState([])
    const [clickState,setClickState]= useState({})
    const [clickedCount,setClickedCount]= useState(0)
    const dispatch = useDispatch();

  useEffect (()=>{

    let bntNumbers =[];

    for (let i = 1; i <= 80; i++) {
        bntNumbers.push(i);
        
    }

    setAllButtonsNumbers(bntNumbers)
  },[])

  dispatch(buttonCount(clickedCount))
  const OnclickHandler =(e)=>{
    e.preventDefault();

    
    let buttonState =clickState[e.target.name];
   
    //console.log(buttonState);
   
   
 if(buttonState!=true ){
    setClickedCount(prev=>prev+1)
        
         e.target.style.backgroundColor = "red"
         
        return setClickState({...clickState,  [e.target.name]: true});
        

    }
    else if(buttonState=true){
       
        setClickedCount(prev=>prev-1);
        
        e.target.style.backgroundColor = "lightblue"
        return setClickState({...clickState,  [e.target.name]: false});
    }
    
            
    
      
  }

 


//   console.log(clickedCount);
//   console.log(clickState);

    return(
      <div className='buttonsWrap'>
          {allButtonsNumbers.map(x=>{
              if(clickedCount==12 && clickState[x]!=true){

                
                return(
                    <article>
                       
                        <button type="button" className='btnClasic ' disabled  key={x} value={x} name={x}  onClick={(e)=>OnclickHandler(e)}>{x}</button>
              
                </article>
                )
              }
              else{
                     return(
                      <article>
                         
                          <button type="button" className='btnClasic'  key={x} value={x} name={x}  onClick={(e)=>OnclickHandler(e)}>{x}</button>
                
                  </article>
                  )
              }
               
              })}
      </div>
    )

}

export default Buttons