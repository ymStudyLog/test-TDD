import React from 'react';
import TodoForm from './todo/TodoForm';
import TodoList from './todo/TodoList';

const App = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: 'TDD 배우기',
      done: false,
    },
    {
      id: 2,
      text: 'react-testing-library 적용',
      done: false,
    },
    {
      id: 3,
      text: 'enzyme은 최신 버전 react 18에서는 사용할 수 없다',
      done: true,
    },
  ]);
  const nextId = React.useRef(4);
  const onInsert = React.useCallback(
    (text) => {
      setTodos(
        todos.concat({
          id: nextId.current,
          text,
          done: false,
        }),
      );
      nextId.current += 1;
    },
    [todos],
  );

  const onToggle = React.useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo,
        ),
      );
    },
    [todos],
  );

  const onRemove = React.useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  },[todos]);

  return (
    <div>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
};

export default App;
