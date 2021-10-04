export function FriendListItem({ id, avatar, name }) {
  return (
    <li key={id} class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="" width="48" />
      <p class="name">{name}</p>
    </li>

    //   {friends.map(({ id, avatar, name }) =>  (
    //       <li key={id} class="item">
    //         <span class="status"></span>
    //         <img class="avatar" src={avatar} alt="" width="48" />
    //         <p class="name">{name}</p>
    //       </li>
    //     )
    //   )}
  );
}
