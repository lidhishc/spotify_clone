

const authSpotifyUrl = `https://accounts.spotify.com/authorize`

const scopes = [
    'user-read-recently-played',
    'user-read-playback-position',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'

];

const redirect_uri = "http://localhost:3000/"

export const loginURL = `${authSpotifyUrl}?response_type=token&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&scope=${scopes.join("%20")}&redirect_uri=${redirect_uri}&show_dialog=true`