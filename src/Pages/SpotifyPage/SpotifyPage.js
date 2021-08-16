import React from 'react'
import Login from '../../Components/api/Spotify/Login'
import Layout from '../../Components/Layout/Layout'

function SpotifyPage() {
    return (
        <Layout>
            <section className={"card-section"}>
                <Login/>
            </section>
        </Layout>
    )
}

export default SpotifyPage
