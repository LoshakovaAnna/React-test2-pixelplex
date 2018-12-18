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
