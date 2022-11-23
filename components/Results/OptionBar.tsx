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

const brandArray: string[] = productData.map((element) => element.brand);
let filtered: string[];

brandArray.forEach((element) => if (!filtered.includes(element)){filtered.push(element)})

console.log(filtered);

// stuff

const countries: string[] = [
  "Wszystkie kraje",
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

  const { search, country, category, brand, page } = query;

  const handleCountry = (value: number) => {
    if (query.country.includes(value)) {
      setQuery(
        {
          country: query.country.filter((element) => element !== value),
        },
        "pushIn"
      );
    } else {
      setQuery({ country: [...query.country, value] }, "push");
    }
  };

  const handleCategory = (value: number) => {
    if (query.category.includes(value)) {
      setQuery(
        {
          category: query.category.filter((element) => element !== value),
        },
        "pushIn"
      );
    } else {
      setQuery({ category: [...query.category, value] }, "push");
    }
  };

  const handleBrand = (value: number) => {
    if (query.brand.includes(value)) {
      setQuery(
        {
          brand: query.brand.filter((element) => element !== value),
        },
        "pushIn"
      );
    } else {
      setQuery({ brand: [...query.brand, value] }, "push");
    }
  };

  return (
    <Box sx={{ backgroundColor: "red", display: "inline-flex" }}>
      <Stack direction="column">
        <Typography>Kraj pochodzenia</Typography>
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

        <Typography>Filtry</Typography>
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

        <Typography>Producent</Typography>
        {categories.map((element, index) => (
          <FormGroup key={index}>
            <OptionElement
              handleChange={() => handleCountry(index)}
              param={query.country}
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
