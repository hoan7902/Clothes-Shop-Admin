import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import SliderImage from "../../components/Home/SliderImage";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import ProductItem from "@/components/Product/ProductLayout/ProductItem";
import ProductLayout from "@/components/Product/ProductLayout";

export default function Product() {
  return (
    <>
      <Layout>
        <Box className="container">
          <Box className="container">
            <Typography
              sx={{ paddingBottom: { xs: "1rem", md: "5rem" } }}
              className={styles.title}
            >
              sản phẩm
            </Typography>
            <ProductLayout/>
          </Box>
        </Box>
      </Layout>
    </>
  );
}
