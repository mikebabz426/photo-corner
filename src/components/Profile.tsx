import * as React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ActionButtons from "./Action"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
}))

export interface ProfileProps {}

const Profile: React.SFC<ProfileProps> = () => {
  const classes = useStyles()
  return (
    <Box maxWidth="lg" className={classes.container}>
      <ActionButtons />
    </Box>
  )
}

export default Profile
