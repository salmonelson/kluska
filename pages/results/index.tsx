/** @jsxImportSource @emotion/react */

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Pagination,
  Breadcrumbs,
  Typography,
  Chip,
  Divider,
  Box,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import {
  useQueryParams,
  StringParam,
  NumberParam,
  withDefault,
  DelimitedNumericArrayParam,
} from "use-query-params";

import { useEffect, useState } from "react";

import type { NextPage } from "next";

import ContentContainer from "../../components/Layout/ContentContainer";
import OptionBar from "../../components/Results/OptionBar";
import ProductElement from "../../components/Results/ProductElement";

import styles from "./results.module.css";

import database from "../../data/products.json";

import options from "../../data/options.json";

interface Product {
  id: number;
  title: string;
  category: number[];
  country: number;
  brand: string;
  price: number;
  img: string;
}

//COMPONENT

const Results: NextPage = () => {
  const FiltersParam = withDefault(DelimitedNumericArrayParam, []);

  const [query, setQuery] = useQueryParams({
    search: StringParam,
    country: FiltersParam,
    category: FiltersParam,
    brand: FiltersParam,
    page: NumberParam,
  });

  const [page, setPage] = useState(1);

  const commonCategory = (element: number) => query.category.includes(element);

  const filtered = database.filter(
    (el) =>
      (query.country.length > 0 ? query.country.includes(el.country) : true) &&
      (query.category.length > 0 ? el.category.some(commonCategory) : true) &&
      (query.brand.length > 0
        ? query.brand.includes(options.brands.indexOf(el.brand))
        : true) &&
      (query.search === undefined || query.search === null
        ? true
        : query.search.length > 0
        ? el.title.toLowerCase().includes(query.search.toLowerCase())
        : true)
  );

  const numOfProducts = filtered.length;

  const productsReady: Product[][] = [];

  while (filtered.length > 0) {
    productsReady.push(filtered.splice(0, 30));
  }

  const handleDelete = () => {
    setQuery({ ...query, search: undefined }, "push");
  };

  const breadcrumbs = [
    <Link className={styles.breadcrumbs} key="1" href="/">
      Pastopedia
    </Link>,
    <Link className={styles.breadcrumbs} key="2" href="/results">
      Przeglądanie
    </Link>,
    query.search === undefined || query.search?.length == 0 ? null : (
      <Typography key="3" color={"text.primary"}>
        Wyszikuwanie:{" "}
        <Chip
          label={`„${query.search}”`}
          variant="outlined"
          onDelete={handleDelete}
          sx={{ fontSize: "0.9rem", height: "1.6rem" }}
        />
      </Typography>
    ),
  ];

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setQuery({ ...query, page: value }, "push");
  };

  useEffect(() => {
    setPage(query.page === undefined || query.page === null ? 1 : query.page);
  }, [query.page]);

  //RETURN

  return (
    <>
      <Head>
        <title>Produkty - Pastopedia</title>
        <meta name="description" content="result page" />
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
          <Typography>({numOfProducts} wyników)</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* OPTIONS*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginInline: "24px",
            }}
          >
            <OptionBar />
          </Box>
          {/* PRODUCTS WRAPPER  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "1000px",
            }}
          >
            {/* PRODUCTS */}
            <Pagination
              hidden={numOfProducts < 30}
              count={productsReady.length}
              page={page}
              variant="outlined"
              color="secondary"
              size="large"
              onChange={handlePageChange}
              sx={{
                marginInline: "auto",
                marginBottom: "24px",
                color: "text.primary",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {numOfProducts > 0 ? (
                productsReady[
                  query.page === undefined || query.page === null
                    ? 0
                    : query.page - 1
                ].map((element, index) => (
                  <ProductElement key={index} product={element} index={index} />
                ))
              ) : (
                <>
                  <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    marginTop="30px"
                    marginBottom="10px"
                  >
                    Przepraszamy, nie znaleźliśmy wyników spełniających podane
                    wymagania.
                  </Typography>
                  <Typography>
                    Spróbuj odznaczyć niektóre z filtrów lub użyć prostszych
                    fraz.
                  </Typography>
                </>
              )}
            </Box>
            <Pagination
              hidden={numOfProducts < 30}
              count={productsReady.length}
              page={page}
              variant="outlined"
              color="secondary"
              size="large"
              onChange={handlePageChange}
              sx={{
                marginInline: "auto",
                marginTop: "24px",
                color: "text.primary",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            height: "100px",
            display: "flex",
          }}
        ></Box>
      </ContentContainer>
    </>
  );
};

export default Results;
