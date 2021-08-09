
export  const buttonCount =(amount)=>{
    return {type:"BUTTONS_COUNT",amount:amount}

}
 export const betIncrease =()=>{
    return {type:"BET_ICREASE",amount:0.2}

}
export const betDecrease =()=>{
    return {type:"BET_DECREASE",amount:0.2}

}

 export const playsIncrease =()=>{
    return{type:"PLAYS_INCREASE",amount:1}

}
export const playsDecrease =()=>{
    return{type:"PLAYS_DECREASE",amount:1}

}

export const comments =(amount)=>{
    return{type:"COMMENTS",amount:amount};
}

