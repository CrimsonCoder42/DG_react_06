import { useState, useEffect } from 'react';

import Header from './Header';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';

import AddItem from './AddItem';

function App() {
  const API_URL = 'http://localhost:3500/items';

   const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);
        setItems(data);

      } catch (error) {
        console.log(error.stack);
      }
      
    }
   fetchItems();
  }, [])


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    
  }


  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // add item to list 
    addItem(newItem);
    // clear input
    setNewItem('');
  }


  return (
    <div className="App">
      <Header title='Groceries'/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter((item) => (item.item).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
