import Form from './components/Form'
import Todos from './components/Todos'
import {useState} from 'react'
import './App.css';

function App() {
  const [todos,setTodos] = useState([])

  const handleDelete = (id) => {
    const filteredArray = todos.filter((todo,idx)=>idx != id)
    console.log(filteredArray)
    setTodos(filteredArray)
  }
  const handleChecking = (id) => {

    
    console.log(todos[id]["completed"] )
    // const updated = todos.map((todo,idx) =>{
    //     if(idx==id){
    //       return {
    //         ...todo,
    //         completed : !todo[idx]["completed"]
    //       }
    //    } else{
    //       return todo
    //     }
    // })
    let k = [...todos]
    k[id].completed = !todos[id]["completed"]

    setTodos(k)
    console.log(todos[id])
    // setTodos(updated)
  }
  return (
    <div className="App">
      <Form setTodos={setTodos} todos={todos}/>
      <Todos handleDelete={handleDelete} handleChecking={handleChecking} todos={todos}/>
    </div>
  );
}

export default App;
