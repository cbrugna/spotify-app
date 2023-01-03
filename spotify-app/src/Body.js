import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import SongRow from './SongRow'

function Body({ spotify, current_playlist_id }) {

    const [{ discover_weekly, top_tracks }, dispatch] = useDataLayerValue();
    console.log("API", spotify.getPlaylist(current_playlist_id));
    const current_playlist = spotify.getPlaylist(current_playlist_id);
    console.log("current_playlist", current_playlist);

    spotify.getPlaylist(current_playlist_id).then((current_playlist) => {
        console.log("Playlist object?", current_playlist);
    });

    return (

        <div className="body">
            <Header spotify={spotify} />
            <p>{current_playlist_id}</p>
            

            
        </div>

    )
}

export default Body

/*
<div className="body">
<p>I am the body.</p>
<Header spotify={spotify} />
<h2>Discover Weekly</h2>
<p>{discover_weekly?.description}</p>

<div className="body__songs">
    {discover_weekly?.tracks.items.map((item) => (
        <SongRow track={item.track}></SongRow>
    ))}
</div>

</div>

---

<div className="body">
            <p>I am the body.</p>
            <Header spotify={spotify} />
            <h2>Your Top Tracks</h2>

            <div className="body__songs">
                {top_tracks?.items.map((item) => (
                    <p>{item.name}</p>
                ))}
            </div>

            
        </div>
*/