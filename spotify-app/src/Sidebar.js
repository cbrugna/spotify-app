import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer';
import { Link } from 'react-router-dom';
import Player from './Player';


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue(); // Remember, this is how we pull from the Datalayer

    return (
        
        <ul class="sidebar nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Search</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">Library</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Playlists</a>
                <div class="dropdown-menu">
                    {playlists?.items?.map((playlist) => (
                        <span onClick={() => dispatch({type: 'SET_CURRENT_PLAYLIST', current_playlist: playlist,})}>
                            <a class="dropdown-item" href="#">
                                {playlist.name}
                                </a>
                        </span>
                    ))}

                <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Idk</a>
                </div>
            </li>
        </ul>

        /*
        <div className="sidebar">
            <img className="sidebar__logo" src={require("./images/spotify-logo.png")} alt="spotify logo"></img>
            <SidebarOption title="Home" Icon="HomeIcon" />
            <SidebarOption title="Search" Icon="SearchIcon" />
            <SidebarOption title="Library" Icon="LibraryIcon" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />


            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
        */
    )
}

export default Sidebar
