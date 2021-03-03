import React, { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';
import { Input } from 'antd';

const App = () => {
  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState('');


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  console.log(users);
  return (
    <div className='App'>
      Hello World
    </div>
  );

};


export default App;