import React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#78909C",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
})

const GlobalThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default GlobalThemeProvider
