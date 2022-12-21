// Initial empty DataLayer slice
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
        
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, // Keep whatever is in the current state
                user: action.user 
            };
        default: 
            return state;
    }
};

export default reducer;