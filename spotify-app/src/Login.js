import React from 'react'
import { accessUrl } from "./spotify";

function Login() {
    return (
        <div className="login">
            <img src={require("./images/spotify-logo.png")} alt="spotify logo"></img>
            <a href={accessUrl}
             className="btn btn-primary"
             >
            Login with Spotify
            </a>
        </div>
    )
}

export default Login;