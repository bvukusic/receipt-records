import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  appContainer: {
    backgroundColor: "#FFFF",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  App: {
    textAlign: "center"

  },
}))