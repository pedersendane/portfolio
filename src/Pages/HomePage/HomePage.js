import React from 'react';
import './HomePage.css';
import Layout from '../../Components/Layout/Layout.js';
import ImageContainer from '../../Components/ImageContainer/ImageContainer';
import BootstrapTextCard from '../../Components/Cards/BootstrapTextCard';
import * as Constants from '../../Constants';
import DarkToggle from '../../Components/Toggle/DarkToggle';
import FetchSpotifyUrl from '../../Components/api/Spotify/FetchSpotifyUrl';
// import CardDeck from '../../Components/Cards/CardDeck';

export default function HomePage() {
    return (
      <Layout>
        <div className={"image-container"}>

          <section>
            <ImageContainer />
          </section>

          <section id={"home-page-cards"} className={"card-section"}>
            <BootstrapTextCard
              width={"45%"}
              title={"My Projects"}
              subTitle={"Vist a page full of my links and projects"}
              link={Constants.ProjectsUrl}
              linkText={"View Projects Page"}
            >
              </BootstrapTextCard>
            <BootstrapTextCard
              width={"45%"}
              title={"Spotify"}
              subTitle={"See what I am listening to"}
              href={FetchSpotifyUrl()}
              hrefText={"View Spotify Page"}
            >
              </BootstrapTextCard>
          </section>          
        </div>
    </Layout>   
  )
}