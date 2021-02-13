import React, { useEffect, useState } from "react";
import { toastFuncions } from "../others/common/toast";
import { spotifyService } from "../../Networks/spotify";
import { connect } from "react-redux";
import { setUsers } from "../../Redux/Actions/Action";
import { useDispatch } from "react-redux";

function Home() {
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        spotifyService.setAccessToken();
        spotifyService.Spotify.getMe()
            .then((user) => {
                //  console.log(user);
                !flag && dispatch(setUsers(user)); // calling SET USER action (Redux)

                setFlag(true)
            })
            .catch((e) => {
                // if token expaired it will redirect to login page
                toastFuncions.error("Someting went wrong!!");
                setTimeout(() => {
                    window.location.replace("/login");
                }, 1000);
            });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <div>Its Home</div>;
}

export default connect()(Home);
