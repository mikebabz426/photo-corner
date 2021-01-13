import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Tabs, Tab, Box } from "@material-ui/core"
import Home from "./Home"
import Trends from "./Trends"
import Profile from "./Profile"

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
  root: {
    padding: "3rem",
    margin: "auto",
  },
  tabBar: {
    backgroundColor: "#fafafa",
    color: theme.palette.common.black,
    border: "none",
  },
  tabsContainer: {
    marginTop: "2rem",
  },
}))

const App = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default App
