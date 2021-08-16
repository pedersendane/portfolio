import React, {useState, useEffect} from 'react'
import BootstrapImageCard from '../../Cards/BootstrapImageCard';

function CurrentlyPlaying() {
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    const [appState, setAppState] = useState({
        loading: true
    });

    useEffect(() => {
        fetchCurrent();
    }, [])

    function fetchCurrent() {
        if (access_token && refresh_token) {
            fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                method: 'get',
                headers: new Headers({ 'Authorization': 'Bearer ' + access_token })
            })
                .then((res) => {
                    res.json()
                        .then((r) => {
                            setAppState({
                                loading: false,
                                track: r.item,
                            })
                            console.log(appState);
                        })
                })
        }
    }
    if (!appState.loading) {
        const track = appState.track;
        if (!track || track.length === 0) { return <p> No items, sorry </p>; }
        const trackName = track.name;
        const trackUrl = track.external_urls.spotify;
        const albumArt = track.album.images[0].url;
        const albumName = track.album.name;
        const albumUrl = track.album.external_urls.spotify;
        const previewUrl = track.preview_url;
        const artists = () => {
            let allArtists = track.artists;
            let allArtistsCount = allArtists.length;
            console.log(allArtists);
            console.log(allArtistsCount);
            let formattedString = '';
            //if there is more than one artist
            if (allArtistsCount > 1) {
                let x = 0;
                while (x < allArtistsCount) {
                    //if second to last
                    if (allArtistsCount - 2 === x) {
                        formattedString += `${allArtists[x].name} and `
                    }
                    //if last 
                    else if (allArtistsCount - 1 === x) {
                        formattedString += `${allArtists[x].name}`
                    }
                    //others
                    else {
                        formattedString += `${allArtists[x].name}, `                    }
                    x++;
                }
            } else {
                formattedString += allArtists[0].name
            }
            return formattedString;
        }
        return (
            <BootstrapImageCard
                        cardWidth={
                            "90%"
                        }
                        cardMargin={
                            "2% 0 0 0"
                        }
                        header={
                            "Now Playing:"
                        }
                        imageWidth={
                            "80%"
                        }
                        imageHeight={
                            "auto"
                        }
                        imagePadding={
                            "5% 0px 0px 20%"
                        }
                        imageSrc={
                            albumArt
                        }
                        title={
                            trackName
                        }
                        text = {
                            `By: ${artists()}`
                        }
                        link = {
                        trackUrl
                        }
                        icon={
                            <i class="bi bi-arrow-up-right"></i>
                        }
                        linkText = {
                        "View on Spotify"
                        }
                        >
                
                        </BootstrapImageCard>
        )
    } else {
        return(<></>)
    }
}

export default CurrentlyPlaying

// track.album

// external_urls: Object { spotify: "https://open.spotify.com/album/1CEeqK9sKrE7LzUHeT3bfP" }
// id: "1CEeqK9sKrE7LzUHeT3bfP"
// images: Array(3) [ {…}, {…}, {…} ]
// name: "Do What Thou Wilt."
// release_date: "2016-12-09"
// release_date_precision: "day"
// total_tracks: 16
// uri: "spotify:album:1CEeqK9sKrE7LzUHeT3bfP"

