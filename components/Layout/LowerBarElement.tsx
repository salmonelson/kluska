/** @jsxImportSource @emotion/react */

import { Typography, Box } from "@mui/material";

import { FunctionComponent, useState } from "react";

import Link from "next/link";
import { UrlObject } from "url";

interface LowerBarElementProps {
  text: string;
  link: UrlObject;
}

//COMPONENTS

const LowerBarElement: FunctionComponent<LowerBarElementProps> = ({
  text,
  link,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={link}
      style={{
        textDecoration: "none",
        height: "4rem",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        sx={{
          height: "4rem",
          display: "flow-root",
          color: "text.primary",
          borderColor: "text.primary",
          borderBottom: hover ? 1 : 0,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            marginInline: "1rem",
            marginBlock: "1rem  ",
            color: "text.primary",
            textDecoration: "none",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Link>
  );
};

export default LowerBarElement;
