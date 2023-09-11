import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="chip outlined"
        color="primary"
        size="small"
        variant="outlined"
        avatar={<Avatar>NT</Avatar>}
      />
      <Chip label="click" color="success" onClick={() => alert("clicked")} />
      <Chip
        label="click"
        color="error"
        onClick={() => alert("clicked")}
        onDelete={() => alert("Deleted chip!")}
      />
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color="primary"
          onDelete={() => setChips(chips.filter((c) => c !== chip))}
        />
      ))}
    </Stack>
  );
};
