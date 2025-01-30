import { useState } from "react";
import { addTodo } from "../redux/slices/todoSlice";

import { useDispatch } from "react-redux";
    


function TodoInput() {
  const [todo, setTodo] = useState("");
  const dispatch =useDispatch();

      
      
  function addTodoToStore(){
    dispatch(addTodo(todo))
  }


  
      

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodoToStore}>Add todo....</button>


    </div>
  );
}

export default TodoInput;
