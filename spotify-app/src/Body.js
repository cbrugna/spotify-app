import React, { useEffect} from 'react';
import { resolvePath } from 'react-router-dom'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import SongRow from './SongRow'


function Body({ spotify, current_playlist_id }) {

    const [ {current_playlist, current_playlist_tracks }, dispatch ] = useDataLayerValue();
    console.log("CURRENT_PLAYLIST LOG", current_playlist);

    useEffect(() => {
        if(current_playlist != null) {
            spotify.getPlaylistTracks(current_playlist_id).then((response) =>
                dispatch({
                type: "SET_CURRENT_PLAYLIST_TRACKS",
                current_playlist_tracks: response,
                })
            );
        }
    }, [current_playlist_id]);

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };
    

    return (

        <div className="body">
            <Header spotify={spotify} />
            <p>{current_playlist_id}</p>

            <div className="body__songs">
                {current_playlist_tracks?.items.filter((item, idx) => idx < 10).map((item) => (
                    <SongRow track={item.track} playSong={playSong}></SongRow>
                ))}
            </div>

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