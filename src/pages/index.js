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
          kownledge, resources and support he/she needs to grow and thrive as a
          training athlete. Becoming a stronger cyclsist is all about training
          the body to be stronger, longer and more efficient. We are building a
          community to inspire and learn as we pursue these goals together.
        </p>
        <Signup />
      </div>
    </div>
  </Layout>
)

export default IndexPage
