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

const OptionBar: FunctionComponent = () => {
  const router = useRouter();

  const FiltersParam = withDefault(DelimitedNumericArrayParam, []);

  const [query, setQuery] = useQueryParams({
    search: StringParam,
    country: FiltersParam,
    category: FiltersParam,
    brand: FiltersParam,
    page: NumberParam,
  });

  const { search, country, category, brand, page } = query;

  const handleCoutry = (value: number) => {
    if (query.category.includes(value)) {
      setQuery(
        {
          category: query.country.filter((element) => element !== value),
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
          category: query.brand.filter((element) => element !== value),
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
        <FormGroup>
          <OptionElement
            handleChange={() => handleCategory(3)}
            param={query.category}
            value={3}
            label="Hiszpania"
          />
        </FormGroup>
      </Stack>
    </Box>
  );
};

export default OptionBar;
