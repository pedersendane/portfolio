import React from 'react'
import Layout from '../../Components/Layout/Layout'
import StackingCards from '../../Components/Cards/StackingCards';
import ImageCard from '../../Components/Cards/StackableCard';
import * as Constants from '../../Constants';

function ProjectPage() {
    return (
        <Layout>
            <StackingCards>
                <ImageCard
                    number={1}
                    image={Constants.CodePhoto}
                    alt={"Code that explains some fun facts about me"}
                />
                <ImageCard
                    number={2}
                    image={Constants.CodePhoto}
                    alt={"Code that explains some fun facts about me"}
                />
                <ImageCard
                    number={2}
                    image={Constants.CodePhoto}
                    alt={"Code that explains some fun facts about me"}
                />
            </StackingCards>
        </Layout>
        
    )
}

export default ProjectPage
