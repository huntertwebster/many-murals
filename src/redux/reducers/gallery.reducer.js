//reducer to store the gallery data 
const gallery = (state = [], action) => {
    switch (action.type) {
        case 'SET_GALLERY':
            return action.payload;
        default:
            return state;
    }
};

export default gallery;