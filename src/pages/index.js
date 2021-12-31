// import react letting us use JSX
import * as React from "react"
import Layout from '../components/layout'

// markup
// defining a component and the component name should start with a capital
// export a componet to be allowed to be used outside of the app
const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
   <p>This is my Gatsby Page </p>
   </Layout>
  )
}

export default IndexPage

