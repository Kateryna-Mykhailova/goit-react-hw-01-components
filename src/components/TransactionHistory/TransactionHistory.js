import PropTypes from 'prop-types';
import styles from '../TransactionHistory/TransactionHistory.module.css';
export function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction_history}>
      <thead className={styles.head}>
        <tr className={styles.head_name}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.head_name}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      currency: PropTypes.string,
      amount: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
};
