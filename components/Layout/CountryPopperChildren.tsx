/** @jsxImportSource @emotion/react */

import * as React from "react";

import { SxProps, Divider, Typography, Fade, Stack, Box } from "@mui/material";

import { FunctionComponent } from "react";

const searchBarStyles: SxProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  border: 1,
  margin: 1,
  height: "3rem",
  borderRadius: "1.5rem",
};

const categoryItemStyles: Record<string, SxProps> = {
  wrapper: { width: "100%", height: "2rem", textAlign: "center" },
  element: {
    marginTop: "0.25rem",
    userSelect: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
};

interface CountryPopperChildrenProps {
  isCategoryOpen: boolean;
  categoryValue: number;
  containerWidth: string;
  handleClose: VoidFunction;
  handleSetCategory(c: number): void;
}

const CountryPopperChildren: FunctionComponent<CountryPopperChildrenProps> = ({
  isCategoryOpen,
  categoryValue,
  containerWidth,
  handleClose,
  handleSetCategory,
}) => (
  <Box
    sx={{
      ...searchBarStyles,
      //   borderTop: 0,
      margin: "-1",
      backgroundColor: "#F5CA50",
      width: `${containerWidth}`,
      height: "fit-content",
      float: "right",
      borderRadius: "0 0 1.5rem 1.5rem",
    }}
  >
    <Fade in={isCategoryOpen}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="horizontal" flexItem />}
        sx={{
          marginInline: "10px",
          marginBlock: "0.25rem",
          whiteSpace: "nowrap",
        }}
      >
        <Box
          sx={categoryItemStyles.wrapper}
          onClick={() => {
            handleSetCategory(0);
            handleClose();
          }}
        >
          <Typography
            sx={{
              ...categoryItemStyles.element,
              fontWeight: categoryValue === 0 ? "bold" : "regular",
            }}
          >
            Wzystkie kraje
          </Typography>
        </Box>
        <Box
          sx={categoryItemStyles.wrapper}
          onClick={() => {
            handleSetCategory(1);
            handleClose();
          }}
        >
          <Typography
            sx={{
              ...categoryItemStyles.element,
              fontWeight: categoryValue === 1 ? "bold" : "regular",
            }}
          >
            Włochy
          </Typography>
        </Box>
        <Box
          sx={categoryItemStyles.wrapper}
          onClick={() => {
            handleSetCategory(2);
            handleClose();
          }}
        >
          <Typography
            sx={{
              ...categoryItemStyles.element,
              fontWeight: categoryValue === 2 ? "bold" : "regular",
            }}
          >
            Francja
          </Typography>
        </Box>
        <Box
          sx={categoryItemStyles.wrapper}
          onClick={() => {
            handleSetCategory(3);
            handleClose();
          }}
        >
          <Typography
            sx={{
              ...categoryItemStyles.element,
              fontWeight: categoryValue === 3 ? "bold" : "regular",
            }}
          >
            Niemcy
          </Typography>
        </Box>
        <Box
          sx={categoryItemStyles.wrapper}
          onClick={() => {
            handleSetCategory(4);
            handleClose();
          }}
        >
          <Typography
            sx={{
              ...categoryItemStyles.element,
              fontWeight: categoryValue === 4 ? "bold" : "regular",
            }}
          >
            Hiszpania
          </Typography>
        </Box>
        <Box
          sx={categoryItemStyles.wrapper}
          onClick={() => {
            handleSetCategory(5);
            handleClose();
          }}
        >
          <Typography
            sx={{
              ...categoryItemStyles.element,
              fontWeight: categoryValue === 5 ? "bold" : "regular",
            }}
          >
            Stany Zjednoczone
          </Typography>
        </Box>
      </Stack>
    </Fade>
  </Box>
);

export default CountryPopperChildren;
