// import { MuiNavbar } from "./components/MuiNavbar";
// import { MuiImageList } from "./components/MuiImageList";
// import MuiAccordion from "./components/MuiAccordion";
// import MuiCard from "./components/MuiCard";
// import MuiLayout from "./components/MuiLayout";
// import MuiAutocomplete from "./components/MuiAutocomplete";
// import MuiRating from "./components/MuiRating";
// import MuiSwitch from "./components/MuiSwitch";
// import MuiCheckbox from "./components/MuiCheckbox";
// import { MuiRadioButton } from "./components/MuiRadioButton";
// import { MuiSelect } from "./components/MuiSelect";
// import { MuiButton } from "./components/MuiButton";
// import { MuiTextField } from "./components/MuiTextField";
// import { MuiTypography } from "./components/MuiTypography";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import { MuiLoadingButton } from "./components/MiLoadingButton";

// import { MuiSkeleton } from "./components/MuiSkeleton";

// import { MuiDialog } from "./components/MuiDialog";
// import { MuiProgress } from "./components/MuiProgress";

// import { MuiSnackbar } from "./components/MuiSnackbar";

// import { MuiAlert } from "./components/MuiAlert";

// import { MuiTable } from "./components/MuiTable";

// import { MuiTooltip } from "./components/MuiTooltip";

// import { MuiChip } from "./components/MuiChip";

// import { MuiList } from "./components/MuiList";

// import { MuiAvatar } from "./components/MuiAvatar";
// import { MuiBadge } from "./components/MuiBadge";

// import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
// import { MuiSpeeddial } from "./components/MuiSpeeddial";

// import MuiDrawer from "./components/MuiDrawer";

// import MuiBreadcrumbs from "./components/MuiBreadcrumbs";

// import { MuiLink } from "./components/MuiLink";
const theme = createTheme({
  status: {
    danger: colors.orange[500],
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeeddial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        <MuiLoadingButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
