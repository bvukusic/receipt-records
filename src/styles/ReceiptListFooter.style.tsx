import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    container: {
        position: 'sticky',
        bottom: 0,
        zIndex: 99,
        maxHeight: 60,
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#5682db",
        borderBottom: "2px solid rgba(255,255,255,0.3)",
        paddingBottom: 8,
        paddingTop: 8
    },
    box: {
        height: 40,
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