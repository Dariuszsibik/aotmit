import { useState } from 'react';
import { isEmail } from '../2-email-validator/validation';
import { login } from '../utils/api.js';

const LoginForm = ({ onSuccess, onFail }) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    setError(null);
    const { email, password } = formState;
    event.preventDefault();
    
    if (!email || !password) {
      setError('Niepoprawny email lub hasło');
      return;
    }
    if (email && !isEmail(email)) {
      setError('Niepoprawny email');
      return;
    }

    // mock api behavior
    login(email, password)
      .then(() => {
        console.log('login successful');
        onSuccess();
      })
      .catch((error) => {
        console.log('login failed');
        onFail(error);
      });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input id="email" name="email" onChange={handleFormChange} value={formState.email} />
        </label>
        <label>
          Hasło
          <input id="password" name="password" onChange={handleFormChange} value={formState.password} />
        </label>
        <button id="button-submit" type="submit">Zaloguj się</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default LoginForm;
