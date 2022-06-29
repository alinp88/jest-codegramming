/**
 * @group ui
 * @group all
 */

import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe ('Main App', () => {
  describe('Login Screen', () => {
    test('Title', () => {
      render(<App />);
      const element = screen.getByText(/App Login/i);
      expect(element).toBeInTheDocument();
    });
    test('Inputs', () => {
      render(<App />);
      const element1 = screen.getByText(/username/i);
      expect(element1).toBeInTheDocument();
      const element2 = screen.getByText(/password/i);
      expect(element2).toBeInTheDocument();
    });
    test('Password Strength', () => {
      render(<App />);
      const element = screen.getByText(/strength/i);
      expect(element).toBeInTheDocument();
    });
  })
});

describe ('Login Test', () => {
  test('Login Success', () => {
    const app = render(<App />);
    const username = app.getByLabelText('username');
    fireEvent.change(username, {target: {value: 'good'}})
    const password = app.getByLabelText('password');
    fireEvent.change(password, {target: {value: 'good_password'}})
    const loginButton = app.getByText('Login');
    fireEvent.click(loginButton);
    const element = screen.getByText(/login state: good/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('good');
  });
  test('Login Fail', () => {
    const app = render(<App />);
    const username = app.getByLabelText('username');
    fireEvent.change(username, {target: {value: 'bad'}})
    const password = app.getByLabelText('password');
    fireEvent.change(password, {target: {value: 'bad_password'}})
    const loginButton = app.getByText('Login');
    fireEvent.click(loginButton);
    const element = screen.getByText(/login state: bad/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('bad');
  });
});

test('Mocked function call', () => {
  const mock = jest.fn()
  mock(1);
  mock(2);
  expect(mock).toBeCalledWith(1);
  expect(mock).toBeCalledTimes(2);
});

test('App renders correctly', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  //expect(tree).toMatchInlineSnapshot();
});
