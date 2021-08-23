import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    container: {
        position: 'sticky',
        top: 0,
        zIndex: 99,
        height: 60,
        width: "200%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#5682db",
        borderBottom: "2px solid rgba(255,255,255,0.3)",
        paddingBottom: 8,
        paddingTop: 8
    },
    box: {
        height: 60,
        display: "flex",
        paddingInline: 8,
        alignItems: "center",
        borderRight: "3px solid rgba(255,255,255,0.3)",
    },
    spreadBox: {
        justifyContent: "space-between",
        display: "flex",
        padding: 8,
        alignItems: "center",
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "180px",
        paddingRight: "20px",
    },
    id: {

        width: "20px",
    },
    receiptNumber: {
        width: "150px",
    },
    rbr: {
        width: "80px",
    },
    direction: {
        width: "60px",
    },
    receiptDate: {
        width: "110px",
    },
    partnerName: {
        width: "160px",
    },
    postTaxAmount: {
        width: "120px",
    },
}))