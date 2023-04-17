import { Grid, Stack, Typography } from "@mui/material";
import ProductItem from "./ProductItem";
import ProductPopup from "./ProductPopup";
import styles from "./styles.module.css";
import React, { Dispatch, SetStateAction, useState } from "react";
import Pagination from "@mui/material/Pagination";

interface Product {
  productId: string;
  createdAt: string;
  name: string;
  description: string;
  minPrice: string;
  maxPrice: string;
  soldQuantity: string;
  images: string[];
}

interface Props {
  limit: number,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  total: number,
  products?: Product[],
  reload: boolean,
  setReload: Dispatch<SetStateAction<boolean>>
}

const ProductLayout: React.FC<Props> = ({
  limit,
  page,
  setPage,
  total,
  products,
  reload,
  setReload,
}) => {

  const [quantity, setQuantity] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value);
    setReload(!reload);
  }

  return (
    <>
      <ProductPopup reload={reload} setReload={setReload} />
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
        <Grid className={styles.textHeader} xs={6} md={4} item>
          Thao tác
        </Grid>
      </Grid>

      {products?.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          reload={reload}
          setReload={setReload}
        />
      ))}
      <Stack m="20px 0" width="100%" alignItems="center">
        <Pagination count={Math.ceil(total / limit)} onChange={handlePageChange} />
      </Stack>
    </>
  );
};

export default ProductLayout;
