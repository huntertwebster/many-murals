//reducer to store the artist information 
const map = (state = [], action) => {
    switch (action.type) {
        case 'SET_MAP':
            return action.payload;
        default:
            return state;
    }
};

export default map;