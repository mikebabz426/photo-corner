import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Login from "../components/Login"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Layout logo={false}>
        <SEO title="Log In" />
        <Container maxWidth="lg" className={classes.root}>
          <Login />
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
