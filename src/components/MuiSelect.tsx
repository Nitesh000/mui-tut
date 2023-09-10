import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="india">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="Canada">Canada</MenuItem>
        <MenuItem value="Mexico">Mexico</MenuItem>
      </TextField>
    </Box>
  );
};
