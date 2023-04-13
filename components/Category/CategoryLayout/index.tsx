import { getCategories } from "@/pages/api";
import { Grid, Stack, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import CategoryItem from "./CategoryItem";
import CategoryPopup from "./CategoryPopup";
import styles from "./styles.module.css";

interface Category {
  categoryId: string;
  name: string;
  description: string;
}

interface Props {
  categories?: Category[];
  reload: boolean;
  setReload: Dispatch<SetStateAction<boolean>>
}

const CategoryLayout: React.FC<Props> = ({ categories, reload, setReload }) => {

  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <CategoryPopup reload={reload} setReload={setReload} />
      <Grid
        container
        borderBottom="0.5px solid #444"
        p="20px"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className={styles.textHeader} xs={6} md={4}>
          Danh mục
        </Grid>
        <Grid
          item
          sx={{ display: { xs: "none", md: "block" } }}
          className={styles.textHeader}
          xs={4}
        >
          Mô tả
        </Grid>
        <Grid item className={styles.textHeader} xs={6} md={4}>
          Thao tác
        </Grid>
      </Grid>
      {
        categories?.map((category, index) => <CategoryItem key={index} category={category} reload={reload} setReload={setReload} />)
      }
    </>
  );
};

export default CategoryLayout;
