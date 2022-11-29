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
import PhoneIcon from "@mui/icons-material/Phone";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { FunctionComponent, useState } from "react";

import theme from "../../styles/theme";
import Link from "next/link";

import LowerBar from "./LowerBar";
import SearchBar from "./SearchBar";
import CartPopper from "./CartPopper";
import MyPopperNew from "./MyPopperNew";

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

  const [contactPopperOpen, setContactPopperOpen] = useState(false);

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

          <MyPopperNew
            buttonChildren={
              <SupportAgentRoundedIcon
                sx={{
                  fontSize: "2rem",
                  margin: "auto",
                }}
              />
            }
            popperChildren={
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderColor: "text.primary",
                  border: 1,
                  borderRadius: "1.5rem 0 1.5rem 1.5rem",
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                  margin="10px"
                >
                  <Typography fontWeight="bold">Kontakt</Typography>
                  <Stack direction="row" alignItems="center" gap={1}>
                    <PhoneIcon />
                    <Typography fontSize="1.2rem">34 377 00 00</Typography>
                  </Stack>

                  <Stack direction="row" alignItems="center" gap={1}>
                    <EmailRoundedIcon />
                    <Typography fontSize="1.2rem">
                      sklep@pastopedia.pl
                    </Typography>
                  </Stack>

                  <Stack direction="row" alignItems="center" gap={1}>
                    <LocationOnIcon />
                    <Stack direction="column" alignItems="start">
                      <Typography>Strzelców Bytomskich 3</Typography>
                      <Typography>40-310 Katowice</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            }
            isCategoryOpen={contactPopperOpen}
            handleCategoryOpen={() => setContactPopperOpen(true)}
            handleCategoryClose={() => setContactPopperOpen(false)}
          />

          <CartPopper />
        </Stack>
      </Box>

      {/* LOWER BAR */}
      <LowerBar scrollTriggerValue={scrollTrigger} />
    </AppBar>
  );
};

export default Navigation;
