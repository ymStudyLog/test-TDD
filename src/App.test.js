import React from 'react';
import App from './App';
import { fireEvent, render } from '@testing-library/react';

describe('<App />', () => {
  it('check render TodoForm and TodoList properly', () => {
    const { getByText, getByTestId } = render(<App />);
    getByText('등록');
    getByTestId('TodoList');
  });

  it('render three todos', () => {
    const { getByText } = render(<App />);
    getByText('TDD 배우기');
    getByText('react-testing-library 적용');
    getByText('enzyme은 최신 버전 react 18에서는 사용할 수 없다');
  });

  it('create new todo', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.change(getByPlaceholderText('할일을 입력하세요'), {
      target: {
        value: '새 항목 추가하기',
      },
    });
    fireEvent.click(getByText('등록'));
    getByText('새 항목 추가하기');
  });

  it('toggle todo', () => {
    const { getByText } = render(<App />);
    const todoText = getByText('TDD 배우기');
    expect(todoText).toHaveStyle('text-decoration: none;');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through;');
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: none;');
  });

  it('delete todo', ()=>{
    const { getByText} = render(<App />);
    const todoText = getByText('TDD 배우기');
    const deleteButton = todoText.nextSibling;
    fireEvent.click(deleteButton);
    expect(todoText).not.toBeInTheDocument();
  })
});
