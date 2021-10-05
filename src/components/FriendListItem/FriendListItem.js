import PropTypes from 'prop-types';
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

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
    }),
  ),
};
