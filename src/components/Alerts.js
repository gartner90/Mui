import PropTypes from "prop-types"
import { Stack, Alert } from "@mui/material";

function Alerts({ variant = "contained" }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant={variant} severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant={variant} severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant={variant} severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant={variant} severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  )
}

Alerts.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined"]),
}

export default Alerts
