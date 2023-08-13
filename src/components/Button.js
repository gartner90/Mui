import PropTypes from "prop-types"
import Button from '@mui/material/Button';

function Buttonf({ label, variant = "contained", size = "small", color = "primary" }) {
  return (
    <Button variant={variant} size={size} color={color}>{label}</Button>
  )
}

Buttonf.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "error"]),
}

export default Buttonf
