import { FunctionComponent } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

interface OptionElementProps {
  handleChange: void;
  param: (number | null)[] | never[];
  value: number;
  label: string;
}

const OptionElement: FunctionComponent<OptionElementProps> = ({
  handleChange,
  param,
  value,
  label,
}) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={param.includes(value)}
        onChange={handleChange}
        icon={<AddBoxOutlinedIcon />}
        checkedIcon={<IndeterminateCheckBoxIcon />}
      />
    }
    label={label}
    sx={{ userSelect: "none" }}
  />
);

export default OptionElement;
