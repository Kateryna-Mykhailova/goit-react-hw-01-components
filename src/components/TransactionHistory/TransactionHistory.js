export function TransactionHistory({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>

    // <ul class="friend-list">
    //   {friends.map(friend => {
    //     return (
    //       <li key={friend.id} class="item">
    //         <span class="status"></span>
    //         <img class="avatar" src={friend.avatar} alt="" width="48" />
    //         <p class="name">{friend.name}</p>
    //       </li>
    //     );
    //   })}
    // </ul>
  );
}
