import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import CategoryPopup from "./CategoryPopup";
import styles from "./styles.module.css";

const OrderItem: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <CategoryPopup/>
      <Grid
        container
        borderBottom="0.5px solid #444"
        p="20px"
        justifyContent="center"
        alignItems="center"
      >
        <Grid className={styles.textHeader} xs={4}>
          Danh mục
        </Grid>
        <Grid
          sx={{ display: { xs: "none", md: "block" } }}
          className={styles.textHeader}
          xs={4}
        >
          Mô tả
        </Grid>
        <Grid
          className={styles.textHeader}
          xs={6} md={4}
        >
          Thao tác
        </Grid>
      </Grid>

      <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
    </>
  );
};

export default OrderItem;
