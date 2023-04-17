import { Grid, Stack } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import OrderItem from "./OrderItem";
import styles from "./styles.module.css";
import Pagination from "@mui/material/Pagination";

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
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  orderData?: OrderData[];
  reload: boolean;
  setReload: Dispatch<SetStateAction<boolean>>;
}

const OrderLayout: React.FC<Props> = ({
  limit,
  page,
  setPage,
  total,
  orderData,
  reload,
  setReload,
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setPage(value);
    setReload(!reload);
  };

  return (
    <div>
      <Grid
        container
        borderBottom="0.5px solid #444"
        p="20px"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className={styles.textHeader} xs={6} sm={4}>
          Mã đơn hàng
        </Grid>
        <Grid
          sx={{ display: { xs: "none", sm: "block" } }}
          className={styles.textHeader}
          xs={4}
          item
        >
          Trạng thái
        </Grid>
        <Grid className={styles.textHeader} xs={6} sm={4} item>
          Thao tác
        </Grid>
      </Grid>

      {orderData?.map((order, index) => (
        <OrderItem
          key={index}
          order={order}
          reload={reload}
          setReload={setReload}
        />
      ))}
      <Stack m="20px 0" width="100%" alignItems="center">
        <Pagination
          count={Math.ceil(total / limit)}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
};

export default OrderLayout;
