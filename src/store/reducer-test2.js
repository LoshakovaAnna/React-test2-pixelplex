const initialState = {  
    step : 5000 
}

export const ReducerSecond = (state = initialState, action) => {
    switch (action.type){
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