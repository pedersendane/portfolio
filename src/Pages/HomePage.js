import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
export default function HomePage() {
    return (
    <Layout>
        <div className="container">
            <h1>Home Page</h1>
            <p>
                <Link to="/taniarascia">taniarascia</Link> on GitHub.
            </p>
        </div>
    </Layout>   
  )
}