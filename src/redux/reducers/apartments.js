const initialState = {
    apartments: [],
    isLoaded: false
};

const apartmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_APARTMENTS': 
            return {
                apartments: [...action.payload],
                isLoaded: true
            }
        default:
            return state;
    }
}

export default apartmentsReducer