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

  return (
    <Box sx={{ backgroundColor: "red", display: "inline-flex" }}>
      <Stack direction="column">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                onChange={() => {
                  if (query.category.includes(4)) {
                    setQuery(
                      {
                        category: query.category.filter(
                          (element) => element !== 4
                        ),
                      },
                      "pushIn"
                    );
                  } else {
                    setQuery({ category: [...query.category, 4] }, "push");
                  }
                }}
                icon={<AddBoxOutlinedIcon />}
                checkedIcon={<IndeterminateCheckBoxIcon />}
              />
            }
            label="Country 4"
            sx={{ userSelect: "none" }}
          />
        </FormGroup>
      </Stack>
    </Box>
  );
};

export default OptionBar;
