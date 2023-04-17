import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import OrderPopup from "../OrderPopup";

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

const OrderItem: React.FC<Props> = ({ order, reload, setReload }) => {
  const [isUpdate, setIsUpdate] = useState(true)

  return (
    <>
      <Grid container padding="25px" borderBottom="0.5px solid #444" p="20px">
        <Grid item xs={6} sm={4}>
          <Stack flexDirection="row">
            <Typography
              fontSize="1.25rem"
              fontWeight="100"
              lineHeight="1.75rem"
              color="#444"
            >
              {order?.orderId}
            </Typography>
          </Stack>
        </Grid>

        <Grid
          item
          sx={{
            marginLeft: { xs: "37%", sm: "0px" },
            display: { xs: "none", sm: "block" },
          }}
          xs={12}
          sm={4}
        >
          <Typography fontSize="1.1rem" fontWeight="400">
            {order?.status}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Stack flexDirection="row" alignItems="center">
            <OrderPopup
              reload={reload}
              setReload={setReload}
              order={order}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderItem;
