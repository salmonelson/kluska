/** @jsxImportSource @emotion/react */

import appBarStyles from "./styles/AppBar.module.css";

import {
  SxProps,
  AppBar,
  Typography,
  Stack,
  Box,
  useScrollTrigger,
} from "@mui/material";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import { FunctionComponent } from "react";

import theme from "../../styles/theme";
import Link from "next/link";

import MyPopper from "./MyPopper";
import LowerBar from "./LowerBar";
import SearchBar from "./SearchBar";

//STYLES

const halfBarStyles: SxProps = {
  marginInline: "auto",
  marginBlock: 0,
  [theme.breakpoints.down("lg")]: {
    width: "calc(100%)",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1150px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "1400px",
  },
};

const searchBarStyles: SxProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  border: 1,
  margin: 1,
  height: "3rem",
  borderRadius: "1.5rem",
};

//COMPONENT

const Navigation: FunctionComponent = () => {
  //LOGIC
  const scrollTrigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: false,
  });

  //RETURN

  return (
    <AppBar
      className={
        !scrollTrigger ? appBarStyles.expanded : appBarStyles.collapsed
      }
    >
      <Box sx={halfBarStyles}>
        {/* Upper bar wrapper */}
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
          sx={{
            overflow: "hidden",
            width: "fit-parent",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              height: "3rem",
              textDecoration: "none",
            }}
          >
            <Box display="grid">
              <Box
                component="img"
                className={appBarStyles.logo}
                src={"/logo-color.png"}
                alt="Logo"
              ></Box>
              <Box
                component="img"
                className={`${appBarStyles.logo} ${
                  scrollTrigger
                    ? appBarStyles.logo_transition_white
                    : appBarStyles.logo_transition_colorful
                }`}
                src={"/logo-white.png"}
                alt="Logo"
              ></Box>
            </Box>
          </Link>

          {/* Searchbar*/}

          <SearchBar />

          <Box
            sx={{
              ...searchBarStyles,
              m: 1,
              minWidth: "3rem",
              width: "3rem",
              textAlign: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <SupportAgentRoundedIcon
              sx={{
                fontSize: "2rem",
                marginTop: "0.4rem",
              }}
            />
          </Box>
          <Box
            sx={{
              ...searchBarStyles,
              margin: "1",
              minWidth: "3rem",
              textAlign: "center",
              display: "flex",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
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
        </Stack>
      </Box>

      {/* LOWER BAR */}
      <LowerBar scrollTriggerValue={scrollTrigger} />
    </AppBar>
  );
};

export default Navigation;
