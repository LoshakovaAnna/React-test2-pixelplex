const initialState = {  
    list : []
};

export const ReducerFirst = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TEXT_TO_LIST' :
        {            
            const  newList = state.list.concat([]); 
            newList.push(action.payload);
            return {...state, list : newList};
        }
        case 'DELETE_ITEM' :
        {    
            const  newList = state.list.concat([]); 
            newList.splice(action.payload, 1); 
            return {...state, list : newList};
        }
        default  :  
            return state;
    };
};