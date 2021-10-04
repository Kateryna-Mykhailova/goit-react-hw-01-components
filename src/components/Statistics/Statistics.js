import PropTypes from 'prop-types';
import { Children } from 'react';

export function Statistics({ title, stats, children }) {
  console.log(children);
  return (
    <section class="statistics">
      {children}
      <ul class="stat-list">
        {stats.map(element => {
          return (
            <li key={element.id} class="item">
              <span class="label">{element.label}</span>
              <span class="percentage">{element.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// Statistics.defaultProps = {

// };

// Statistics.PropTypes = {
//   stats: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     label: PropTypes.string,
//     percentage: PropTypes.number
//   }))

// }
