import PropTypes from 'prop-types';
// import { Children } from 'react';

export function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} class="item">
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// export function Statistics({ title, stats, children }) {
//   return (
//     <section class="statistics">
//       {children}
//       <ul class="stat-list">
//         {stats.map(({ id, label, percentage }) => {
//           return (
//             <li key={id} class="item">
//               <span class="label">{label}</span>
//               <span class="percentage">{percentage}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// }

// Statistics.defaultProps = {

// };

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
