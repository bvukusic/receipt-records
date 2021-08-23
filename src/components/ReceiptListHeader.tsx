import * as React from 'react'
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useStyles } from '../styles/ReceiptListHeader.style';

interface ReceiptListHeaderProps {
    sortByValue: (arg0: string) => void,
}

const ReceiptListHeader = ({ sortByValue }: ReceiptListHeaderProps): JSX.Element => {
    const classes = useStyles()

    return (
        <Box component="span"
            className={`${classes.container}`} >
            <Box
                component="div"
                className={`${classes.spreadBox}`}
            >
                <Box
                    component="div"
                    className={`${classes.id} ${classes.box}`}
                    onClick={() => sortByValue("id")}
                >
                    <Typography variant="h6">Id</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.receiptNumber} ${classes.box}`}
                    onClick={() => sortByValue("receiptNumber")}
                >
                    <Typography variant="h6">Br. računa</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.rbr} ${classes.box}`}
                    onClick={() => sortByValue("RBR")}
                >
                    <Typography variant="h6">RBR</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.direction} ${classes.box}`}
                    onClick={() => sortByValue("direction")}
                >
                    <Typography variant="h6">Smjer</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.receiptDate} ${classes.box}`}
                    onClick={() => sortByValue("receiptDate")}
                >
                    <Typography variant="h6">Datum računa</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.partnerName} ${classes.box}`}
                    onClick={() => sortByValue("partnerName")}
                >
                    <Typography variant="h6">Ime partnera</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.postTaxAmount} ${classes.box}`}
                    onClick={() => sortByValue("postTaxAmount")}
                >
                    <Typography variant="h6">Iznos nakon poreza</Typography>
                </Box>
            </Box>
            <Box
                component="span"
                className={`${classes.buttonsContainer}`}
            >
            </Box>
        </Box>
    );
}

export default ReceiptListHeader;
