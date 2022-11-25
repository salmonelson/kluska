/** @jsxImportSource @emotion/react */

import { FunctionComponent } from "react";
import { SxProps, Divider, Stack, Box } from "@mui/material";

import theme from "../../styles/theme";

import LowerBarElement from "./LowerBarElement";

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

const categoryString: string[] = [
  "Organiczne",
  "Bezglutenowe",
  "Bez GMO",
  "Wegańskie",
  "Koszerne",
  "Pełnoziarniste",
];

interface LowerBarProps {
  scrollTriggerValue: boolean;
}

const LowerBar: FunctionComponent<LowerBarProps> = ({ scrollTriggerValue }) => (
  // <Fade
  //   in={!scrollTriggerValue}
  //   style={{ transformOrigin: "0 0 0" }}
  //   {...(!scrollTriggerValue ? { timeout: 500 } : { timeout: 400 })}
  // >
  //   </Fade>
  <Box
    sx={{
      transitionDelay: scrollTriggerValue ? "0s" : "0.1s",
      visibility: scrollTriggerValue ? "hidden" : "visible",
    }}
  >
    <Divider variant="middle" />
    <Box sx={halfBarStyles}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          overflow: "hidden",
          width: "fit-parent",
          height: "4rem",
        }}
      >
        {categoryString.map((element, index) => (
          <LowerBarElement
            key={element}
            text={element}
            link={{
              pathname: "results",
              query: { category: `${index}` },
            }}
          />
        ))}
      </Stack>
      {/* JAJCO */}
    </Box>
  </Box>
);
export default LowerBar;
