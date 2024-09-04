import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

const mockTodo = [
  {
    id: 0,
    content: "리엑트 공부하기",
    createDate: new Date().getTime(),
    isDone: false,
  },
  {
    id: 1,
    content: "스프링 공부하기",
    createDate: new Date().getTime(),
    isDone: false,
  },
  {
    id: 2,
    content: "한국사 공부하기",
    createDate: new Date().getTime(),
    isDone: false,
  },
];

function App() {
  const [todo, setTodo] = useState([mockTodo]);

  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
export default App;
