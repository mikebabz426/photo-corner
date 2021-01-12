import * as React from "react"
import ActionButtons from "./Action"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
}))

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  const classes = useStyles()

  return (
    <Box maxWidth="lg" className={classes.container}>
      <ActionButtons />
    </Box>
  )
}

export default Home
