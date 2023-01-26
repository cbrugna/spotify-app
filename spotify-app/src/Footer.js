import React, { useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import "./Footer.css"

function Footer({ spotify }) {
    const [{ item, playing }, dispatch] = useDataLayerValue();
    console.log("ITEMITEMITEM", item);

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
          console.log(r);
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
      }, [spotify]);

    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    }



    return (

        <div className="container footer fixed-bottom">

            <div class="row d-flex justify-content-between">

                <div class="col-sm footer__album__cover">
                    <img id="cover" src={(item != null) ? (item?.album.images[0].url) : (require("./images/default-album-cover.png"))} alt="album cover" />
                </div>

                <div class="p-2 col-sm my-auto">
                    {playing ? (
                        <a href="#" onClick={handlePlayPause}>Pause</a>
                    ) : (
                        <a href="#" onClick={handlePlayPause}>Play</a>
                    )}
                </div>

                
            
            </div>
            
        </div>
        
    )
}

export default Footer


//<img id="cover" src={(item != null) ? (item?.album.images[0].url) : (require("./images/default-album-cover.png"))} alt="album cover" />