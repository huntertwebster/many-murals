//reducer to store the artist information 
const profile = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return action.payload;
        default:
            return state;
    }
};

export default profile;