import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import SongRow from './SongRow'

function Body({ spotify }) {

    const [{ discover_weekly, top_tracks }, dispatch] = useDataLayerValue();
    console.log("Discover weekly object", discover_weekly);
    console.log("Top tracks obj", top_tracks);

    return (

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
*/