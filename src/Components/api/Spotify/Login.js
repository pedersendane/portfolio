import React, { useEffect, useState } from 'react'
import BootstrapTextCard from '../../Cards/BootstrapTextCard';
import Playlists from './Playlists';
import TopArtists from './TopArtists';
import CurrentlyPlaying from './CurrentlyPlaying';
const TryLogin = () => {
    const [appState, setAppState] = useState({
        loading: true,
        error: null,
        access_token: null,
        refresh_token: null
    });
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get('code');
        //fetch(`http://localhost:8000/portfolio/spotify?code=${code}`)
        fetch(`https://nesapi.herokuapp.com/portfolio/spotify?code=${code}`)
            .then((res) => {
                res.json()
                .then((r) => {
                    console.log(r);
                    setAppState({
                        loading: false,
                        error: r.error,
                        access_token: r.access_token,
                        refresh_token: r.refresh_token
                    })
                })
            })
    }
    
    const error = appState.error;
    const loading = appState.loading;
    if (error && !loading) {
        return (<p>Looks like there was an error. Please try again</p>)
    }
    if (!loading) {
        const access_token = appState.access_token;
        const refresh_token = appState.refresh_token;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        return (
            <>
                <CurrentlyPlaying/>
                <TopArtists />
                <BootstrapTextCard width={"90%"} title={"My Playlists"} subTitle={"Some of my most played playlists on Spotify"} href={"https://open.spotify.com/user/th6jq9ixn4zr4deyrzgsjypv0"} hrefText={"View on Spotify"} icon={<i class="bi bi-arrow-up-right"></i>}/>
                <Playlists />
            </>
        )
    } else {
        return <p>Loading...</p>
    }
    
}

export default TryLogin
