/** @jsxImportSource @emotion/react */

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Typography, Divider, Box, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";

import { FunctionComponent, useState } from "react";

import type { NextPage } from "next";

import ContentContainer from "../../components/Layout/ContentContainer";

import database from "../../data/products.json";
import options from "../../data/options.json";
import text from "../../data/const.json";

import styles from "../../pages/results/results.module.css";

const imgPlaceholder = "/logo-white-bold.png";

interface HomeProductProps {
  index: number;
}

//COMPONENT

const Produkt: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(1);

  const cart = useAppSelector((state) => state.cart);

  // TRASH
  const HomeProduct: FunctionComponent<HomeProductProps> = ({ index }) => {
    return (
      <Box
        sx={{
          width: "300px",
          height: "400px",
          border: 1,
          borderColor: "text.primary",
          borderRadius: "15px",
          position: "relative",
          marginBottom: "50px",
        }}
      >
        <Link href={`/produkt/${database[index].id}`}>
          {/* IMGAGE AND CAPTIONS */}
          <Image
            className={styles.product_image}
            style={{ margin: "10px 25px" }}
            src={database[index].img}
            alt="Obraz"
            objectFit="cover"
            width={250}
            height={250}
          />
        </Link>
        <Box sx={{ marginInline: "16px" }}>
          <Link
            className={`${styles.link} ${styles.title}`}
            href={`/produkt/${database[index].id}`}
          >
            <Typography sx={{ fontSize: "0.9rem" }}>
              {database[index].title}
            </Typography>
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
              {database[index].price} zł
            </Typography>
            <IconButton
              onClick={() => dispatch(addToCart({ id: database[index].id }))}
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

      <ContentContainer>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* IMAGE */}
          <Box
            sx={{
              bgcolor: "background.paper",
              border: 1,
              borderColor: "text.primary  ",
              borderRadius: "15px",
              margin: "25px 25px 0 0",
              width: "800px",
              height: "800px",
            }}
          >
            <Image
              src={
                id !== undefined &&
                (Array.isArray(id)
                  ? imgPlaceholder
                  : database[Number(id) - 1].img)
              }
              alt="Produkt"
              objectFit="cover"
              width={700}
              height={700}
              style={{ margin: "50px" }}
            />
          </Box>
          {/* INFO BOX */}
          <Box
            sx={{
              bgcolor: "background.paper",
              border: 1,
              borderColor: "text.primary  ",
              borderRadius: "15px",
              marginBlock: "25px",
              width: "675px",
              height: "290px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box sx={{ margin: "20px" }}>
              <Typography variant="h5" fontWeight="bold">
                {id !== undefined && database[Number(id) - 1].title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  marginBlock: "14px",
                }}
              >
                <Link
                  href={`/results?brand=${
                    id !== undefined &&
                    options.brands.indexOf(database[Number(id) - 1].brand)
                  }`}
                  style={{
                    textDecoration: "none",
                    color: "#212121",
                  }}
                >
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {id !== undefined && database[Number(id) - 1].brand}
                  </Typography>
                </Link>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ marginInline: "10px" }}
                />
                <Link
                  href={`/results?country=${
                    id !== undefined && database[Number(id) - 1].country
                  }`}
                  style={{
                    textDecoration: "none",
                    color: "#212121",
                  }}
                >
                  <Typography
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {id !== undefined &&
                      options.countries[database[Number(id) - 1].country]}
                  </Typography>
                </Link>
              </Box>
              <Divider orientation="horizontal" flexItem />
              <Typography variant="h6" marginTop="25px">
                Cena: {id !== undefined && database[Number(id) - 1].price} zł
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "12px",
                }}
              >
                {/* QUANTITY */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    bottom: "12px",
                    position: "absolute",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ marginTop: "4px", marginRight: "10px" }}
                  >
                    Ilość:
                  </Typography>
                  <Box
                    sx={{
                      border: 1,
                      height: "40px",
                      borderRadius: "20px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "32px",
                      marginBlock: "auto",
                    }}
                  >
                    <IconButton
                      aria-label="remove-quantity"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      sx={{ marginBlock: "auto", color: "text.primary" }}
                    >
                      <RemoveIcon fontSize="inherit" />
                    </IconButton>
                    <Box sx={{ width: "60px" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          marginBlock: "auto",
                          marginInline: "5px",
                        }}
                      >
                        {quantity}
                      </Typography>
                    </Box>
                    <IconButton
                      aria-label="add-quantity"
                      onClick={() => setQuantity(quantity + 1)}
                      sx={{ marginBlock: "auto", color: "text.primary" }}
                    >
                      <AddIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                  <Box
                    onClick={() => {
                      for (let step = 0; step < quantity; step++) {
                        dispatch(addToCart({ id: Number(id) }));
                      }
                      setQuantity(1);

                      console.log(cart);
                    }}
                    sx={{
                      bgcolor: "primary.main",
                      border: 1,
                      width: "180px",
                      height: "40px",
                      borderRadius: "20px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBlock: "auto",
                      marginLeft: "125px",
                    }}
                  >
                    <Typography
                      sx={{
                        userSelect: "none",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                    >
                      Dodaj do koszyka
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* DESCRIPTION */}

        <Box
          sx={{
            bgcolor: "background.paper",
            border: 1,
            borderColor: "text.primary  ",
            borderRadius: "15px",
            marginBlock: "25px",
            width: "1400px",
          }}
        >
          <Typography variant="h4" sx={{ margin: "20px" }}>
            Opis produktu:
          </Typography>
          <Typography sx={{ margin: "20px", fontSize: "1.4rem" }}>
            {id !== undefined && text.descriptions[id % 5]}
          </Typography>
        </Box>
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
            Spróbuj również:
          </Typography>
        </Box>
        <Box
          sx={{
            width: "1400px",
            marginBlock: "25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <HomeProduct index={435} />
          <HomeProduct index={111} />
          <HomeProduct index={344} />
          <HomeProduct index={14} />
          <HomeProduct index={97} />
          <HomeProduct index={224} />
          <HomeProduct index={290} />
          <HomeProduct index={512} />
        </Box>
      </ContentContainer>
    </>
  );
};

export default Produkt;
