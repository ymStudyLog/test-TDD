import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter />', () => {
  //여러 테스트 it을 한번에 묶음
  it('check matches snapshot', () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  }); //스냅샷이랑 맞는지 비교
  it('has a number and two buttons', () => {
    const utils = render(<Counter />);
    utils.getByText('0');
    utils.getByText('+1');
    utils.getByText('-1');
  }); //html 요소가 다 있는지 체크
  it('increase', () => {
    const utils = render(<Counter />);
    const number = utils.getByText('0');
    const plusButton = utils.getByText('+1');
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent('3');
    expect(number.textContent).toBe('3');
  }); //+1 버튼을 누르면 잘 증가하는지 확인
  it('decrease', () => { //테스트 케이스 만들기
    const utils = render(<Counter />); //react-testing-library가 컴포넌트를 렌더링함
    const number = utils.getByText('0'); //getByText로 상태를 가져옴
    const minusButton = utils.getByText('-1'); //getByText로 요소를 가져옴
    fireEvent.click(minusButton); //fireEvent로 이벤트를 발생시킴
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    fireEvent.click(minusButton); //총 5번
    expect(number).toHaveTextContent('-5'); //expect안에는 예상되는 테스트 결과를 넣음 => numnber가 -5 를 가지는 것이 예상 결과
  }); //-1 버튼을 누르면 잘 감소하는지 확인
});
