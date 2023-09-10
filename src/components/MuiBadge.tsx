import { Stack, Badge } from "@mui/material";
import { Mail } from "@mui/icons-material";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={4} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="secondary" max={999}>
        <Mail />
      </Badge>
      <Badge variant="dot" color="secondary">
        <Mail />
      </Badge>
    </Stack>
  );
};
