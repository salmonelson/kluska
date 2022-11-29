/** @jsxImportSource @emotion/react */

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Typography, Divider, Box, IconButton } from "@mui/material";

import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/cartSlice";

import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

import { FunctionComponent, useState } from "react";
import type { NextPage } from "next";

import Carousel from "react-material-ui-carousel";
import ContentContainer from "../components/Layout/ContentContainer";

import database from "../data/products.json";

import styles from "../pages/results/results.module.css";

const staticProds = [514, 408, 424, 61, 289, 517];

interface HomeProductProps {
  index: number;
}

//COMPONENT

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const dispatch = useAppDispatch();

  const HomeProduct: FunctionComponent<HomeProductProps> = ({ index }) => {
    const product = database[index];
    return (
      <Box
        sx={{
          width: "300px",
          height: "283px",
          border: 1,
          borderColor: "text.primary",
          borderRadius: "15px",
          position: "relative",
          margin: "0 0 33px 33px",
        }}
      >
        <Link href={`/produkt/${product.id}`}>
          {/* IMGAGE AND CAPTIONS */}
          <Image
            className={styles.product_image}
            style={{ margin: "5px 75px" }}
            src={product.img}
            alt="Obraz"
            objectFit="cover"
            width={150}
            height={150}
          />
        </Link>
        <Box sx={{ marginInline: "16px" }}>
          <Link
            className={`${styles.link} ${styles.title}`}
            href={`/produkt/${product.id}`}
          >
            <Typography sx={{ fontSize: "0.9rem" }}>{product.title}</Typography>
          </Link>
          <br />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              bottom: "12px",
              position: "absolute",
              width: "270px",
            }}
          >
            <Typography
              sx={{
                marginBlock: "auto",
                marginLeft: "2px",
                fontSize: "1.4rem",
                borderBottom: 1,
              }}
            >
              {product.price} zł
            </Typography>
            <IconButton
              onClick={() => dispatch(addToCart({ id: product.id }))}
              aria-label="add-to-cart"
              size="large"
              sx={{
                border: 1,
                borderColor: "transparent",
                transition: "0.2s ease",

                "&:hover": {
                  transition: "0.2s ease",
                  borderColor: "text.primary",
                  color: "#BE931B",
                },
              }}
            >
              <AddShoppingCartRoundedIcon fontSize="inherit" color="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  };

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
          <Box component="img" src="/bground-h.png" alt="Carousel"></Box>
          <Box component="img" src="/bground-h.png" alt="Carousel"></Box>
          <Box component="img" src="/bground-h.png" alt="Carousel"></Box>
        </Carousel>

        <Box
          sx={{
            width: "1400px",
            height: "150px",
            display: "flex",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              marginInline: "auto",
              marginTop: "20px",
              fontWeight: "bold",
              textShadow:
                "-1px -1px 0 #BE931B, 1px -1px 0 #BE931B, -1px 1px 0 #BE931B, 1px 1px 0 #BE931B",
            }}
          >
            Polecamy:
          </Typography>
        </Box>

        {/*  PRODUCTS/CONTENT WRAPPER */}
        <Box
          sx={{
            width: "1400px",
            height: "600px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* HOTSHOT */}
          <Box
            sx={{
              width: "400px",
              height: "600px",
              border: 3,
              borderRadius: "15px",
              borderColor: "secondary.main",
              backgroundColor: "primary.main",
            }}
          >
            <Link href="produkt/73">
              <Box
                component="img"
                src={database[72].img}
                alt="Produkt"
                sx={{
                  width: "300px",
                  height: "300px",
                  border: 1,
                  borderColor: "text.primary",
                  borderRadius: "15px",
                  margin: "50px 50px 10px 50px",
                }}
              />
            </Link>
            <Box
              sx={{
                width: "300px",
                height: "180px",
                border: 1,
                borderColor: "text.primary",
                borderRadius: "15px",
                margin: "0 50px 50px 50px",
                backgroundColor: "white",
                position: "relative",
              }}
            >
              <Link href="produkt/73" style={{ textDecoration: "none" }}>
                <Typography
                  fontWeight="bold"
                  sx={{
                    margin: "15px",
                    textDecoration: "none",
                    color: "text.primary",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Cipriani Organic Tagliardi Extra Thin Durum Wheat Egg Pasta
                </Typography>
              </Link>
              <Typography
                sx={{
                  margin: "33px 15px 15px 15px",
                  textDecoration: "line-through",
                }}
              >
                36.65 zł
              </Typography>
              {/* PRICE/ADD TO CART WRAPPER */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  margin: "15px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "360px",
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  29.95 zł
                </Typography>
                <IconButton
                  onClick={() => dispatch(addToCart({ id: 73 }))}
                  aria-label="add-to-cart"
                  size="large"
                  sx={{
                    border: 1,
                    borderColor: "transparent",
                    transition: "0.2s ease",

                    "&:hover": {
                      transition: "0.2s ease",
                      borderColor: "text.primary",
                      color: "#BE931B",
                    },
                  }}
                >
                  <AddShoppingCartRoundedIcon
                    fontSize="inherit"
                    color="inherit"
                  />
                </IconButton>
                ;
              </Box>
            </Box>
          </Box>
          {/* OTHER LIL' CONTENT */}

          <Box
            sx={{
              width: "1000px",
              height: "600px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {staticProds.map((element, index) => (
              <HomeProduct key={index} index={element} />
            ))}
          </Box>
        </Box>
      </ContentContainer>
    </>
  );
};

export default Home;
