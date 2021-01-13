import * as React from "react"
import { Typography, Button, Box } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Logo from "../assets/logo-dark.svg"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
  grid: {
    marginTop: "10rem",
  },
  logo: {
    maxHeight: "150px",
    maxWidth: "460px",
  },
  subheading: {
    fontWeight: 300,
    paddingLeft: "10px",
  },
  buttonContainer: {
    alignItems: "center",
    minWidth: "300px",
    margin: "2rem .5rem",
  },
  imageGrid: {
    position: "relative",
    width: "500px",
    height: "250px",
    display: "flex",
  },
  image: {
    position: "absolute",
    width: "250px",
    height: "250px",
  },
}))

const Logout = ({ data }) => {
  const classes = useStyles()
  const astro = data.astro.childImageSharp.fluid
  const backflip = data.backflip.childImageSharp.fluid
  const lake = data.lake.childImageSharp.fluid
  const waterfall = data.waterfall.childImageSharp.fluid

  return (
    <Grid
      container
      className={classes.grid}
      spacing={10}
      justify="center"
      alignItems="center"
    >
      <Grid item md={6}>
        <Logo className={classes.logo} />
        <Typography variant="h4" className={classes.subheading}>
          Thanks for stopping by, see you next time!
        </Typography>
        <Box className={classes.buttonContainer}>
          <Button variant="contained" color="primary">
            Explore
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "0 2rem" }}
          >
            Sign Up
          </Button>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box className={classes.imageGrid}>
          <Img
            fluid={lake}
            className={classes.image}
            style={{ top: 0, left: 0 }}
          />
          <Img
            fluid={astro}
            className={classes.image}
            style={{ top: -20, left: 20 }}
          />
        </Box>
        <Box className={classes.imageGrid}>
          <Img
            fluid={backflip}
            className={classes.image}
            style={{ bottom: -20, left: 20 }}
          />
          <Img
            fluid={waterfall}
            className={classes.image}
            style={{ left: 40 }}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export const query = graphql`
  {
    astro: file(relativePath: { eq: "astro.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    backflip: file(relativePath: { eq: "backflip.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lake: file(relativePath: { eq: "lake.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    waterfall: file(relativePath: { eq: "waterfall.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Logout
