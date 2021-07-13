import React from 'react';
import Todo from './Todo';

const Todos = ({todos,handleDelete, handleChecking}) => {
  return (
    <ul className="list-group">
    	{
    		todos.map((todo,idx) =>
    			<Todo handleDelete={handleDelete} handleChecking={handleChecking} key = {idx} idx = {idx} {...todo}/>)
    	}

    </ul>
  )
}

export default Todos;