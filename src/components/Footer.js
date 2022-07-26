import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyReceipe</span> Built With{" "}
        <a href="https://www.gatsby.com/">GatsBy</a>
      </p>
    </footer>
  )
}

export default Footer
