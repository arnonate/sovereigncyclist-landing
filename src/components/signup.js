import React from "react"
import { navigate } from "gatsby-link"
import { createSubscriber } from "../services"

export default class Signup extends React.Component {
  state = {
    email: "",
    error: null,
    loading: false,
  }

  validateEmail = email => {
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value, error: null })
  }

  handleSignup = evt => {
    evt.preventDefault()

    if (this.state.email === "") {
      return
    }

    if (!this.validateEmail(this.state.email)) {
      this.setState({ error: "That doesn't look like a valid email address" })

      return
    }

    this.setState({ loading: true })

    createSubscriber(this.state.email)
      .then(data => {
        navigate("/success")
      })
      .catch(error =>
        this.setState({ error: error && error.message, loading: false })
      )
  }

  render() {
    const { email, error, loading } = this.state

    return (
      <>
        <div className="form">
          <input
            placeholder="Your email address"
            type="text"
            value={email}
            onChange={this.handleEmailChange}
          />

          <button type="button" onClick={this.handleSignup} disabled={loading}>
            {loading ? `...` : `Signup`}
          </button>
        </div>
        {error ? <p className="form-input-hint">{error}</p> : null}
      </>
    )
  }
}
