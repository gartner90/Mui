import * as React from 'react';
import { Box, Rating } from "@mui/material";

function Ratingf() {
  const [val, setValue] = React.useState(2);
  return (
    <Box>
      <Rating
        name="simple-controlled"
        value={val}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  )
}

export default Ratingf
