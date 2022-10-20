import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    {id: 'U1', username: 'TestUser1', age: '12'},
    {id: 'U2', username: 'TestUser2', age: '15'},
    {id: 'U3', username: 'TestUser3', age: '20'}
  ]);

  const deleteUserItem = (id) => {
    console.log("Trying to delete: " + id);
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== id);
      return updatedUsers;
    })
  }

  const addUserItem = user => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({id:Math.random().toString(), username:user.username, age:user.age});
      return updatedUsers;
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserItem}/>
      <UserList Users={users} onDeleteUser={deleteUserItem}/>
    </div>
  );
}

export default App;
