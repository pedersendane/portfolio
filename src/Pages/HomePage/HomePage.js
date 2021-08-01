import React from 'react';
import './HomePage.css';
import Layout from '../../Components/Layout/Layout.js';
import ImageContainer from '../../Components/ImageContainer/ImageContainer';
import CardDeck from '../../Components/Cards/CardDeck';

export default function HomePage() {
    return (
      <Layout>
        <div className={"image-container"}>
          <section>
            <ImageContainer />
          </section>
          <section id="card-deck-root">
              <CardDeck />
            </section>
          
        </div>
    </Layout>   
  )
}