import React from 'react';

const TodoForm = ({ onInsert }) => {
  const [todo, setTodo] = React.useState('');
  const onChange = React.useCallback((e) => {
    setTodo(e.target.value);
  }, []);
  const onSubmit = React.useCallback((e) => {
    onInsert(todo);
    setTodo('');
    e.preventDefault();
  }, [onInsert,todo]);

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할일을 입력하세요" value={todo} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
