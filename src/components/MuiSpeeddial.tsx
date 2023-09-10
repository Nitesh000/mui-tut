import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { CopyAll } from "@mui/icons-material";
import { Print } from "@mui/icons-material";
import { Share } from "@mui/icons-material";

export const MuiSpeeddial = () => {
  return (
    <SpeedDial
      ariaLabel="Naviation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<CopyAll />} tooltipTitle="copy" tooltipOpen />
      <SpeedDialAction icon={<Print />} tooltipTitle="print" tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle="share" tooltipOpen />
    </SpeedDial>
  );
};
