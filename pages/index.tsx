import PromotionSlide from "@/components/PromotionSlide";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SliderImage from '../components/SliderImage'
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Layout>
        <SliderImage />
        <PromotionSlide title="New Arrival"/>
        <PromotionSlide title="Best Seller"/>
        {/* <Box mt="100px" width="100vw">
          <img src="https://lep.vn/images/preview-store.png"/>
        </Box> */}
      </Layout>
    </>
  );
}
