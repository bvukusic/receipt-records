import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  receiptListContainer: {
    backgroundColor: "#2979FF",
    display: "flex",
    flexDirection: "column",
    marginTop: "50px",
    marginBottom: "50px",
    width: "60%",
    height: "700px",
    border: "4px solid rgb(255, 255, 255)",
    borderRadius: "15px",
    overflow: "scroll",
    overflowY: "scroll",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
    paddingInline: "50px",
    paddingTop: "20px",
    paddingBottom: "20px",
    borderBottom: "5px solid rgba(255,255,255,0.5)",
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))