import PropTypes from "prop-types";
import styled from "styled-components";

const mapScaleToPixels = scale => {
  switch (scale) {
    case "s":
      return 4;
    case "m":
      return 8;
    case "l":
      return 16;
    case "xl":
      return 24;
    case "xxl":
      return 32;
    default:
      return 4;
  }
};

const Inset = styled.div`padding: ${props => mapScaleToPixels(props.scale)}px;`;

Inset.propTypes = {
  scale: PropTypes.oneOf(["s", "m", "l", "xl"])
};

Inset.defaultProps = {
  scale: "m"
};

export default Inset;
