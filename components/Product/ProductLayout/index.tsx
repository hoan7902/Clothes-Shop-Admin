import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductPopup from "./ProductPopup";
import styles from "./styles.module.css";

const ProductLayout: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <ProductPopup/>
      <Grid
        container
        borderBottom="0.5px solid #444"
        p="20px"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className={styles.textHeader} xs={6} md={4}>
          Sản phẩm
        </Grid>
        <Grid
          sx={{ display: { xs: "none", md: "block" } }}
          className={styles.textHeader}
          xs={4}
          item
        >
          Thông tin
        </Grid>
        <Grid
          className={styles.textHeader}
          xs={6} md={4}
          item
        >
          Thao tác
        </Grid>
      </Grid>

      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </>
  );
};

export default ProductLayout;
