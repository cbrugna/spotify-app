// Initial empty DataLayer slice
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    top_tracks: null,
    discover_weekly: null,
    current_playlist: null,
    current_playlist_tracks: null,
    item: null,
    playing: false,
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
        case "SET_TOP_TRACKS":
            return {
                ...state,
                top_tracks: action.top_tracks,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_CURRENT_PLAYLIST":
            return {
                ...state,
                current_playlist: action.current_playlist,
            };
        case "SET_CURRENT_PLAYLIST_TRACKS":
            return {
                ...state,
                current_playlist_tracks: action.current_playlist_tracks,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        default: 
            return state;
    }
};

export default reducer;