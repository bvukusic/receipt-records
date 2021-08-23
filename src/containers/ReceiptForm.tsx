import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {
    Container,
    Grid,
    InputAdornment,
    TextField,
    Box,
    Typography,
    Button,
    MenuItem
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { actionCreators } from '../state';
import { useStyles } from '../styles/ReceiptForm.style';

interface ReceiptFormProps {
    closeModal: () => void;
}

const directions = [
    {
        value: 'ulazni',
        label: 'ulazni',
    },
    {
        value: 'izlazni',
        label: 'izlazni',
    },
];

const ReceiptForm = ({ closeModal }: ReceiptFormProps): JSX.Element => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { addReceipt, updateReceipt, calculateSum } = bindActionCreators(actionCreators, dispatch);
    const receiptId = useSelector((state: RootStateOrAny) => state.receipts.nextId);
    const selectedReceipt = useSelector((state: RootStateOrAny) => state.receipts.selectedReceipt);
    const [receiptNumber, setReceiptNumber] = useState(0);
    const [RBR, setRBR] = useState(0);
    const [direction, setDirection] = useState("");
    const [receiptDate, setReceiptDate] = useState<Date | null>(new Date());;

    const [paymentDeadline, setPaymentDeadline] = useState<Date | null>(new Date());;
    const [partnerName, setPartnerName] = useState("");
    const [partnerAdress, setPartnerAdress] = useState("");
    const [partnerOIB, setPartnerOIB] = useState("");

    const [preTaxAmount, setPreTaxAmount] = useState(0);
    const [tax, setTax] = useState(0);
    const [taxAmount, setTaxAmount] = useState(0);
    const [postTaxAmount, setPostTaxAmount] = useState(0);

    useEffect(() => {
        if (!selectedReceipt) return;

        setReceiptNumber(selectedReceipt.receiptNumber);
        setRBR(selectedReceipt.RBR);
        setDirection(selectedReceipt.direction);
        setReceiptDate(selectedReceipt.receiptDate);
        setPaymentDeadline(selectedReceipt.paymentDeadline);
        setPartnerName(selectedReceipt.partnerName);
        setPartnerAdress(selectedReceipt.partnerAdress);
        setPartnerOIB(selectedReceipt.partnerOIB);
        setPreTaxAmount(selectedReceipt.preTaxAmount);
        setTax(selectedReceipt.tax);

    }, [selectedReceipt]);


    const handleSave = () => {
        if (
            !receiptNumber || !RBR || direction === "" ||
            partnerName === "" || !partnerOIB ||
            !preTaxAmount || !tax || !taxAmount || !postTaxAmount
        )
            return;
        saveReceipt();
    };

    const saveReceipt = () => {
        var formattedData = {
            "id": selectedReceipt ? selectedReceipt.id : receiptId,
            "receiptNumber": receiptNumber,
            "RBR": RBR,
            "direction": direction,
            "receiptDate": receiptDate,
            "paymentDeadline": paymentDeadline,
            "partnerName": partnerName,
            "partnerAdress": partnerAdress,
            "partnerOIB": partnerOIB,
            "preTaxAmount": preTaxAmount,
            "tax": tax,
            "taxAmount": taxAmount,
            "postTaxAmount": postTaxAmount,
        };

        if (selectedReceipt) {
            updateReceipt(formattedData);
        }
        else {
            addReceipt(formattedData);
        }
        calculateSum();

        closeModal();
    };


    useEffect(() => {
        if (preTaxAmount === 0) return;
        var calcTaxAmount = preTaxAmount * tax * 0.01;
        var calcPostTaxAmount = preTaxAmount * tax * 0.01 + preTaxAmount;
        setTaxAmount(+calcTaxAmount.toFixed(2));
        setPostTaxAmount(+calcPostTaxAmount.toFixed(2));
    }, [preTaxAmount, tax]);

    return (
        <Container maxWidth="sm">
            <Box
                component="div"
                className={classes.titleContainer}>
                <Typography variant="h3" align="center" >{!selectedReceipt ? "Dodavanje računa"
                    : "Uređivanje računa"}</Typography>
            </Box>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={3} alignContent="space-between" >
                    <Grid item >
                        <TextField
                            value={receiptNumber}
                            onChange={e => setReceiptNumber(+e.target.value)}
                            variant="outlined"
                            className={classes.textField}
                            type="number"
                            color="primary"
                            label="Broj računa"
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            value={RBR}
                            onChange={e => setRBR(+e.target.value)}
                            variant="outlined"
                            className={classes.textField}
                            type="number"
                            color="primary"
                            label="RBR"
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            select
                            value={direction}
                            onChange={e => setDirection(e.target.value)}
                            variant="outlined"
                            className={classes.textField}
                            color="primary"
                            label="Smjer"
                        >
                            {directions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item >
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Datum računa"
                            value={receiptDate}
                            onChange={newDate => setReceiptDate(newDate)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Box
                        component="div"
                        className={classes.spreadBox} />
                    <Grid item >
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Rok plaćanja"
                            value={paymentDeadline}
                            onChange={newDate => setPaymentDeadline(newDate)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            value={partnerName}
                            onChange={e => setPartnerName(e.target.value)}
                            variant="outlined"
                            className={classes.textField}
                            color="primary"
                            label="Naziv partnera"
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            value={partnerAdress}
                            onChange={e => setPartnerAdress(e.target.value)}
                            variant="outlined"
                            className={classes.textField}
                            color="primary"
                            label="Adresa partnera"
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            value={partnerOIB}
                            onChange={e => setPartnerOIB(e.target.value)}
                            variant="outlined"
                            className={classes.textField}
                            color="primary"
                            type="number"
                            label="OIB partnera"
                        />
                    </Grid>
                    <Box
                        component="div"
                        className={classes.spreadBox} />
                    <Grid item >
                        <TextField
                            value={preTaxAmount}
                            onChange={e => setPreTaxAmount(+e.target.value)}
                            variant="outlined"
                            className={classes.textField}
                            color="primary"
                            type="number"
                            label="Iznos prije poreza"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">kn</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            value={tax}
                            onChange={e => setTax(+e.target.value)}
                            variant="outlined"
                            className={classes.textField}
                            color="primary"
                            type="number"
                            label="Porez"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">%</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            value={taxAmount}
                            variant="outlined"
                            className={classes.textField}
                            color="primary"
                            disabled
                            label="Iznos poreza"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">kn</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            value={postTaxAmount}
                            label="Cijena sa porezom"
                            id="outlined-start-adornment"
                            disabled
                            className={classes.textField}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">kn</InputAdornment>,
                            }}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
            <Box
                component="div"
                className={classes.buttonContainer}>
                <Button
                    onClick={() => handleSave()}
                    variant="contained"
                    color="primary"
                    style={{
                        width: "150px",
                        height: 50,
                        margin: 20,
                    }}
                >SPREMI</Button>
                <Button
                    onClick={() => { }}
                    variant="contained"
                    color="secondary"
                    style={{
                        width: "150px",
                        height: 50,
                        margin: 20,
                    }}
                >ODUSTANI</Button>
            </Box>
        </Container>
    );
}

export default ReceiptForm;
