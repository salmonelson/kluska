/** @jsxImportSource @emotion/react */

import { Box, SxProps } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

import theme from "../../styles/theme";

const contentContainerStyles: SxProps = {
  marginInline: "auto",
  marginTop: "8rem",
  display: "flex",
  flexDirection: "column",
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

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: FunctionComponent<ContentContainerProps> = ({
  children,
}) => <Box sx={contentContainerStyles}>{children}</Box>;

export default ContentContainer;
