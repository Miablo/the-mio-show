// import react letting us use JSX
import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

// markup
// defining a component and the component name should start with a capital
// export a componet to be allowed to be used outside of the app
const IndexPage = () => {
  
  return (
   <Layout pageTitle="Home Page">
    <h1>Welcome to my Gatsby Site!</h1>

   <p>This is my Gatsby Page </p>
   <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
   </Layout>
  )
}

export default IndexPage

