import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={styles.item}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
