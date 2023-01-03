import React from 'react'
import "./Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from './Header'

function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <p>I am the body.</p>
            <Header spotify={spotify} />
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>

            <div className="body__songs">
                {discover_weekly?.tracks.items.map((item) => (
                    <p>Hello</p>
                ))}
            </div>
        </div>

        
    )
}

export default Body
