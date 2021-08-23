import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import format from 'date-fns/format';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Receipt } from '../interfaces/ReceiptInterface';
import { useStyles } from '../styles/ReceiptListItem.style';

interface ReceiptListItemProps {
    receipt: Receipt,
    openEditModal: () => void,
    openDetailsModal: () => void,
}

const ReceiptListItem = ({ receipt, openEditModal, openDetailsModal }: ReceiptListItemProps): JSX.Element => {
    const classes = useStyles()

    const dispatch = useDispatch();

    const { removeReceipt, selectReceipt, calculateSum } = bindActionCreators(actionCreators, dispatch);

    const handleEdit = () => {
        selectReceipt(receipt.id)
        openEditModal();
    }

    const handleDetails = () => {
        selectReceipt(receipt.id)
        openDetailsModal();
    }

    const handleDelete = () => {
        removeReceipt(receipt.id);
        calculateSum();
    }

    return (
        <Box component="span"
            className={`${classes.container}`} >
            <Box
                component="div"
                className={`${classes.spreadBox}`}
                onClick={() => handleDetails()}
            >
                <Box
                    component="div"
                    className={`${classes.id} ${classes.box}`}
                >
                    <Typography variant="body1">{receipt.id}</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.receiptNumber} ${classes.box}`}
                >
                    <Typography variant="body1">{receipt.receiptNumber}</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.rbr} ${classes.box}`}
                >
                    <Typography variant="body1">{receipt.RBR}</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.direction} ${classes.box}`}
                >
                    <Typography variant="body1">{receipt.direction}</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.receiptDate} ${classes.box}`}
                >
                    <Typography variant="body1">{format(receipt.receiptDate, 'dd.MM.yyyy')}</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.partnerName} ${classes.box}`}
                >
                    <Typography variant="body1">{receipt.partnerName}</Typography>
                </Box>
                <Box
                    component="div"
                    className={`${classes.postTaxAmount} ${classes.box}`}
                >
                    <Typography variant="body2">{receipt.postTaxAmount} kn</Typography>
                </Box>
            </Box>
            <Box
                component="span"
                className={`${classes.buttonsContainer}`}
            >
                <Button
                    onClick={() => handleEdit()}
                    variant="contained"
                    color="primary"
                    style={{ height: 40 }}
                >
                    Uredi
                </Button>
                <Button
                    onClick={() => handleDelete()}
                    variant="contained"
                    color="secondary"
                    style={{ height: 40 }}
                >
                    Izbriši
                </Button>
            </Box>
        </Box>
    );
}

export default ReceiptListItem;
