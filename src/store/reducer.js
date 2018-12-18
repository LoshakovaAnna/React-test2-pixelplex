const initialState = {  
    list : [],
    step : 5000 
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TEXT' :
        {
            const newList = [];
            for (let i = 0; i < state.list.length; i++) {
                 newList[i] = state.list[i];
                
            }
            newList.push(action.payload);
            return {...state, list : newList};
        }
    /*    case 'DELETE_LIST' :
        {
            const newList = action.payload;
            return {...state, list : newList};
        }
        
        case 'DELETE_TEXT' :
        {
            const newList = state.list; 
            const index = newList.indexOf(action.payload);
            newList.splice(index, 1);
            return {...state, list : newList};
        }
      */  case 'DELETE_ITEM' :

        {    
            const    newList = state.list.concat([]); 
            newList.splice(action.payload, 1); 
            return {...state, list : newList};
        }
        /*case 'SET_NEW_TIMER' :

        {    
            return {...state, timer : action.payload};
        }*/
        case 'SET_NEW_STEP' :
         { 
            window.sessionStorage.removeItem('step');
            window.sessionStorage.setItem('step', action.payload);
            return {...state, step : action.payload};
        }
        case 'GET_SAVED_STEP' :
        {
            var data = window.sessionStorage.getItem('step');
            if ((data!==undefined) && (data !== null)){
                return {...state, step : data}
            }
            else return {state, step : 5000};
        }
        default  :  
            return state;
    }
};