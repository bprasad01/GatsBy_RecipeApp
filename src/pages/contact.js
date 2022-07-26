import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
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
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" value="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" value="email" />
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
      </main>
    </Layout>
  )
}

export default Contact
