import React, {useEffect, useState} from 'react'
import BootstrapImageCard from '../../Cards/BootstrapImageCard';
import BootstrapTextCard from '../../Cards/BootstrapTextCard';

function TopArtists() {
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    const [appState, setAppState] = useState({
        loading: true
    });

    useEffect(() => {
        fetchArtists();
    },[])

    function fetchArtists() {
        if (access_token && refresh_token) {
            fetch('https://api.spotify.com/v1/me/top/artists?limit=10'
            , {
                method: 'get',
                headers: new Headers({ 'Authorization': 'Bearer ' + access_token })
            })
            .then((res) => {
                res.json()
                    .then((r) => {
                        console.log(r);
                        setAppState({
                            loading: false,
                            artists: r.items
                        })
                        console.log(appState);
                })
            })
        } 
    }
    if (!appState.loading) {
        const artists = appState.artists;
        if (!artists || artists.length === 0) { return <p> No items, sorry </p>; }
        console.log(artists);
        return (
            <BootstrapTextCard
                width={"90%"}
                title={"My Top Ten Artists"}
                subTitle={"Here are my top ten most listened to artists of all time."}
                cardPadding={"0 0 0 0"}
                titlePadding={"2em 0 0 0"}
            >
                    {artists.map((artist) => {
                        return (
                            <div style={{ paddingTop: "2em" }}>
                                <img src={artist.images[1].url}
                                    style={{
                                        width: artist.images[1].width,
                                        height: "auto",
                                        borderRadius: "50%"
                                    }}
                                    alt={`A pic of ${artist.name}`}

                                />
                                <h5 >{artist.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{artist.genres[0]}</h6>
                            </div>
                        )
                    })}
                </BootstrapTextCard>
            
        )

    } else {
        return (
            <p>
                Loading...
            </p>
        )
    }
    
}


export default TopArtists

// external_urls: Object { spotify: "https://open.spotify.com/artist/4YLtscXsxbVgi031ovDDdh" }
// ​​
// followers: Object { href: null, total: 3471329 }
// ​​
// genres: Array [ "contemporary country", "outlaw country" ]
// ​​
// href: "https://api.spotify.com/v1/artists/4YLtscXsxbVgi031ovDDdh"
// ​​
// id: "4YLtscXsxbVgi031ovDDdh"
// ​​
// images: Array(3) [ {…}, {…}, {…} ]
// ​​
// name: "Chris Stapleton"
// ​​
// popularity: 81
// ​​
// type: "artist"
// ​​
// uri: "spotify:artist:4YLtscXsxbVgi031ovDDdh"