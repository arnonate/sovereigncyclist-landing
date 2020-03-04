import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"

const Success = () => (
  <Layout>
    <SEO title="Thank you!" />

    <div className="main">
      <div className="logo">
        <img src={Logo} alt="Super Ultra Race Reports" />
      </div>

      <div className="content">
        <h1>Thank you!</h1>
        <p>
          Please check your email and verify your subscription. We will let you
          know when the platform is ready. Until then, keep up the{" "}
          <b>#sovereigncyclist</b> lifestyle!
        </p>
      </div>
    </div>
  </Layout>
)

export default Success
