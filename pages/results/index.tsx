/** @jsxImportSource @emotion/react */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { Typography, Stack, Box } from "@mui/material";

import { FunctionComponent, useState } from "react";

import theme from "../../styles/theme";
import Link from "next/link";
import type { NextPage } from "next";

import ContentContainer from "../../components/Layout/ContentContainer";

const Results: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <ContentContainer>
      <Head>
        <title>Produkty - Pastopedia</title>
        <meta name="description" content="Na projekt P. Kluski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </ContentContainer>
  );
};

export default Results;
