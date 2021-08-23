import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useStyles } from '../styles/ReceiptListFooter.style';
import { RootStateOrAny, useSelector } from 'react-redux';


const ReceiptListFooter = () => {
    const classes = useStyles()
    const sum = useSelector((state: RootStateOrAny) => state.receipts.sum);

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
                >
                </Box>
                <Box
                    component="div"
                    className={`${classes.receiptNumber} ${classes.box}`}
                >
                </Box>
                <Box
                    component="div"
                    className={`${classes.rbr} ${classes.box}`}
                >
                </Box>
                <Box
                    component="div"
                    className={`${classes.direction} ${classes.box}`}
                >
                </Box>
                <Box
                    component="div"
                    className={`${classes.receiptDate} ${classes.box}`}
                >
                </Box>
                <Box
                    component="div"
                    className={`${classes.partnerName} ${classes.box}`}
                >
                </Box>
                <Box
                    component="div"
                    className={`${classes.postTaxAmount} ${classes.box}`}
                >
                    <Typography variant="h6">{sum} kn</Typography>
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

export default ReceiptListFooter;
