import React from 'react';
import { fireEvent, getByAltText, render } from '@testing-library/react';
import TodoList from './TodoList';

describe('<TodoList />', () => {
  const sampleTodos = [
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
  ];

  it('check render todos properly', () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });

  it('calls onToggle and onRemove', () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(
      <TodoList todos={sampleTodos} onRemove={onRemove} onToggle={onToggle} />,
    );
    fireEvent.click(getByText(sampleTodos[0].text)); //todo 중에서 첫번쨰
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);
    fireEvent.click(getAllByText('삭제')[0]); //삭제 버튼 중에서 첫번째
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
