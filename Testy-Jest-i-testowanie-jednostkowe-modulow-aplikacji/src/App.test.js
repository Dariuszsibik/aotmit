import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import * as api from './utils/api';

describe('App', () => {
  it('should display success message on successful login', async() => {
        // given
        const { baseElement, debug, getByRole } = render(<App />);
        const email = baseElement.querySelector('#email');
        const password = baseElement.querySelector('#password');
        const buttonSubmit = baseElement.querySelector('#button-submit');
        jest.spyOn(api, 'login').mockResolvedValueOnce('ok');

        // when
        fireEvent.change(email, { target: { value: 'mariuszkowalski@gmail.com' } } );
        fireEvent.change(password, { target: { value: 'test123' } } );
        fireEvent.click(buttonSubmit);
  
        // then
        await waitFor(() => expect(baseElement.querySelector('#success-message')).toBeInTheDocument())
        
  });
  // wyrenderuj komponent App

  // zmockuj api.login

  // złap input z emailem
  // złap input z passwordem
  // złap przycisk

  // wpisz email
  // wpisz hasło
  // kliknij w przycisk

  // sprawdź czy widać napis "Dziękujemy za zalogowanie"
  // WAŻNE - napis będzie widoczny dopiero po czasie, musisz użyć waitFor https://testing-library.com/docs/guide-disappearance/#2-using-waitfor



  it.todo('should display error message on failed login');
});
