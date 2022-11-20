/** @jsxImportSource @emotion/react */

import { SxProps, Typography, TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { FunctionComponent, useState } from "react";

import theme from "../../styles/theme";

import MyPopper from "./MyPopper";
import CountryPopperChildren from "./CountryPopperChildren";

//styles

const searchBarStyles: SxProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  border: 1,
  margin: 1,
  height: "3rem",
  borderRadius: "1.5rem",
};

const componentWprapper: SxProps = {
  ...searchBarStyles,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: "calc(100%)",
  },
  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "750px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "1000px",
  },
};

const textFieldStyles: SxProps = {
  marginTop: "0.6rem",
  marginLeft: "1rem",
  "& .MuiInputBase-root": {
    height: "2rem",
    [theme.breakpoints.down("lg")]: {
      width: "180px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "240px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "540px",
    },
  },
};

const searchButtonStyles: SxProps = {
  ...searchBarStyles,
  backgroundColor: "#F5CA50",
  width: "2rem",
  minWidth: "2rem",
  height: "2rem",
  textAlign: "center",
  "&:hover": {
    cursor: "pointer",
  },
};

const buttonsWrapper: SxProps = {
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
};

//stuff

const countryString: string[] = [
  "Wszystkie kraje",
  "Włochy",
  "Francja",
  "Niemcy",
  "Hiszpania",
  "Stany Zjednoczone",
];

//component

const SearchBar: FunctionComponent = ({}) => {
  const [country, setCountry] = useState<number>(0);
  const [countryOpen, setCountryOpen] = useState(false);

  return (
    <Box sx={componentWprapper}>
      <TextField
        onChange={(e) => {
          console.log(e.target.value); //placeholder
        }}
        hiddenLabel
        placeholder="Czego szukasz?"
        id="search-field"
        variant="standard"
        size="small"
        autoComplete="off"
        InputProps={{ disableUnderline: true }}
        sx={textFieldStyles}
      />
      <Box sx={buttonsWrapper}>
        {/* Category popper */}
        <MyPopper
          buttonChildren={
            <Box sx={{ marginInline: "20px", marginTop: "0.25rem" }}>
              <Typography gutterBottom sx={{ fontSize: "0.9 rem" }}>
                {countryString[country]}
              </Typography>
            </Box>
          }
          popperChildren={
            <CountryPopperChildren
              isCategoryOpen={countryOpen}
              categoryValue={country}
              containerWidth={"175px"}
              handleClose={() => setCountryOpen(false)}
              handleSetCategory={(c) => setCountry(c)}
            />
          }
          isCategoryOpen={countryOpen}
          handleCategoryClose={() => setCountryOpen(false)}
          handleCategoryOpen={() => setCountryOpen(true)}
        />

        {/* Search button */}
        <Box sx={searchButtonStyles}>
          <SearchIcon sx={{ marginTop: "0.2rem" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
