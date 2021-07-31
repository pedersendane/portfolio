import React from 'react';
import './HomePage.css';
import Layout from '../../Components/Layout/Layout.js';
import StackableCard from '../../Components/Cards/StackableCard';
import StackingCards from '../../Components/Cards/StackingCards';
import * as Constants from '../../Constants.js';

export default function HomePage() {
    return (
        <Layout>
            <StackingCards>
                <StackableCard number={1} image={Constants.CodePhoto} alt={"Code describing some things about me"} />
            </StackingCards>
    </Layout>   
  )
}