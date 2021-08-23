import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  titleContainer: {
    height: "100px",
     display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.1)",
    marginBottom: "30px",
    borderRadius: 5,
    justifyContent: "space-between",
    paddingInline: "5px"
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