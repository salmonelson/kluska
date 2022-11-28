/** @jsxImportSource @emotion/react */

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Typography, Divider, Box, IconButton } from "@mui/material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

import { useAppDispatch } from "../redux/hooks";

import { useState } from "react";
import type { NextPage } from "next";

import Carousel from "react-material-ui-carousel";
import ContentContainer from "../components/Layout/ContentContainer";

import database from "../data/products.json";

import options from "../data/options.json";

const imgPlaceholder = "/logo-white-bold.png";

//COMPONENT

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Head>
        <title>Pastopedia</title>

        <meta name="description" content="product page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* CAROUSEL */}
      <ContentContainer>
        <Carousel
          navButtonsAlwaysVisible
          autoPlay
          animation="slide"
          indicators={false}
          navButtonsWrapperProps={{ style: { marginBlock: "auto" } }}
          sx={{
            width: "1400px",
            height: "300px",
            marginBlock: "25px",
            borderRadius: "15px",
          }}
        >
          <Box component="img" src="/bground.png" alt="Carousel"></Box>
          <Box component="img" src="/bground.png" alt="Carousel"></Box>
          <Box component="img" src="/bground.png" alt="Carousel"></Box>
        </Carousel>

        {/*  PRODUCTS/CONTENT WRAPPER */}
        <Box
          sx={{
            width: "1400px",
            height: "700px",
            display: "flex",
            flexDirection: "row",
            // bgcolor: "black",
          }}
        >
          <Box
            sx={{
              width: "400px",
              height: "600px",
              border: 3,
              borderColor: "text.primary",
              borderRadius: "15px",
              position: "relative",
            }}
          ></Box>
        </Box>
      </ContentContainer>
    </>
  );
};

export default Home;
