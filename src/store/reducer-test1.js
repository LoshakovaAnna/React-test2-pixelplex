const initialState = {  
    list : []
}

export const ReducerFirst = (state = initialState, action) => {
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
        case 'DELETE_ITEM' :
        {    
            const    newList = state.list.concat([]); 
            newList.splice(action.payload, 1); 
            return {...state, list : newList};
        }
        
        
        default  :  
            return state;
    }
};