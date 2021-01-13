import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import App from "../components/App"
import { useAuth0 } from "@auth0/auth0-react"
import Login from "../components/Login"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
}))

const AppPage = () => {
  const classes = useStyles()
  const { isLoading, isAuthenticated, error } = useAuth0()
  console.log(isAuthenticated)
  if (isLoading) <div>Loading</div>

  if (error) <div>Oops... {error.message}</div>

  if (isAuthenticated) {
    console.log(isAuthenticated)
    return (
      <React.Fragment>
        <Layout logo={true}>
          <SEO title="Home" />
          <Container maxWidth="lg" className={classes.root}>
            <App />
          </Container>
        </Layout>
      </React.Fragment>
    )
  } else {
    console.log(isAuthenticated)
    return (
      <React.Fragment>
        <Layout logo={true}>
          <SEO title="Home" />
          <Container maxWidth="lg" className={classes.root}>
            <Login />
          </Container>
        </Layout>
      </React.Fragment>
    )
  }
}

export default AppPage
