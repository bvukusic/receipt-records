import { useSelector, RootStateOrAny } from 'react-redux';
import format from 'date-fns/format';
import {
    Container,
    Grid,
    Box,
    Typography,
    Button,
} from '@material-ui/core';
import { useStyles } from '../styles/ReceiptDetails.style';

interface ReceiptDetailsProps {
    closeModal: () => void;
}

const ReceiptDetails = ({ closeModal }: ReceiptDetailsProps): JSX.Element => {
    const classes = useStyles();
    const selectedReceipt = useSelector((state: RootStateOrAny) => state.receipts.selectedReceipt);

    return (
        <Container maxWidth="sm">
            <Box
                component="div"
                className={classes.titleContainer}>
                <Typography variant="h5">Detalji računa</Typography>
            </Box>
            <Grid container spacing={4}  className={classes.card} >
                <Grid item >
                    <Typography variant="caption">Broj računa</Typography>
                    <Typography variant="body1">{selectedReceipt.receiptNumber}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption">RBR</Typography>
                    <Typography variant="body1">{selectedReceipt.RBR}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption">Smjer</Typography>
                    <Typography variant="body1">{selectedReceipt.direction}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption">Datum računa</Typography>
                    <Typography variant="body1">{format(selectedReceipt.receiptDate, 'dd.MM.yyyy')}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4}  className={classes.card} >
                <Grid item >
                    <Typography variant="caption">Rok plaćanja</Typography>
                    <Typography variant="body1">{format(selectedReceipt.paymentDeadline, 'dd.MM.yyyy')}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption">Naziv partnera</Typography>
                    <Typography variant="body1">{selectedReceipt.partnerName}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption">Adresa partnera</Typography>
                    <Typography variant="body1">{selectedReceipt.partnerAdress}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption">OIB partnera</Typography>
                    <Typography variant="body1">{selectedReceipt.partnerAdress}</Typography>
                </Grid>
            </Grid> 
            <Grid container spacing={4}  className={classes.card}>
                <Grid item >
                    <Typography variant="caption">Iznos prije poreza</Typography>
                    <Typography variant="body1">{selectedReceipt.preTaxAmount}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption">Porez</Typography>
                    <Typography variant="body1">{selectedReceipt.tax}</Typography>
                </Grid>
                <Grid item >
                    <Typography variant="caption">Iznos poreza</Typography>
                    <Typography variant="body1">{selectedReceipt.taxAmount}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="caption">Iznos nakon poreza</Typography>
                    <Typography variant="body1">{selectedReceipt.postTaxAmount}</Typography>
                </Grid>
            </Grid>              
            <Box
                component="div"
                className={classes.buttonContainer}>
                <Button
                    onClick={() => closeModal()}
                    variant="contained"
                    color="primary"
                    style={{
                        width: "150px",
                        height: 50,
                        margin: 20,
                    }}
                >ZATVORI</Button>
            </Box>
        </Container>
    );
}

export default ReceiptDetails;
