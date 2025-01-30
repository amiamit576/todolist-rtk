
import { useSelector } from "react-redux";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1> Todo App</h1>
      <TodoInput></TodoInput>
      <TodoList />
    </>
  );
}

export default App;
