import PropTypes from 'prop-types';
// import styles from '../FriendList/'
import styles from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';
export function FriendList({ friends }) {
  return (
    // <ul>
    <ul className={styles.friend_list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
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
