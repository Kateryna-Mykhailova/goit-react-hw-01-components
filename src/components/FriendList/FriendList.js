export function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        return (
          <li key={friend.id} class="item">
            <span class="status"></span>
            <img class="avatar" src={friend.avatar} alt="" width="48" />
            <p class="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
