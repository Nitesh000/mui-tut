import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

const MuiAccordion = () => {
  const [expanded, setExpaded] = useState<string | false>(false);

  const handleChange = (isExpaned: boolean, panel: string) => {
    setExpaded(isExpaned ? panel : false);
  };

  return (
    <Box gap={2}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(_e, isExpaned) => handleChange(isExpaned, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-contnet"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(_e, isExpaned) => handleChange(isExpaned, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-contnet"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(_e, isExpaned) => handleChange(isExpaned, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-contnet"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordion;
