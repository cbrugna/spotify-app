import React from 'react'
import { useDataLayerValue } from './DataLayer';
import './Header.css';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <h4>{user?.display_name}</h4>
            <h1></h1>
        </div>
    )
}

export default Header
