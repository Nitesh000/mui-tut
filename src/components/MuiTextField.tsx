import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export const MuiTextField = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        {/* NOTE: This is the outlined variant by fefault*/}
        <TextField label="Name" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
          required
        />
        <TextField
          label="Form Input"
          helperText="Do not share you password with anyone"
          type="password"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      {/* NOTE: Adornment componenet  */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>

      {/* NOTE: exercise for hidden eye button */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          type={isPasswordVisible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                >
                  {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
