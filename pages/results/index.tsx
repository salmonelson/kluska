/** @jsxImportSource @emotion/react */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  Typography,
  Stack,
  Box,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import { FunctionComponent, useState } from "react";

import theme from "../../styles/theme";
import Link from "next/link";
import type { NextPage } from "next";

import ContentContainer from "../../components/Layout/ContentContainer";
import OptionBar from "../../components/Results/OptionBar";

const Results: NextPage = () => {
  const router = useRouter();
  const { query, country, category, brand, page } = router.query;

  // const [pageState, setPageState] = useState(page);
  // const [queryState, setQueryState] = useState(query);
  // const [countryState, setCountryState] = useState(country);
  // const [categoryState, setCategoryState] = useState(category);
  // const [brandState, setBrandState] = useState(brand);

  return (
    <>
      <Head>
        <title>Produkty - Pastopedia</title>
        <meta name="description" content="Na projekt P. Kluski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentContainer>
        <OptionBar />
      </ContentContainer>
    </>
  );
};

export default Results;
