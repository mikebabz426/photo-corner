import * as React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ActionButtons from "./Action"
import { useAuth0 } from "@auth0/auth0-react"

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
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <Box maxWidth="lg" className={classes.container}>
        Loading ...
      </Box>
    )
  }

  isAuthenticated ? console.log(user) : "no user detected"

  return (
    isAuthenticated && (
      <Box maxWidth="lg">
        {/* <img src={user.picture} alt={user.name} /> */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Box>
    )
  )
}

export default Profile
