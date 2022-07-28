import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch</h3>
            <p>
              Prism celiac knausgaard snackwave, migas air plant man braid
              vexillologist subway tile biodiesel kombucha gochujang everyday
              carry
            </p>
            <p>Next level kale chips fingerstache kale chips jianbing.</p>
            <p>
              Lyft echo park you probably haven't heard of them, jianbing brunch
              hoodie chambray PBR&B chartreuse vaporware leggings bitters
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xwkyggyq"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" />
              </div>
              <div className="form-row">
                <label for="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look At the Awesomesouce!...</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default Contact
