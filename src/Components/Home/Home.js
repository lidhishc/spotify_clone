import React, { useEffect } from 'react'
import toast from '../others/common/toast'
import { spotifyService } from '../../Networks/spotify'

export default function Home() {

    useEffect(() => {
        spotifyService.setAccessToken()
        spotifyService.Spotify.getMe().then(user => {
            console.log(user);
        }).catch(e => {   // if token expaired it will redirect to login page
            toast('Someting went wrong!!')
            setTimeout(() => {
                window.location.replace('/login')
            }, 2000);
        })
    }, [])


    return (
        <div>
            Its Home
           
        </div>
    )
}
