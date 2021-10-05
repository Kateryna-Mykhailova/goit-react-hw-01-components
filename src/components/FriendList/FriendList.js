import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
export function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(({ id, avatar, name }) => (
        <FriendListItem id={id} avatar={avatar} name={name} />
      ))}

      {/* {children} */}
      {/* {friends.map(({ id, avatar, name }) =>  (
          <li key={id} class="item">
            <span class="status"></span>
            <img class="avatar" src={avatar} alt="" width="48" />
            <p class="name">{name}</p>
          </li>
        )
      )} */}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
