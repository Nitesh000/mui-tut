import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  Box,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";

const MuiCheckbox = () => {
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ accept, skills });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccept(e.target.checked);
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill != e.target.value));
    }
  };

  return (
    <Box>
      <Box justifyItems={"center"} alignItems={"center"}>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={<Checkbox checked={accept} onChange={handleChange} />}
          disableTypography={true}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={accept}
          onChange={handleChange}
          color="warning"
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTMl"
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value={"css"}
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="javascript"
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
