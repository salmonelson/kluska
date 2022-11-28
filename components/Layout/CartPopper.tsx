/** @jsxImportSource @emotion/react */

import { SxProps, Typography, Box } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import { FunctionComponent, useState } from "react";

import { useQueryParams, StringParam } from "use-query-params";
import Router, { useRouter } from "next/router";

import { useAppSelector } from "../../redux/hooks";

import theme from "../../styles/theme";

import MyPopperNew from "./MyPopperNew";
import CartPopperChildren from "./CartPopperChildren";

//styles

const CartPopper: FunctionComponent = () => {
  const [popperOpen, setPopperOpen] = useState(false);

  const cart = useAppSelector((state) => state.cart);

  return (
    <MyPopperNew
      buttonChildren={
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              marginLeft: "12px",
              marginTop: "0.7rem",
              // display: "none",  DISAPPEAR
            }}
          >
            Koszyk
          </Typography>
          <ShoppingCartRoundedIcon
            sx={{
              fontSize: "2rem",
              marginTop: "0.4rem",
              marginInline: "0.4rem",
            }}
          />
        </Box>
      }
      popperChildren={
        <CartPopperChildren
          isCategoryOpen={popperOpen}
          containerWidth={
            cart === undefined || cart.length === 0 ? "190px" : "400px"
          }
          handleClose={() => setPopperOpen(false)}
        />
      }
      isCategoryOpen={popperOpen}
      handleCategoryClose={() => {
        setPopperOpen(false);
      }}
      handleCategoryOpen={() => {
        setPopperOpen(true);
      }}
    />
  );
};

export default CartPopper;
