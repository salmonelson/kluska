/** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Pagination,
  Breadcrumbs,
  Typography,
  Stack,
  Divider,
  Box,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import {
  useQueryParams,
  StringParam,
  NumberParam,
  withDefault,
  DelimitedNumericArrayParam,
  NumericObjectParam,
} from "use-query-params";

import { FunctionComponent, useState } from "react";

import theme from "../../styles/theme";
import type { NextPage } from "next";

import ContentContainer from "../../components/Layout/ContentContainer";
import OptionBar from "../../components/Results/OptionBar";
import ProductElement from "../../components/Results/ProductElement";

import styles from "./results.module.css";

import database from "../../data/products.json";

import options from "../../data/options.json";

interface Product {
  title: string;
  category: number[];
  country: number;
  brand: string;
  price: number;
  img: string;
}

const Results: NextPage = () => {
  const FiltersParam = withDefault(DelimitedNumericArrayParam, []);

  const [query, setQuery] = useQueryParams({
    search: StringParam,
    country: FiltersParam,
    category: FiltersParam,
    brand: FiltersParam,
    page: NumberParam,
  });

  const commonCategory = (element: number) => query.category.includes(element);

  const filtered = database.filter(
    (el) =>
      (query.country.length > 0 ? query.country.includes(el.country) : true) &&
      (query.category.length > 0 ? el.category.some(commonCategory) : true) &&
      (query.brand.length > 0
        ? query.brand.includes(options.brands.indexOf(el.brand))
        : true)
  );

  const breadcrumbs = [
    <Link className={styles.breadcrumbs} key="1" href="/">
      Pastopedia
    </Link>,
    <Link className={styles.breadcrumbs} key="2" href="/results">
      Przeglądanie
    </Link>,
    query.search === undefined ? null : (
      <Typography key="3" color={"text.primary"}>
        „{query.search}”
      </Typography>
    ),
  ];

  console.log(query.brand);

  return (
    <>
      <Head>
        <title>Produkty - Pastopedia</title>
        <meta name="description" content="Na projekt P. Kluski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentContainer>
        {/* UPPER BAR */}
        <Box sx={{ height: "100px", marginInline: "24px" }}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon
                fontSize="small"
                sx={{ color: "text.primary" }}
              />
            }
            aria-label="breadcrumb"
            sx={{ marginTop: "20px", marginBottom: "10px" }}
          >
            {breadcrumbs}
          </Breadcrumbs>
          <Typography>
            ({filtered.length} wyników, category: {query.category}, country:{" "}
            {query.country}, brand: {query.brand})
          </Typography>
        </Box>
        {/* OPTIONS AND PRODUCTS WRAPPER */}
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginInline: "24px",
            }}
          >
            <OptionBar />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* PRODUCTS */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {filtered.map((element, index) => (
                <ProductElement key={index} product={element} index={index} />
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100px",
            display: "flex",
          }}
        >
          <Pagination
            count={10}
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              margin: "auto",
              color: "text.primary",
            }}
          />
        </Box>
      </ContentContainer>
    </>
  );
};

export default Results;
