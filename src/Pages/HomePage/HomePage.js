import React from 'react';
import './HomePage.css';
import Layout from '../../Components/Layout/Layout.js';
import StackableCard from '../../Components/Cards/StackableCard';
import StackingCards from '../../Components/Cards/StackingCards';
import ScrollReveal from '../../Components/ScrollReveal/ScrollReveal';
import * as Constants from '../../Constants.js';

export default function HomePage() {
    return (
    <Layout>
        <StackingCards>
                <StackableCard number={1} type={"image"} image={Constants.CodePhoto} alt={"Code describing some things about me"} />
                <StackableCard number={2} type={"text"} title={"Welcome"} paragraph={"A buncha bullshit goes here"} href={Constants.ProjectsUrl} buttonText={"View Projects"}/>
                <StackableCard number={3} type={"both"} image={Constants.CodePhoto} alt={"Code describing some things about me"} title={"Projects"} paragraph={"A buncha bullshit goes here"} href={Constants.ProjectsUrl} buttonText={"View Projects"}/>
            </StackingCards>
        {/* <ScrollReveal/> */}
    </Layout>   
  )
}