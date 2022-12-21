import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

// Instance of obj responsible for interaction between Spotify and our app
const spotify = new SpotifyWebApi();

function App() {
   
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue(); // For interacting with the DataLayer *notice "dispatch"

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // Store token in the state
      setToken(_token);

      // Giving access token to SpotifyWebApi
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
  }, []);
  
  console.log("USER: ", user);
  
  
  return (
    <div className="App">
      <header className="App-header">
        {
          token ? (
            <Player />
          ) : (
            <Login />
          )
        }
      </header>
    </div>
  );
}

export default App;
