import React, { useEffect } from 'react'
import { spotifyService } from '../../Networks/spotify'





export default function Home() {

    useEffect(() => {
        spotifyService.setAccessToken()
        spotifyService.Spotify.getMe().then(user => {
            console.log(user);
        })
    }, [])


    return (
        <div>
            Its Home
        </div>
    )
}
