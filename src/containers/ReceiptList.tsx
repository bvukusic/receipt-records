import { Box, Button, Modal, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import ReceiptListFooter from '../components/ReceiptListFooter';
import ReceiptListHeader from '../components/ReceiptListHeader';
import ReceiptListItem from '../components/ReceiptListItem';
import ReceiptDetails from './ReceiptDetails';
import ReceiptForm from './ReceiptForm';
import { useStyles } from '../styles/ReceiptList.style';



const ReceiptList = () => {
  const classes = useStyles()
  const receipts = useSelector((state: RootStateOrAny) => state.receipts);
  const dispatch = useDispatch();
  const { selectReceipt } = bindActionCreators(actionCreators, dispatch);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);

  const [receiptsDisplay, setReceiptsDisplay] = useState(receipts.receipts);

  useEffect(() => {
    setReceiptsDisplay(receipts.receipts);
  }, [receipts]);

  const sortReceiptsDisplay = (value: string) => {
    var sortedArray = receiptsDisplay.sort((a: any, b: any) =>
    (a[value] > b[value]) ? 1 : ((b[value] > a[value]) ? -1 : 0));
    setReceiptsDisplay([...sortedArray]);
  }

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    selectReceipt(null);
  };

  const handleOpenDetailsModal = () => {
    setOpenDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setOpenDetailsModal(false);
    selectReceipt(null);
  };

  const editModalBody = (
    <div className={classes.paper}>
      <ReceiptForm closeModal={handleCloseEditModal} />
    </div>
  );

  const detailsModalBody = (
    <div className={classes.paper}>
      <ReceiptDetails closeModal={handleCloseDetailsModal} />
    </div>
  );

  return (
    <div
      className={`${classes.receiptListContainer}`} >
      <Box component="span"
        className={`${classes.headerContainer}`}>
        <Typography variant="h4">Evidencija računa</Typography>
        <Button
          onClick={() => handleOpenEditModal()}
          variant="contained"
          color="primary"
          style={{ height: 50, width: 200 }}
        >
          Dodaj
        </Button>
      </Box>
      <ReceiptListHeader sortByValue={sortReceiptsDisplay} />
      {
        receiptsDisplay.map((item: any) => <ReceiptListItem receipt={item}
          openEditModal={() => handleOpenEditModal()}
          openDetailsModal={() => handleOpenDetailsModal()}
          key={item.id}
        />)
      }
      <ReceiptListFooter />
      <Modal
        open={openEditModal}
        onClose={handleCloseEditModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {editModalBody}
      </Modal>
      <Modal
        open={openDetailsModal}
        onClose={handleCloseDetailsModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {detailsModalBody}
      </Modal>
    </div>
  );
}

export default ReceiptList;
