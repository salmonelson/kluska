/** @jsxImportSource @emotion/react */

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import { IconButton, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useAppDispatch } from "../../redux/hooks";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../redux/cartSlice";

import styles from "./CartElement.module.css";

import options from "../../data/options.json";
import database from "../../data/products.json";

interface CartElementProps {
  item: {
    id: number;
    quantity: number;
  };
  index: number;
}

const CartElement: FunctionComponent<CartElementProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const product = database[item.id - 1];

  const totalPrice =
    (product.price * item.quantity) % 0.01 != 0
      ? Math.round(product.price * item.quantity * 100) / 100
      : Math.round(product.price * item.quantity * 100) / 100;

  return (
    <Box
      sx={{
        marginLeft: "-1px",
        width: "900px",
        height: "160",
        borderTop: 1,
        borderColor: "text.primary",
        position: "relative",

        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ width: "600px", display: "flex", flexDirection: "row" }}>
        <Link href={`/produkt/${product.id}`}>
          {/* IMAGE AND CAPTIONS */}
          <Image
            className={styles.product_image}
            src={product.img}
            alt="Produkt"
            objectFit="cover"
            width={120}
            height={120}
          />
        </Link>
        <Box sx={{ margin: "16px" }}>
          <Link
            className={styles.link}
            href={`/results?brand=${options.brands.indexOf(product.brand)}`}
          >
            {product.brand}
          </Link>
          <br />
          <Link
            className={`${styles.link} ${styles.title}`}
            href={`/produkt/${product.id}`}
          >
            {product.title}
          </Link>
          <br />
        </Box>
      </Box>
      {/* quantity */}
      <Box
        sx={{
          width: "175px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <IconButton
          aria-label="remove-quantity"
          size="large"
          onClick={() => dispatch(decrementQuantity(item.id))}
          sx={{ marginBlock: "auto", color: "text.primary" }}
        >
          <RemoveIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="h5" sx={{ marginBlock: "auto" }}>
          {item.quantity}
        </Typography>
        <IconButton
          aria-label="add-quantity"
          size="large"
          onClick={() => dispatch(incrementQuantity(item.id))}
          sx={{ marginBlock: "auto", color: "text.primary" }}
        >
          <AddIcon fontSize="inherit" />
        </IconButton>
      </Box>
      {/* TOTAL PRICE */}
      <Box
        sx={{
          borderLeft: 1,
          width: "125px",
          display: "flex",
        }}
      >
        <Typography sx={{ margin: "auto" }}>
          {totalPrice.toFixed(2)} zł
        </Typography>
      </Box>
    </Box>
  );
};

export default CartElement;

//Math.round(product.price * item.quantity * 10) / 10
