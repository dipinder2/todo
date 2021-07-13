import React from 'react';

const Todo = ({task,completed,idx,handleDelete,handleChecking}) => {

	const handleDeleteHelper = () =>{
	    	handleDelete(idx)
	}
	const handleChange = () =>{
		handleChecking(idx)
	}

  return (
  	<>
	    <li id={idx}>
	    	{
	    		completed ? 
	    	<><input  type="checkbox" value={task} onChange={(idx) => handleChange(idx)}/>
	    	<label style={{textDecorationLine:"line-through"}}>{task}</label></>
	   		:<><input  type="checkbox" value={task} onChange={(idx) => handleChange(idx)} />
	   		<label style={{textDecoration:"none"}}>{task}</label></>
	    	}
	    	<button onClick={handleDeleteHelper} className="btn btn-danger">Delete</button>
	    </li>
	    <br/>
    </>
  )
}

export default Todo;