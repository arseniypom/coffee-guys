
const initialState = {
    items: [],
    isLoaded: false
}

const coffee = (state = initialState, action) => {
    if (action.type === 'SET_COFFEE') {
        return {
            ...state,
            items: action.payload
        }
    }
    return state;
};

export default coffee;