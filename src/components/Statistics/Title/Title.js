import PropTypes from 'prop-types';
function Title({ title }) {
  return <h2 class="title">{title}</h2>;
}
export default Title;
// Statistics.defaultProps = {

// };

// Statistics.PropTypes = {
//   stats: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     label: PropTypes.string,
//     percentage: PropTypes.number
//   }))

// }
