/** @jsxImportSource @emotion/react */

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import {
  SxProps,
  Divider,
  Typography,
  Fade,
  Stack,
  Box,
  ListItem,
  ListItemButton,
} from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { FixedSizeList, ListChildComponentProps } from "react-window";

import { useAppSelector } from "../../redux/hooks";
import database from "../../data/products.json";

const searchBarStyles: SxProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  border: 1,
  margin: 1,
  height: "3rem",
  borderRadius: "1.5rem",
};

interface CountryPopperChildrenProps {
  isCategoryOpen: boolean;
  containerWidth: string;
  handleClose: VoidFunction;
}

const CountryPopperChildren: FunctionComponent<CountryPopperChildrenProps> = ({
  isCategoryOpen,
  containerWidth,
  handleClose,
}) => {
  const cart = useAppSelector((state) => state.cart);

  function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;

    return (
      <ListItem style={style} key={index} component="div">
        <Link
          onClick={() => handleClose()}
          href={`/produkt/${cart[index].id}`}
          style={{
            color: "#212121",
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              borderTop: 1,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <Image
              src={database[cart[index].id - 1].img}
              alt="Produkt"
              objectFit="cover"
              width={60}
              height={60}
              style={{ marginBlock: "10px" }}
            />

            <Typography
              sx={{
                fontSize: "0.95rem",
                whiteSpace: "break-spaces",
                marginLeft: "6px",
                marginTop: "8px",
              }}
            >
              {database[cart[index].id - 1].title}
            </Typography>
          </Box>
        </Link>
      </ListItem>
    );
  }

  return (
    <Box
      sx={{
        ...searchBarStyles,
        //   borderTop: 0,
        margin: "-1",
        backgroundColor: "white",
        width: `${containerWidth}`,
        height: "fit-content",
        float: "right",
        borderRadius: "1.5rem 0 1.5rem 1.5rem",
      }}
    >
      <Fade in={isCategoryOpen}>
        <Box
          sx={{
            marginLeft: "10px",
            marginBlock: "0.5rem",
          }}
        >
          {cart === undefined || cart.length === 0 ? (
            <Typography>Twój koszyk jest pusty.</Typography>
          ) : (
            <>
              <FixedSizeList
                height={cart.length == 1 ? 90 : cart.length == 2 ? 170 : 280}
                width={360}
                itemSize={80}
                itemCount={cart.length}
                overscanCount={5}
              >
                {renderRow}
              </FixedSizeList>
              <Link
                onClick={() => handleClose()}
                href="/koszyk"
                style={{
                  color: "#212121",
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    border: 1,
                    width: "300px",
                    height: "40px",
                    borderRadius: "20px",
                    margin: "auto",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      userSelect: "none",
                    }}
                  >
                    Przejdź do koszyka
                  </Typography>
                  <ArrowForwardIosRoundedIcon sx={{ marginLeft: "12 px" }} />
                </Box>
              </Link>
            </>
          )}
        </Box>
      </Fade>
    </Box>
  );
};

export default CountryPopperChildren;
