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