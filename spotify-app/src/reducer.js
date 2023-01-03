// Initial empty DataLayer slice
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    top_artists: null,
    discover_weekly: null,
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
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default: 
            return state;
    }
};

export default reducer;