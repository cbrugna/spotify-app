import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue(); // Remember, this is how we pull from the Datalayer
    console.log("This is what's in playlists in Sidebar.js: ", playlists)

    return (
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

            <SidebarOption title="Tech"/>
            <SidebarOption title="Techno"/>
            <SidebarOption title="House"/>

        </div>
    )
}

export default Sidebar
