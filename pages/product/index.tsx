import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import SliderImage from "../../components/Home/SliderImage";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import ProductItem from "@/components/Product/ProductLayout/ProductItem";
import ProductLayout from "@/components/Product/ProductLayout";
import { useEffect, useState } from "react";
import { getProducts } from "../api";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await getProducts(limit, page);
      setProducts(res.data.data);
      setTotal(res.data.count);
    }

    fetchData();
  }, [reload]);

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
            <ProductLayout
              limit={limit}
              page={page}
              setPage={setPage}
              total={total}
              products={products}
              reload={reload}
              setReload={setReload}
            />
          </Box>
        </Box>
      </Layout>
    </>
  );
}
