import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  Typography,
  Stack,
  Box,
  FormGroup,
  Checkbox,
  FormControlLabel,
  SxProps,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

import { FunctionComponent, useEffect, useState } from "react";

import {
  useQueryParams,
  StringParam,
  NumberParam,
  withDefault,
  DelimitedNumericArrayParam,
  NumericObjectParam,
} from "use-query-params";

import OptionElement from "./OptionElement";

import theme from "../../styles/theme";

import productData from "../../data/products.json";

// stuff

const countries: string[] = [
  "Włochy",
  "Francja",
  "Niemcy",
  "Hiszpania",
  "Stany Zjednoczone",
];
const categories: string[] = [
  "Organiczne",
  "Bezglutenowe",
  "Bez GMO",
  "Wegańskie",
  "Koszerne",
  "Pełnoziarniste",
];
const brands: string[] = [
  "Marella",
  "Divella",
  "L'Oro Del Sud",
  "Di Martino",
  "Giuseppe Cocco",
  "De Cecco",
  "Colavita",
  "La Campofilone",
  "Gentile",
  "Farabella",
  "Morelli",
  "Camp'Oro",
  "Valfleuri",
  "Cipriani",
  "DaVinci",
  "Le Veneziane",
  "Alce Nero",
  "Borgo de Medici",
  "Casino di Caprafico",
  "Fusco",
  "La Bottega",
  "La Terra e il Cielo",
  "Pastificio La Rosa",
  "Dal Raccolto",
  "La Pasta di Camerino",
  "Tartuflanghe",
  "Delverde",
  "Savini Tartufi",
  "Cucina & Amore",
  "Mariella",
  "Poggio del Farro",
  "Spinosi",
  "Alb-Gold",
  "Bechtle",
  "Coluccio",
  "Mantova",
  "Romero",
  "Vantia",
  "Alpina Savoie",
  "Alta Valle Scrivia",
  "Fratelli Minaglia",
  "Mamma Angelica",
];

//styles

const captionStyles: SxProps = {
  marginLeft: "20px",
  marginBlock: "6px",
};

//component

const OptionBar: FunctionComponent = () => {
  const FiltersParam = withDefault(DelimitedNumericArrayParam, []);

  const [query, setQuery] = useQueryParams({
    search: StringParam,
    country: FiltersParam,
    category: FiltersParam,
    brand: FiltersParam,
    page: NumberParam,
  });

  const handleCountry = (value: number) => {
    if (query.country.includes(value)) {
      setQuery(
        {
          ...query,
          country: query.country.filter((element) => element !== value),
        },
        "push"
      );
    } else {
      setQuery({ ...query, country: [...query.country, value] }, "push");
    }
  };

  const handleCategory = (value: number) => {
    if (query.category.includes(value)) {
      setQuery(
        {
          ...query,
          category: query.category.filter((element) => element !== value),
        },
        "push"
      );
    } else {
      setQuery({ ...query, category: [...query.category, value] }, "push");
    }
  };

  const handleBrand = (value: number) => {
    if (query.brand.includes(value)) {
      setQuery(
        {
          ...query,
          brand: query.brand.filter((element) => element !== value),
        },
        "pushIn"
      );
    } else {
      setQuery({ ...query, brand: [...query.brand, value] }, "push");
    }
  };

  return (
    <Box
      sx={{
        width: "270px",
        bgcolor: "background.paper",
        display: "inline-flex",
        border: 1,
        borderColor: "text.primary  ",
        borderRadius: "15px",
      }}
    >
      <Stack direction="column">
        <Box sx={captionStyles}>
          <Typography sx={{ fontWeight: "bold" }}>Kraj pochodzenia:</Typography>
        </Box>
        {countries.map((element, index) => (
          <FormGroup key={index}>
            <OptionElement
              handleChange={() => handleCountry(index)}
              param={query.country}
              value={index}
              label={element}
            />
          </FormGroup>
        ))}

        <Box sx={captionStyles}>
          <Typography sx={{ fontWeight: "bold" }}>Filtry:</Typography>
        </Box>
        {categories.map((element, index) => (
          <FormGroup key={index}>
            <OptionElement
              handleChange={() => handleCategory(index)}
              param={query.category}
              value={index}
              label={element}
            />
          </FormGroup>
        ))}

        <Box sx={captionStyles}>
          <Typography sx={{ fontWeight: "bold" }}>Producent:</Typography>
        </Box>
        {brands.map((element, index) => (
          <FormGroup key={index}>
            <OptionElement
              handleChange={() => handleBrand(index)}
              param={query.brand}
              value={index}
              label={element}
            />
          </FormGroup>
        ))}
      </Stack>
    </Box>
  );
};

export default OptionBar;
