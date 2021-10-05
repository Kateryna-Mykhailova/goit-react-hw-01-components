import PropTypes from 'prop-types';
export function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="Аватар пользователя" class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">{stats.followers}</span>
          <span class="quantity">{}</span>
        </li>
        <li>
          <span class="label">{stats.views}</span>
          <span class="quantity">{}</span>
        </li>
        <li>
          <span class="label">{stats.likes}</span>
          <span class="quantity">{}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
