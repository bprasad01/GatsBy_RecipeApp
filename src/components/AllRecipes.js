import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const recipe = data.allContentfulRecipe.nodes
  console.log(recipe)
  return (
    <section className="recipes-container">
      <TagsList recipes={recipe} />
      <RecipesList recipes={recipe} />
    </section>
  )
}

export default AllRecipes
