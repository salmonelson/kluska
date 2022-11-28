/** @jsxImportSource @emotion/react */

import { Box, ClickAwayListener } from "@mui/material";

import {
  autoUpdate,
  useFloating,
  offset,
} from "@floating-ui/react-dom-interactions";

import { FunctionComponent, ReactNode } from "react";

import styles from "./styles/MyPopperNew.module.css";

interface MyPopperProps {
  buttonChildren: ReactNode;
  popperChildren: ReactNode;
  isCategoryOpen: boolean;
  handleCategoryClose: VoidFunction;
  handleCategoryOpen: VoidFunction;
}

const MyPopperNew: FunctionComponent<MyPopperProps> = ({
  buttonChildren,
  popperChildren,
  isCategoryOpen,
  handleCategoryClose,
  handleCategoryOpen,
}) => {
  const { x, y, reference, floating, strategy } = useFloating({
    placement: "bottom-end",
    whileElementsMounted: autoUpdate,
    middleware: [offset(-1)],
    strategy: "fixed",
  });

  const transitionTime = "140ms";

  return (
    <ClickAwayListener onClickAway={handleCategoryClose}>
      <div>
        <Box
          ref={reference}
          onClick={isCategoryOpen ? handleCategoryClose : handleCategoryOpen}
          className={`${styles.popper} ${
            isCategoryOpen ? styles.active : styles.inactive
          }`}
        >
          {buttonChildren}
        </Box>

        <Box
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: "max-content",
            transform: isCategoryOpen ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "50% 0%",
            transition: `${transitionTime} ease`,
            transitionDelay: isCategoryOpen ? `${transitionTime}` : "0s",
          }}
        >
          {popperChildren}
        </Box>
      </div>
    </ClickAwayListener>
  );
};

export default MyPopperNew;
