import { FunctionComponent } from "react";
import { Checkbox, FormControlLabel, Box } from "@mui/material";

import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

interface OptionElementProps {
  handleChange: VoidFunction;
  param: (number | null)[];
  value: number;
  label: string;
}

const OptionElement: FunctionComponent<OptionElementProps> = ({
  handleChange,
  param,
  value,
  label,
}) => (
  <Box sx={{ marginLeft: "40px", marginBlock: "-6px" }}>
    <FormControlLabel
      control={
        <Checkbox
          checked={param.includes(value)}
          onChange={handleChange}
          icon={<AddBoxOutlinedIcon />}
          checkedIcon={<IndeterminateCheckBoxIcon />}
          sx={{ color: "text.primary" }}
        />
      }
      label={label}
      sx={{ userSelect: "none" }}
    />
  </Box>
);

export default OptionElement;
