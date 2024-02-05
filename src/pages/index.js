import * as React from 'react';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';


const HomePage = () => {
  return (
    <>
      <Layout PageHeading='Home Page'>

        <main>
          <title>Home Page</title>
          <h1>Huskyyy Boiii & Pittyy Boiii</h1>
          <StaticImage src="https://media-be.chewy.com/wp-content/uploads/2021/06/01091720/Siberian-Husky_FeaturedImage.jpg" alt="Huskyy Boiiii" width={400} height={400} />
          <StaticImage src="../images/Dogy.png" alt="Pittyy Boiiii" width={400} height={400} style={{ margin: "10px" }} />
        </main>
      </Layout>
    </>
  )
}
export default HomePage;