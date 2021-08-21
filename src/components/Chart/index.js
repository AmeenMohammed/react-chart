import PropTypes from 'prop-types';

export const Chart = ({ children, width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width="100%"
    height="70%"
    preserveAspectRatio="xMidYMax meet"
  >
    {children}
  </svg>
);

Chart.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
};

Chart.defaultProps = {
  children: [],
  width: 500,
  height: 350,
};
