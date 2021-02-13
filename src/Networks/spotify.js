import spotify from 'spotify-web-api-js'
import { toastFuncions } from '../Components/others/common/toast';
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

export const getTokenFromUrl = () => {
    window.location.hash.substring(1).split('&').forEach(
        element => {
            let parts = element.split('=')
            localStorage.setItem(parts[0], parts[1])

        }
    );
    window.location.hash = ""
    if (localStorage.getItem('access_token')) {
        toastFuncions.success("Loged in");
        setTimeout(() => {
            window.location.replace('/home');
        }, 1000);

    } else (window.location.replace('/login'))
}

const loginURL = `${authSpotifyUrl}?response_type=token&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&scope=${scopes.join("%20")}&redirect_uri=${redirect_uri}&show_dialog=true`

const Spotify = new spotify(); // to do spotify functions

const setAccessToken = () => {
    Spotify.setAccessToken(localStorage.getItem('access_token'))
}

export const spotifyService = {
    Spotify,
    setAccessToken,
    loginURL
}