
import React, { useEffect, useState } from 'react'


const CountDownTimer =()=>{

    const [seconds,setSeconts] = useState(0)
    const [minutes,setMinutes] =useState(3)
 
    useEffect(() => {
        
        if(seconds==0 ){
            setSeconts(59)
            setMinutes(prev=> prev-1)
            
            if(minutes==0){
               return setMinutes(2)
                
            }
        }
        else{
            setTimeout(()=>{

                setSeconts(prev => prev-1)
            },1000)
        }
       
        
        
        
    }, [seconds])


    return(
        <div>
            <h1>0{minutes}:{seconds>=10 ? '' : 0}{seconds}</h1>
        </div>
    )

}

export default CountDownTimer