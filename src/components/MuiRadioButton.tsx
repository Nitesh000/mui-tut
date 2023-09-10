import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experince">Years of experience</FormLabel>
        <RadioGroup
          name="job-experince"
          value={value}
          onChange={handleChange}
          aria-labelledby="job-experince"
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
