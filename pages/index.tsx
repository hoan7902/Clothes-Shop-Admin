import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import SliderImage from '../components/SliderImage'

export default function Home() {
  return (
    <>
      <Layout>
        <SliderImage/>
      </Layout>
    </>
  );
}
