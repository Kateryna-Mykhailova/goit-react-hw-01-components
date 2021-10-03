import './App.css';
// import {Gallery} from './components/Gallery/Gallery';
import { Profile } from './components/Profile/Profile';
import user from './components/Profile/user.json';
// const galleryImg = {
//   title: "Images",
//   description: "lalala"
// }

// const { title, description } = galleryImg;

// function App() {
//   return (
//     <div className="App">HW
//       <Gallery
//         title={title}
//         description={description}
//        />
//     </div>
//   );
// }

// const user = {
//   "name": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }

const { name, tag, location, avatar, stats } = user;

function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
}

export default App;
