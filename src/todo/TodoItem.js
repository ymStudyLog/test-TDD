import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;
  const toggle = React.useCallback(() => onToggle(id), [id, onToggle]);
  const remove = React.useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li>
      <span
        style={{
          textDecoration: done ? 'line-through' : 'none',
        }}
        onClick={toggle}
      >
        {text}
      </span>
      <button onClick={remove}>삭제</button>
    </li>
  );
};

export default TodoItem;
