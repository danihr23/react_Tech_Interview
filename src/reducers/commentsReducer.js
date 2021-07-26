
const initialState ={
    comments:[]
}

export const commentsReducer=(state=initialState, action)=>{

    switch(action.type){
        case "COMMENTS":
        return {...state, comments: action.amount}
        default:
            return state;
    }

}