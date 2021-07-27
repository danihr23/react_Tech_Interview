import React from 'react'

import { useSelector } from 'react-redux'

function Comments() {

    const comments = useSelector((store)=>store.allCommnents.comments);

    const count = useSelector((store) => store.game.count)
    const sortComents = comments.sort(function(a,b){
        return b.id - a.id
    })
    console.log(sortComents);


    return (
        <div>
           
           {sortComents.map((x)=>{

               
                if(count==x.id ){
                    return(
                        <div style={{color: "red"}}>
                        {x.name}
                    </div>
                       )
                }else{
                    return(
                        <div >
                        {x.name}
                    </div>
                       )
                }
               
             
              
           })}

        
        
            
        </div>
    )
}

export default Comments
