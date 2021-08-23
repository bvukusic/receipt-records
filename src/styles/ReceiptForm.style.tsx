import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  titleContainer: {
    height: "150px",
     display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textField: {
    width: "250px",
    paddingTop: "5px"
  },
  button: {
    width: "200px",
    height: 40,
    margin: 20,
  },
  spreadBox: {
    height: "30px",
    width: "100%",
  },
  buttonContainer: {
    height: "180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))