import PropTypes from 'prop-types';

export const Bar = ({
  x, y, width, height,
}) => (
  <>
    <rect x={x} y={y} width={width} height={height} fill="black" />
  </>
);

Bar.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

Bar.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};
