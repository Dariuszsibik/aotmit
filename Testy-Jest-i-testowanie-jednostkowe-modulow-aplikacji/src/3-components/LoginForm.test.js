import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm, { FORM_ERROR } from './LoginForm';
import * as api from '../utils/api';

describe.skip('LoginForm', () => {
  it.todo('should render successfully');
  it.todo('should display error when email is invalid');
  it.todo('should display error when missing email fields data');
  it.todo('should display error when missing password fields data');

  // DRUGA CZĘŚĆ ZADANIA - MOCKI
  it.todo('should call onSuccess when login is accepted');
  it.todo('should call onFail when login is rejected');
});
