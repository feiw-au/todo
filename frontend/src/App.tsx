import { useState } from 'react'
import Header from './components/Header'
import NewItem from './components/NewItem'
import ItemList from './components/ItemList'
import todoIcon from './assets/to-do-list-icon-free-vector.jpg'
import './App.css'

export type ToDoItems = {
  id: number;
  title: string;
  category: string;
}

function App() {
  const [items, setItems] = useState<ToDoItems []>([]);

  function handleNewItem(item: string, category: string){
    setItems(prevItem => {
      const newItem: ToDoItems = {
        id: Math.random(),
        title: item,
        category
      }

      return [...prevItem, newItem]
    })
  }

  function handleOnDeleteItem(id: number) {
    setItems(prevItem => prevItem.filter((i) => i.id != id))
  }

  return (
    <>
      <Header image={{src: todoIcon, alt: 'To do icon'}}>
        <h1>To Do List</h1>
      </Header>
      <NewItem addNewItem={handleNewItem} />

      <ItemList items={items} onDeleteItem={handleOnDeleteItem} />
    </>
  )
}

export default App
