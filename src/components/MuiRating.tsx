import { Rating, Stack } from "@mui/material";
import { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (_e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };

  return (
    <Stack direction="column">
      <Rating value={value} onChange={handleChange} precision={0.5} />
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        highlightSelectedOnly
        readOnly
      />
    </Stack>
  );
};
export default MuiRating;
