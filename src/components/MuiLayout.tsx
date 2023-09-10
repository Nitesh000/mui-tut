import { Box, Divider, Stack, Grid, Paper } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={4}
        divider={<Divider orientation="horizontal" />}
      >
        <Box
          component={"span"}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "10px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Anthills
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid item sm={3} md={12}>
          <Box bgcolor="primary.light">Item 1</Box>
        </Grid>
        <Grid item sm={3} md={12}>
          <Box bgcolor="primary.light">Item 2</Box>
        </Grid>
        <Grid item sm={3} md={12}>
          <Box bgcolor="primary.light">Item 3</Box>
        </Grid>
        <Grid item sm={3} md={12}>
          <Box bgcolor="primary.light">Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
