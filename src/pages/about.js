import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke texidermy</h2>
            <p>
              Prism celiac knausgaard snackwave, migas air plant man braid
              vexillologist subway tile biodiesel kombucha gochujang everyday
              carry
            </p>
            <p>
              Next level kale chips fingerstache kale chips jianbing.Lyft echo
              park you probably haven't heard of them
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../Assests/images/about.jpeg"
            alt="About Imng"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
