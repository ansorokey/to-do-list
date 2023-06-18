import './App.css';
import Form from './components/Form';
import List from './components/List';
import { useState, useEffect } from 'react';

function App() {
  const [newItem, setNewItem] = useState();
  const [toDos, setToDos] = useState(
    () => {
      const local = localStorage.getItem('LIST');
      if(!local) return [];

      return JSON.parse(local);
    }
  );

  function addToDo(title){
    setToDos([...toDos, { id: crypto.randomUUID(), title, completed: false } ]);
  }

  useEffect(() => {
    localStorage.setItem('LIST', JSON.stringify(toDos));
  }, [toDos]);

  return (
    <>
      <Form
        newItem={newItem}
        setNewItem={setNewItem}
        addToDo={addToDo}
      />
      <h1 className="header">To-Do</h1>
      <List toDos={toDos} setToDos={setToDos}/>
    </>
  );
}

export default App;
