import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm, { FORM_ERROR } from './LoginForm';
import * as api from '../utils/api';

describe('LoginForm', () => {
  it('should render successfully', () => {
      const { baseElement, debug } = render(<LoginForm />);

      const email = baseElement.querySelector('#email');
      const password = baseElement.querySelector('#password');
      const button = baseElement.querySelector('#button-submit');

      expect(email).toBeVisible();
      expect(password).toBeVisible();
      expect(button).toBeVisible();
      expect(baseElement).toBeTruthy();

  });
  it('should display error when email is invalid', () => {
    const { baseElement, debug } = render(<LoginForm />);

    const email = baseElement.querySelector('#email');
    const password = baseElement.querySelector('#password');
    const button = baseElement.querySelector('#button-submit');

    fireEvent.change(email, { target: { value: 'email' } });
    fireEvent.change(password, { target: { value: '12345' } });
    fireEvent.click(button);

    expect(screen.getByText('Niepoprawny email')).toBeVisible();
  });
  it('should display error when missing email fields data', () => {
    const { baseElement, debug } = render(<LoginForm />);

    const email = baseElement.querySelector('#email');
    const password = baseElement.querySelector('#password');
    const button = baseElement.querySelector('#button-submit');

    fireEvent.change(password, { target: { value: '12345' } });
    fireEvent.click(button);

    expect(screen.getByText('Niepoprawny email lub hasło')).toBeVisible();
  });
  it('should display error when missing password fields data', () => {
    const { baseElement, debug } = render(<LoginForm />);

    const email = baseElement.querySelector('#email');
    const password = baseElement.querySelector('#password');
    const button = baseElement.querySelector('#button-submit');

    fireEvent.change(email, { target: { value: 'email' } });
    fireEvent.click(button);

    expect(screen.getByText('Niepoprawny email lub hasło')).toBeVisible();
  });

  // DRUGA CZĘŚĆ ZADANIA - MOCKI
  it('should call onSuccess when login is accepted', async () => {
        // given
        const onSuccessSpy = jest.fn();
        const onFailedSpy = jest.fn();
        const { baseElement, debug } = render(<LoginForm onSuccess={onSuccessSpy} onFail={onFailedSpy} />);

        const email = baseElement.querySelector('#email');
        const password = baseElement.querySelector('#password');
        const buttonSubmit = baseElement.querySelector('#button-submit');
        const loginSpy = jest.spyOn(api, 'login').mockRejectedValue('My custom error message');

        // when
        fireEvent.change(email, { target: { value: 'mariuszkowalski@gmail.com' } } );
        fireEvent.change(password, { target: { value: 'test123' } } );
        fireEvent.click(buttonSubmit);

        await waitFor(() => {
            expect(onFailedSpy).toHaveBeenCalled();
            expect(onSuccessSpy).not.toHaveBeenCalled();
        })

        // then
        expect(loginSpy).toHaveBeenCalled();
  });
  it.todo('should call onFail when login is rejected');

  // it('snapshot', () => {
  //   const { baseElement } = render(<LoginForm />);
  //   expect(baseElement).toMatchSnapshot();
  // });
});
