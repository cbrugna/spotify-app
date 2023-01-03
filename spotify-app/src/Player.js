import React from 'react'
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from "./Footer";

function Player() {
    return (
        /*
        <div>
            <h1>Welcome to Spotify</h1>
            <div className="player">
                <div className="player__body">
                    <Sidebar />
                    <Body />
                </div>
            </div>
            
            <Footer />
        </div>
        */
       <div>
        <div role="main" class="container">
            <h1 class="mt-5">Spotify</h1>
            <Sidebar />
            <Body />
        </div>

        
        <Footer />
        
       </div>
        
    )
}

export default Player
