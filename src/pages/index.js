import React from "react"

import Layout from "../components/layout"
import Signup from "../components/signup"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Sign Up!" />

    <div className="main">
      <div className="logo">
        <img src={Logo} alt="Become a Sovereign Cyclist" />
      </div>

      <div className="content">
        <h1>Become a Sovereign Cyclist!</h1>
        <p>
          A <b>Sovereign Cyclist</b> is a cyclist who is equipped with the
          knowledge, resources and support he/she needs to grow and thrive as a
          training athlete. Becoming a stronger cyclist is all about training
          the body to be stronger, longer and more efficient, while at the same
          time, knowing when to back off. We are building a community to inspire
          and learn as we pursue these goals together. Sign up to follow along
          and get more information as it becomes available!
        </p>
        <Signup />
      </div>
    </div>
  </Layout>
)

export default IndexPage
