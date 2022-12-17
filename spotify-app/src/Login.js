import React from 'react'

function Login() {
    return (
        <div className="login">
            <img src={require("./images/spotify-logo.png")} alt="spotify logo"></img>
            <a className="btn btn-primary"
             data-bs-toggle="collapse"
             href="#collapseExample"
             role="button"
             aria-expanded="false"
             aria-controls="collapseExample">
            Login with Spotify
        </a>
        </div>
    )
}

export default Login;