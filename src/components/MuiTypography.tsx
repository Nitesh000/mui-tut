import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 heading</Typography>
      <Typography variant="h2">H2 heading</Typography>
      <Typography variant="h3">H3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H4 heading
      </Typography>
      <Typography variant="h5">H5 heading</Typography>
      <Typography variant="h6">H6 heading</Typography>

      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </Typography>
    </div>
  );
};
