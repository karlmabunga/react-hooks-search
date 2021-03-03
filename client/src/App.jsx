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

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items:inputItems,
    onInputValueChange: ({inputValue}) => {
      setInputItems(
        users.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase()))
      )
    }
  })
  return (
    <div className='App'>
      <h2>Current User: {singleUser}</h2>
      <div {...getComboboxProps()}>
      <Input {...getInputProps()}
      placeholder='Search'
      enterbutton='Search'
      size='large'
      />
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <span
            key={item.id}
            {...getItemProps({item, index})}
            onClick={() => setSingleUser(item.name)}>

            <li style={highlightedIndex === index ? {background: '#ede'}: {}}
            >
              <h4>{item.name}</h4>
            </li>

            </span>
          ))
        }
      </ul>
    </div>
  );

};


export default App;