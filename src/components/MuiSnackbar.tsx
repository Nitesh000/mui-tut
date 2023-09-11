import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAler(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  },
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="form subbmitted sucessfully"
        autoHideDuration={4000}
        onClose={handleClose}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <SnackbarAlert severity="success" onClose={handleClose}>
          form subbmitted sucessfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
