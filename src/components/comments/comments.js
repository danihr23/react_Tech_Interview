import React from 'react'

import { useSelector } from 'react-redux'

function Comments() {

    const comments = useSelector((store)=>store.allCommnents.comments);

    console.log(comments);


    return (
        <div>
           
           {comments.map(x=>{
               return(
                <div>
                {x.name}
            </div>
               )
              
           })}

        
        
            
        </div>
    )
}

export default Comments
