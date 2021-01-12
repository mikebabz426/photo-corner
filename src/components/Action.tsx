import * as React from "react"
import { Box, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddSharpIcon from "@material-ui/icons/AddSharp"

const useStyles = makeStyles(theme => ({
  btnGroup: {
    display: "flex",
  },
  button: {
    margin: "1rem",
  },
}))

export interface ActionButtonGroupProps {}

const ActionButtonGroup: React.SFC<ActionButtonGroupProps> = () => {
  const classes = useStyles()

  return (
    <Box className={classes.btnGroup}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddSharpIcon />}
      >
        Post Image
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddSharpIcon />}
      >
        Post Question
      </Button>
    </Box>
  )
}

export default ActionButtonGroup
