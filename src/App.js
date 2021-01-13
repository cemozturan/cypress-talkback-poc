import './App.css';
import { useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetch(`${process.env.REACT_APP_API_HOST}/users`)
      .then(async (response) => setUsers(await response.json()))
  }

  return (
    <div className="App">
      <button data-testid="get-users-button" onClick={getUsers}>Get users</button>
      <ul>
      {users.map(user => (
          <li
            key={user.id}
            data-testid={`user-${user.id}`}
          >{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
