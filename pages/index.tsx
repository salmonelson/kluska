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

      <ContentContainer>
        <Box
          sx={{
            width: "1350px",
            height: "300px",
            margin: "25px",
            bgcolor: "red",
            borderRadius: "15px",
            border: 2,
            borderColor: "transparent",
            position: "relative",
            "&:hover": {
              borderColor: "text.primary",
            },
          }}
        ></Box>
      </ContentContainer>
    </>
  );
};

export default Home;
