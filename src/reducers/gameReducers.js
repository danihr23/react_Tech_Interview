const initialState ={
    count: 0,
    bet:1,
    plays:1,
}

 export const gameReducers =(state=initialState,action)=>{
     switch(action.type){
         case "BUTTONS_COUNT":
             return {...state, count: action.amount};

         case "BET_ICREASE":
            return {...state, bet: state.bet+ action.amount};
            case "BET_DECREASE":
            return {...state, bet: state.bet-action.amount};
         case "PLAYS_INCREASE":
            return {...state, plays:state.plays+ action.amount};
            case "PLAYS_DECREASE":
            return {...state, plays:state.plays - action.amount};
         default:
             return state;
     }
    

}