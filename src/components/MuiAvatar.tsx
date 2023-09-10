import { Avatar, AvatarGroup, Stack } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }} children={"NT"} />
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>NT</Avatar>
          <Avatar
            src={"https://randomuser.me/api/portraits/women/79.jpg"}
            alt="Jane Doe"
          />
          <Avatar
            src={"https://randomuser.me/api/portraits/men/51.jpg"}
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar variant="square" sx={{ bgcolor: "primary.light" }}>
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light" }}
          children={"NT"}
        />
      </Stack>
    </Stack>
  );
};
