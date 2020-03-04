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
          training athlete. A Sovereign Cyclist is not only <b>in control</b> of
          his/her own ship, they are also <b>backed by a community</b> of
          athletes managing their own training as a large team.
        </p>
        <Signup />
      </div>
    </div>
  </Layout>
)

export default IndexPage
