/** @jsxImportSource @emotion/react */

import Head from "next/head";
import type { NextPage } from "next";

import { Typography, Stack, Box } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { useAppSelector } from "../../redux/hooks";

import ContentContainer from "../../components/Layout/ContentContainer";
import CartElement from "../../components/Cart/CartElement";

import database from "../../data/products.json";
import Link from "next/link";

//COMPONENT

const Koszyk: NextPage = () => {
  const cart = useAppSelector((state) => state.cart);

  const cartLength = cart.reduce((accumulator, element) => {
    return accumulator + element.quantity;
  }, 0);

  const totalPrice = cart.reduce((accumulator, element) => {
    return accumulator + database[element.id - 1].price * element.quantity;
  }, 0);

  //RETURN

  return (
    <>
      <Head>
        <title>Koszyk - Pastopedia</title>
        <meta name="description" content="shopping cart page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer>
        {cart === undefined ||
          (cart.length == 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" sx={{ marginBlock: "50px" }}>
                Twój koszyk jest pusty. Spróbuj coś do niego dodać!
              </Typography>
              <Link href="/results" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    border: 1,
                    width: "300px",
                    height: "60px",
                    borderRadius: "30px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "text.primary",
                  }}
                >
                  <Typography
                    sx={{
                      userSelect: "none",
                      color: "text.primary",
                    }}
                  >
                    Przeglądaj produkty
                  </Typography>
                  <ArrowForwardIosRoundedIcon />
                </Box>
              </Link>
            </Box>
          ))}
        <Box hidden={cart === undefined || cart.length == 0}>
          <Box
            sx={{
              width: "900px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginBlock: "40px" }}
            >
              Koszyk ({cartLength})
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              {/* CART ITEMS */}
              <Box
                sx={{
                  bgcolor: "background.paper",
                  border: 1,
                  borderColor: "text.primary  ",
                  borderRadius: "15px",
                  marginBottom: "70px",
                }}
              >
                <Stack direction="column">
                  <Box
                    sx={{
                      marginLeft: "-1px",
                      width: "900px",
                      height: "50px",
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Box
                      sx={{
                        width: "125px",
                        display: "flex",
                      }}
                    >
                      <Typography sx={{ margin: "auto" }}>Razem</Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "175px",
                        display: "flex",
                      }}
                    >
                      <Typography sx={{ margin: "auto" }}>Ilość</Typography>
                    </Box>
                  </Box>
                  {cart.map((item, index) => (
                    <CartElement item={item} index={index} key={index} />
                  ))}
                </Stack>
              </Box>
              {/* TOTAL/ TO CHECKOUT */}
              <Box
                sx={{
                  marginLeft: "20px",
                  bgcolor: "background.paper",
                  border: 1,
                  borderColor: "text.primary",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "130px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "480px",
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    sx={{
                      whiteSpace: "nowrap",
                      margin: "20px auto 20px 20px",
                    }}
                  >
                    Łączna kwota
                  </Typography>
                  <Typography sx={{ whiteSpace: "nowrap", margin: "20px" }}>
                    {totalPrice.toFixed(2)} zł
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    border: 1,
                    width: "420px",
                    height: "40px",
                    borderRadius: "20px",
                    margin: "0 30px 20px 30px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      userSelect: "none",
                    }}
                  >
                    Przejdź do dostawy
                  </Typography>
                  <ArrowForwardIosRoundedIcon sx={{ marginLeft: "12 px" }} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ContentContainer>
    </>
  );
};

export default Koszyk;
