import React from 'react'
import "./SongRow.css";

function SongRow({ track }) {
    return (
        <div className="songRow d-flex flex-row">

            <div class="p-2">
                <img id="songRowAlbum" className="songRow__album" src={track.album.images[0].url} alt=""></img>
            </div>
                
            <div class="p-2 my-auto">
                <p class="fw-bold">{track.name}</p>
            </div>
            
            <div class="p-2 my-auto">
                <p class="fw-light">
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "} {track.album.name}
                </p>
            </div>

            <div id="playButton" class="p-2 my-auto ms-auto">
                <p>P</p>
            </div>

            
        </div>
    )
}

export default SongRow
