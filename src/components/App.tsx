import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Tabs, Tab, Box, Typography } from "@material-ui/core"
import Home from "./Home"
import Trends from "./Trends"
import Profile from "./Profile"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "../components/LoginButton"

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
  comp: any
}

function TabPanel(props: TabPanelProps) {
  const { children, comp, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && comp}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  }
}

interface LinkTabProps {
  label?: string
  href?: string
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles(theme => ({
  tabBar: {
    backgroundColor: "#fafafa",
    color: theme.palette.common.black,
    border: "none",
  },
  tabsContainer: {
    marginTop: "2rem",
  },
  messageBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    marginTop: 100,
    marginBottom: 20,
  },
}))

const App = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const { isLoading, isAuthenticated, error } = useAuth0()

  isLoading ? (
    <Box>
      <Typography>Loading...</Typography>
    </Box>
  ) : null

  error ? (
    <Box>
      <Typography>Error: {error.message}</Typography>
    </Box>
  ) : null

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <Box className={classes.tabsContainer} position="static">
            <Tabs
              className={classes.tabBar}
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="nav tabs"
            >
              <LinkTab label="Home" href="/home" {...a11yProps(0)} />
              <LinkTab label="Trending" href="/trending" {...a11yProps(1)} />
              <LinkTab label="Profile" href="/profile" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <TabPanel value={value} comp={<Home />} index={0}>
            Home
          </TabPanel>
          <TabPanel value={value} comp={<Trends />} index={1}>
            Trending
          </TabPanel>
          <TabPanel value={value} comp={<Profile />} index={2}>
            Profile
          </TabPanel>
        </>
      ) : (
        <Box className={classes.messageBox}>
          <Typography variant="h3" className={classes.message}>
            To access your account please Log In or Sign Up.
          </Typography>
          <LoginButton />
        </Box>
      )}
    </>
  )
}

export default App
