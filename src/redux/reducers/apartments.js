const initialState = [];

const apartmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_APARTMENTS': 
            return [...action.payload]
        default:
            return state;
    }
}

export default apartmentsReducer