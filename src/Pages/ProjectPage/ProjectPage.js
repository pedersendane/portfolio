import React from 'react'
import FetchRepo from '../../Components/api/GithubRepo/FetchRepo'
import FetchUser from '../../Components/api/GithubRepo/FetchUser'
import Layout from '../../Components/Layout/Layout'

function ProjectPage() {
    return (
      <Layout>
        <section className={"card-section"}>
            <FetchUser/>
        </section>
        
        <section className={"card-section"}>
            <FetchRepo/>
        </section>
        
      </Layout>
        
    )
}

export default ProjectPage
