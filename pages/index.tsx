import PromotionSlide from "@/components/Home/PromotionSlide";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SliderImage from "../components/Home/SliderImage";
import { Box } from "@mui/material";
import CollectionSlide from "@/components/Home/CollectionSlide";
import LocationBanner from "@/components/Home/LocationBanner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <Layout>
        <SliderImage />
        <PromotionSlide title="New Arrival" />
        <CollectionSlide />
        <PromotionSlide title="Best Seller" />
        <LocationBanner />
      </Layout>
    </>
  );
}
