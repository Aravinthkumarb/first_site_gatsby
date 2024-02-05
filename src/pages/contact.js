import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const contact = () => {
    return (
        <div>
            <Layout PageHeading="Contact Page's"></Layout>
            <p>This for Contact Us...!</p>
            <StaticImage src="https://wallpaperaccess.com/full/114439.jpg" alt="Narutooo Boiiii" width={400} height={400} />

        </div>
    )
}

export default contact
