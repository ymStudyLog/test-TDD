import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoForm from './TodoForm';

//하나의 컴포넌트 작성시 그에 짝이되는 test 파일 생성 -> 테스트를 먼저 작성한 후 컴포넌트를 만든다
describe('<TodoForm />', () => {
  const setup = (props) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText('할일을 입력하세요');
    const button = getByText('등록');
    return {
      ...utils,
      input,
      button,
    };
  };

  it('has one input and one button', () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  }); //요소 체크
  it('changes input', () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        //event.target
        value: 'TDD 배우기', //event.target.value
      },
    });
    expect(input).toHaveAttribute('value', 'TDD 배우기');
  }); //input 요소에서 onchange 이벤트가 정상 작동하는지 확인
  it('calls onInsert and clears input', () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });
    fireEvent.change(input, {
      target: {
        value: 'TDD 배우기',
      },
    });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith('TDD 배우기');
    expect(input).toHaveAttribute('value', '');
  }); //button 요소에서 insert 이벤트가 정상 작동하는지 확인
});
