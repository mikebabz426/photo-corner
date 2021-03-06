import React from "react"
import { Container, AppBar, Toolbar, Box, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { makeStyles, fade } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import Logo from "../assets/logo.svg"
import { useAuth0 } from "@auth0/auth0-react"

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  logoStyle: {
    maxHeight: "40px",
    maxWidth: "170px",
  },
}))

const Header = ({ logo }) => {
  const classes = useStyles()
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <Typography variant="body1">Loading...</Typography>

  return (
    <AppBar>
      <Toolbar className={classes.root}>
        <Container maxWidth="lg" className={classes.navContainer}>
          <Box className={classes.container}>
            {logo ? (
              <Link
                to="/"
                style={{
                  textDecoration: `none`,
                }}
              >
                <Logo className={classes.logoStyle} />
              </Link>
            ) : null}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Explore..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Box>
          <Box className={classes.container}>
            {isAuthenticated ? (
              <>
                <Typography>Welcome, {user.name}</Typography>
                {""}
                <LogoutButton />
              </>
            ) : (
              <>
                <Typography>Welcome, Guest</Typography>
                {""}
                <LoginButton />
              </>
            )}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
