import React,{useState} from 'react';

const Form = ({setTodos,todos}) => {
  const [todo,setTodo] = useState({})
  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos,todo])

    setTodo({
      task:""
    })

  }
  const handleChange = e => {
    e.preventDefault();
    const {name,value} = e.target;
    setTodo({
      [name]:value,
      completed:false
    })


  }


  return (
    <form onSubmit={handleSubmit}>
    	<label>Task:</label>&nbsp;&nbsp;
      <input value={todo.task} onChange={handleChange} name="task"/>&nbsp;&nbsp;

      <input className="btn btn-primary" type="submit" value="add"/>
    </form>
  )
}

export default Form;