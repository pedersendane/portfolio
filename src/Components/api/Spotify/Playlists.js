import React, { useState, useEffect } from 'react'
import BootstrapDetailedCard from '../../Cards/BootstrapDetailedCard';
import BootstrapImageCard from '../../Cards/BootstrapImageCard';
import BootstrapTextCard from '../../Cards/BootstrapTextCard';

function Playlists() {
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    const [appState, setAppState] = useState({
        loading: true
    });

    useEffect(() => {
        fetchPlaylists();
    },[])

    function fetchPlaylists() {
        if (access_token && refresh_token) {
            fetch('https://api.spotify.com/v1/me/playlists', {
                method: 'get',
                headers: new Headers({ 'Authorization': 'Bearer ' + access_token })
            })
            .then((res) => {
                res.json()
                    .then((r) => {
                        setAppState({
                            loading: false,
                            href: r.href,
                            items: r.items,
                            total: r.total
                        })
                        console.log(appState);
                })
            })
        } 
    }
    if (!appState.loading) {
        const items = appState.items;
        if (!items || items.length === 0) { return <p> No items, sorry </p>; }
        console.log(items);
        return (
            items.map((item) => {
                return (
                    
                    <BootstrapImageCard
                        cardWidth={
                            "45%"
                        }
                        cardMargin={
                            "2% 0 0 0"
                        }
                        header={
                            item.name
                        }
                        imageWidth={
                            "90%"
                        }
                        imageHeight={
                            "auto"
                        }
                        imagePadding={
                            "5% 0px 0px 10%"
                        }
                        imageSrc={
                            item.images[0].url
                        }
                        text = {
                        item.description
                        }
                        link = {
                        item.external_urls.spotify
                        }
                        linkText = {
                        "View on Spotify"
                        }
                        icon={
                            <i class="bi bi-arrow-up-right"></i>
                        }
                        // footer = {
                        // creationDateString
                        // }
                        />
                );
            })
        )

    } else {
        return (
            <p>
                Loading...
            </p>
        )
    }
    
}

export default Playlists;
// href: "https://api.spotify.com/v1/users/th6jq9ixn4zr4deyrzgsjypv0/playlists?offset=0&limit=20"
// ​
// items: Array(8) [ {…}, {…}, {…}, … ]
// ​​
// 0: Object { collaborative: false, description: "The best of Foo Fighters, all in one place.", href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX9Ozxs05KifN", … }
// ​​​
// collaborative: false
// ​​​
// description: "The best of Foo Fighters, all in one place."
// ​​​
// external_urls: Object { spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9Ozxs05KifN" }
// ​​​
// href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX9Ozxs05KifN"
// ​​​
// id: "37i9dQZF1DX9Ozxs05KifN"
// ​​​
// images: Array [ {…} ]
// ​​​
// name: "This Is Foo Fighters"
// ​​​
// owner: Object { display_name: "Spotify", href: "https://api.spotify.com/v1/users/spotify", id: "spotify", … }
// ​​​
// primary_color: null
// ​​​
// public: false
// ​​​
// snapshot_id: "MTYxMjkyNTA1MCwwMDAwMDAxNzAwMDAwMTc3ODlkMzFkZmIwMDAwMDE3NjI1NGU1NGU2"
// ​​​
// tracks: Object { href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX9Ozxs05KifN/tracks", total: 50 }
// ​​​
// type: "playlist"
// ​​​
// uri: "spotify:playlist:37i9dQZF1DX9Ozxs05KifN"