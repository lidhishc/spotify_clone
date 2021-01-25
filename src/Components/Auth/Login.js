import React from 'react';
import './Auth.css';
import { spotifyService } from '../../Networks/spotify'
export default function Login() {
    return (

        <div className='login'>

            {/* Spotify Logo */}
            <img
                className='spotifyLogo'
                src={
                    'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
                }
                alt='spotify logo' />
            <a
                href={spotifyService.loginURL}
            >Login with Spotify</a>
        </div>


    )
}
