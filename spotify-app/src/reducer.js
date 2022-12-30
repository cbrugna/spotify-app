// Initial empty DataLayer slice
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
        
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, // Keep whatever is in the current state
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        default: 
            return state;
    }
};

export default reducer;