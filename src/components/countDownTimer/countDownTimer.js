
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import{comments} from '../../actions/gameActions'

const CountDownTimer =()=>{

    const [seconds,setSeconts] = useState(0)
    const [minutes,setMinutes] =useState(3)

    const dispatch = useDispatch();
    const arr=[]
    useEffect(() => {

      
        
        if(seconds==0 ){
           
            fetch(`https://jsonplaceholder.typicode.com/comments?`)
            .then(res=> res.json())
            .then(result=>{
                result.map(x=>{
                    //console.log(x.id);
                    if(x.id <=12){
                        arr.push(x)
                    }
                })
                dispatch(comments(arr));
            })
               
           
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