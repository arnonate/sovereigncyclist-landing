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
        <h1>We need your help!</h1>
        <p>
          <b>Super Ultra</b> will be the world's largest database of ultra
          endurance race reports. If you race{" "}
          <b>and you are one of those crazy people that like to go far</b> we
          would love to hear and share your stories. Drop your email below and
          we will let you know when the platform is ready.
        </p>
        <Signup />
      </div>
    </div>
  </Layout>
)

export default IndexPage
