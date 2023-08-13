import PropTypes from "prop-types"
import Rating from '@mui/material/Rating';

function Ratingf({ value = 3 }) {
  return (
    <Rating
        name="simple-controlled"
        value={value}
      />
  )
}

Ratingf.propTypes = {
  value: PropTypes.number,
}

export default Ratingf
