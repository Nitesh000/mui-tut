import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://source.unsplash.com/random/256x144"
          alt="skeleton"
          width={256}
          height={144}
        />
      )}
      <Stack
        spacing={1}
        direction="row"
        sx={{ width: "100px", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton variant="circular" width={40} height={40} />
        ) : (
          <Avatar>NT</Avatar>
        )}
        <Stack sx={{ width: "100%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">Skeleton tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export const MuiPreviousSkeleton = () => {
  return (
    <Stack spacing={1} width="250px">
      <Skeleton />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton
        variant="rectangular"
        width={240}
        height={125}
        animation="wave"
      />
    </Stack>
  );
};
