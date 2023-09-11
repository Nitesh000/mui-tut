import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Stack } from "@mui/material";

export const MuiLoadingButton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loadingIndicator="Loading..." variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton
        loadingPosition="start"
        startIcon={<Save />}
        variant="outlined"
      >
        Save
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<Save />}
        variant="outlined"
      >
        Save
      </LoadingButton>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "240px",
          height: "240px",
          bgcolor: "secondary.main",
        }}
      ></Box>
    </Stack>
  );
};
