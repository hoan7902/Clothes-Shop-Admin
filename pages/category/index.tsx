import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import SliderImage from "../../components/Home/SliderImage";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./styles.module.css";
import CategoryLayout from "@/components/Category/CategoryLayout";

export default function Category() {
  return (
    <>
      <Layout>
        <Box className="container">
          <Box className="container">
            <Typography
              sx={{ paddingBottom: { xs: "1rem", md: "5rem" } }}
              className={styles.title}
            >
              DANH MỤC
            </Typography>
            <CategoryLayout />
          </Box>
        </Box>
      </Layout>
    </>
  );
}
