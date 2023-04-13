import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import CategoryPopup from "../CategoryPopup";

interface Category {
  categoryId: string;
  name: string;
  description: string;
}

interface Props {
  category: Category;
  reload: boolean;
  setReload: Dispatch<SetStateAction<boolean>>
}

const CategoryItem: React.FC<Props> = ({ category, reload, setReload }) => {
  const [isUpdate, setIsUpdate] = useState(true);

  return (
    <>
      <Grid container padding="25px" borderBottom="0.5px solid #444" p="20px">
        <Grid item xs={6} md={4}>
          <Stack flexDirection="row">
            <div className={styles.wrapImage}>
              <img
                width="100%"
                height="100%"
                src="https://cdn.lep.vn/2022/09/images/products/1663057005975-1VA01940HO-compressed.jpeg"
              />
            </div>
            <Stack sx={{ marginLeft: { xs: 0, sm: "30px" } }}>
              <Typography
                fontSize="1.25rem"
                fontWeight="100"
                lineHeight="1.75rem"
                color="#444"
              >
                {category.name}
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          item
          sx={{
            marginLeft: { xs: "37%", md: "0px" },
            display: { xs: "none", md: "block" },
          }}
          xs={12}
          md={4}
        >
          <Typography fontSize="1.1rem" fontWeight="400">
            {category.description}
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack flexDirection="row" alignItems="center">
            <CategoryPopup isUpdate={isUpdate} setIsUpdate={setIsUpdate} reload={reload} setReload={setReload} />
            <button className={styles.button}>Xóa</button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryItem;
