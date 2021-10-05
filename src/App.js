import './App.css';
// import {Gallery} from './components/Gallery/Gallery';
import { Profile } from './components/Profile/Profile';
import user from './components/Profile/user.json';
import { Statistics } from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import Title from './components/Statistics/Title/Title';
import { FriendList } from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import { FriendListItem } from './components/FriendListItem/FriendListItem';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

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

import './App.css';
const { name, tag, location, avatar, stats } = user;

// const { id, label, percentage} = statisticalData;
// const arr = friends.map(el => {
//   return el;
// });
// console.log(arr);

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
      {/* ------------------- */}
      <Statistics title="Upload stats" stats={statisticalData}>
        <Title title="Upload stats" />
        {/* {title && <Title title="Upload stats" />} */}
        {/* { title==="Upload stats" && <Title title="Upload stats"/>} */}
      </Statistics>
      ;
      <Statistics stats={statisticalData} />;{/* ------------------- */}
      <FriendList friends={friends}>
        <FriendListItem friends={friends} />
      </FriendList>
      {/* --------------- */}
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
