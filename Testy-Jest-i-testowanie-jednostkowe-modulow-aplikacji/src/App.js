import './App.css';
import { useState } from 'react';
import LoginForm from './3-components/LoginForm.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginFailedError, seLoginFailedError] = useState(null);

  const handleSuccess = () => {
    setLoggedIn(true);
  };

  const handleFail = (message) => {
    seLoginFailedError(message);
  };

  if (!loggedIn) {
    return (
      <div className="App">
        <LoginForm onSuccess={handleSuccess} onFail={handleFail} />
        {loginFailedError && <p style={{ color: 'red' }}>{loginFailedError}</p>}
      </div>
    );
  }

  return <p id="success-message">Dziękujemy za zalogowanie</p>;
}

export default App;
