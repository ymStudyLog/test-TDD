import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="dddddd" name="이유미" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('show the props correctly', () => {
    const utils = render(<Profile username="dddddd" name="이유미" />);
    utils.getByText('dddddd');
    utils.getByText('(이유미)');
    utils.getByText(/이/);
  });
});
