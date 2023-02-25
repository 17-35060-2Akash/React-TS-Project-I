import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ButtonStyle from './components/ButtonStyle';
import DataFetch from './components/DataFetch';
import NewUser from './components/NewUser';
import NewUserForm from './components/UpdatedUserForm';
import Post from './components/Post';
import User from './components/User';
import UserDemo from './components/UserDemo';
import UserForm from './components/UserForm';
import UserV2 from './components/UserV2';
import { users } from './fakedata/fakeData1';

let user1 = {
  name: "Nasin Aynul Akash",
  age: 25,
  isRegistered: true,
  lang: ["Bangla", "English", "Hindi"]
};

let user2 = {
  name: "Nazia Heeme",
  age: 27,
  isRegistered: true,
  lang: ["Bangla", "English", "Hindi"]
};

const btnStyle = { color: "red", backgroundColor: 'bisque' };

type User = {
  id: number;
  name: string;
}

function App() {
  const [count, setCount] = useState<true | false>(true);
  // const [user, setUser] = useState<null | User>(null);
  const [user, setUser] = useState<User>({} as User);

  const handleOnClick = () => {
    // setCount(count = count + 1);
    setCount(!count);
  };

  const handleAddUser = () => {
    setUser({ id: 1, name: "Akash" });
    console.log(user);
  }

  return (
    <div className="App">

      {/* <h1>User Management</h1> 
      <User name="Nasin Aynul Akash" age={25} isRegistered={true}></User> 
      <User name="Nazia Heeme" age={27} isRegistered={false}></User>  */}

      {/* <UserV2 user={user1}></UserV2> */}
      {/* <UserV2 user={user2}></UserV2> */}

      {/* <h2>Array of objects </h2>
      <UserDemo users={users}></UserDemo> */}

      {/* <h2>fetching data</h2> 
      <DataFetch status="loading"></DataFetch> */}

      {/* <h2>typing children props</h2> 
      <Button>click me</Button>
      <Post></Post> */}

      {/* <h2>Style Props</h2>
      <ButtonStyle btnStyle={btnStyle}></ButtonStyle> */}

      {/* <h2>UseState Hook Props</h2>
      <h1>{count ? "True" : "False"}</h1>
      <button onClick={() => handleOnClick()}>Increment</button>
      <button onClick={() => handleAddUser()}>Add User</button>
      <p>{user.id}</p> */}

      {/* <h1>Typing Events</h1>
         <h1>onChange and onClick</h1>
      <NewUser></NewUser> */}

      {/* <h1>For onSubmit</h1>
      <UserForm></UserForm> */}

      <h2>Updated User Form Practice</h2>
      <NewUserForm></NewUserForm>

    </div>
  );
}

export default App;
