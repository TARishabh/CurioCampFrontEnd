import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const url='https://baff-2405-201-300a-e213-e1ba-cf5e-fcec-270.ngrok-free.app/user/login/'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Before Axios request');

    try {
      setLoading(true);
      const response = await axios.post(url, {
        username,
        password,
      });

      setData(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error);
    } finally {
      setLoading(false);
      console.log('After Axios request');
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
                className="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram"></a>
              <a href="#" className="social-login__icon fab fa-facebook"></a>
              <a href="#" className="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {data && (
        <div>
          <p>Login successful!</p>
          {/* Display additional data as needed */}
        </div>
      )}
    </div>
  );
};

export default Login;
