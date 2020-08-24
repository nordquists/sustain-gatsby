import React from "react"
import Layout from "../components/layout/layout"
import Splash from "../components/splash/Splash"
import { IngredientFeature } from "../components/ingredient_feature/IngredientFeature"
import { graphql } from 'gatsby'
import { SuperFooter } from "../components/super_footer/SuperFooter"
import { Footer } from "../components/footer/Footer"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
        <Splash imageData={data.allFile.edges[1].node.childImageSharp.fluid}/>
        <IngredientFeature ingredientImage={data.allFile.edges[2].node.childImageSharp.fluid} logo={data.allFile.edges[1].node.childImageSharp.fluid}/>
        <SuperFooter logo={data.allFile.edges[3].node.childImageSharp.fluid}/>
        <Footer logo={data.allFile.edges[1].node.childImageSharp.fluid}/>
    </Layout>
  )
}

export const query  = graphql`
query MyQuery {
  allFile(filter: {extension: {regex: "/(png)/"}}) {
    edges {
      node {
        base
        childImageSharp {
          fluid(quality: 100) {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
}

  `

export default IndexPage
