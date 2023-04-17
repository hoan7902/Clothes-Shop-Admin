import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Typography,
  Snackbar,
  Alert,
  AlertColor,
} from "@mui/material";
import styles from "./styles.module.css";
import { addCategory, updateStatusOrder } from "@/pages/api";
import axios from "axios";
import { useEffect } from "react";

interface OrderData {
  address: string;
  cost: number | string; // Depending on how the data is used, the cost can be represented as either a number or a string
  deliveryTime: Date | null;
  note: string;
  orderId: string;
  orderTime: string;
  phone: string;
  status: string;
  userId: string;
}

interface Props {
  order?: OrderData;
  reload: boolean;
  setReload: Dispatch<SetStateAction<boolean>>;
}

const OrderPopup: React.FC<Props> = ({ order, reload, setReload }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<string>(order?.status || "");
  const [openNoti, setOpenNoti] = useState(false);
  const [statusAlert, setStatusAlert] = useState<AlertColor>("success");
  const [messageAlert, setMessageAlert] = useState("Cập nhật thành công");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setStatus(event.target.value);
  };

  const handleCloseNoti = (
    event: React.SyntheticEvent | Event | undefined = undefined,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNoti(false);
  };

  const handleUpdateStatus = async () => {
    if (order) {
      const response = await updateStatusOrder(status, order?.orderId);
      setReload(!reload);
      setOpen(false);
      setOpenNoti(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCloseNoti(undefined, "timeout");
    }, 3000);
    return () => clearTimeout(timer);
  }, [openNoti, handleCloseNoti]);

  return (
    <div>
      <button onClick={handleOpen} className={styles.button}>
        Chi tiết và cập nhật
      </button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle className={styles.wrapForm}>Chi tiết đơn hàng</DialogTitle>
        <DialogContent>
          <Stack>
            <Typography>Status: {order?.status}</Typography>
            <Typography>Số điện thoại: {order?.phone}</Typography>
            <Typography>Tổng chi phí: {order?.cost}</Typography>
            <Typography>Note: {order?.note}</Typography>
            <Typography>Địa chỉ: {order?.address}</Typography>
            <Typography>Thời gian đặt hàng: {order?.orderTime}</Typography>
            <Stack mt="20px">
              <Typography>Update Status:</Typography>
              <select
                name="status"
                value={status}
                onChange={handleStatusChange}
                className={styles.select}
              >
                <option value="Canceled">Canceled</option>
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Shipping">Shipping</option>
                <option value="Done">Done</option>
              </select>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateStatus} color="primary">
            Cập nhật trạng thái đơn hàng
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openNoti}
        autoHideDuration={null}
        onClose={handleCloseNoti}
      >
        <Alert
          onClose={handleCloseNoti}
          severity={statusAlert}
          sx={{ width: "100%" }}
        >
          {messageAlert}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default OrderPopup;
