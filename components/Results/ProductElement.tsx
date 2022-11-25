/** @jsxImportSource @emotion/react */

import Image from "next/image";
import Link from "next/link";

import { IconButton, Typography, Box } from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

import { FunctionComponent } from "react";

import styles from "../../pages/results/results.module.css";

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

interface ProductElementProps {
  product: Product;
  index: number;
}

const ProductElement: FunctionComponent<ProductElementProps> = ({
  product,
}) => (
  <Box
    sx={{
      width: "320px",
      height: "480px",
      border: 1,
      borderColor: "transparent",
      borderRadius: "15px",
      transition: "0.2  s ease",
      position: "relative",
      "&:hover": {
        borderColor: "text.primary",
      },
    }}
  >
    <Link href={`/product/${product.id}`}>
      {/* IMGAGE AND CAPTIONS */}
      <Image
        className={styles.product_image}
        src={product.img}
        alt="Obraz"
        objectFit="cover"
        width={260}
        height={260}
      />
    </Link>
    <Box sx={{ marginInline: "16px" }}>
      <Link
        className={styles.link}
        href={`/results?brand=${options.brands.indexOf(product.brand)}`}
      >
        {product.brand}
      </Link>
      <br />
      <Link
        className={`${styles.link} ${styles.title}`}
        href={`/product/${product.id}`}
      >
        {product.title}
      </Link>
      <br />
      <Typography>
        Kraj pochodzenia:{" "}
        <Link
          className={styles.link}
          href={`/results?country=${product.country}`}
        >
          {options.countries[product.country]}
        </Link>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bottom: "12px",
          position: "absolute",
          width: "290px",
        }}
      >
        <Typography
          sx={{
            marginBlock: "auto",
            marginLeft: "2px",
            fontSize: "1.4rem",
            fontFamily: "Lato, sans-serif",
            borderBottom: 1,
          }}
        >
          {product.price} zł
        </Typography>
        <IconButton
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

export default ProductElement;
