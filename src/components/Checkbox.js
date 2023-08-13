import PropTypes from "prop-types"
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Check({ label, size = "small", color = "primary" }) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox size={size} color={color} />} label={label} />
    </FormGroup>
  )
}

Check.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "error"]),
}

export default Check
