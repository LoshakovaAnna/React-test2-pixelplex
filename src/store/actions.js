export const addTextToList = (newText) =>{
    return {
        type: 'ADD_TEXT' ,
        payload: newText
    };
};

export const deleteItem = (index) =>{
    return {
        type: 'DELETE_ITEM'  ,
        payload: index
    };
};

export const setNewStep = (newStep) =>{
    return {
        type: 'SET_NEW_STEP'  ,
        payload: newStep
    };
}; 

export const getSavedStep = () =>{
    return {
        type: 'GET_SAVED_STEP'  ,
        payload: ""
    };
}; 
/*
export const setTimer = (newTimer) =>{
    return {
        type: 'SET_NEW_TIMER'  ,
        payload: newTimer
    };
}; 
*/