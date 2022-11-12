import { useState } from 'react';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { goBackIcon } from '../../assets/svg';
import './styles.scss';

const Login = () => {
  const [state, setState] = useState({
    name: '',
    password: '',
    error: false,
  });

  const navigate = useNavigate();

  const handleClick = ({ name, password }) => {
    if (name === 'test') {
      if ((password = '1234')) {
        navigate('/create-su');
      }
    } else {
      setState((st) => ({ ...st, error: true }));
    }
  };

  return (
    <section className='select-vehicle-container'>
      <h2 className='heading-main'>
        <span onClick={() => navigate(-1)} className='go-back-button'>
          {goBackIcon}
        </span>{' '}
        Login
      </h2>

      <section className='vehcile-select-inner-wrapper'>
        <Input
          className='login-field'
          placeholder='Enter username eg test'
          value={state.name}
          onChange={(e) =>
            setState((st) => ({
              ...st,
              name: e.target.value,
            }))
          }
        />

        <Input
          className='login-field'
          placeholder='Enter password eg 1234'
          value={state.password}
          onChange={(e) =>
            setState((st) => ({
              ...st,
              password: e.target.value,
            }))
          }
        />

        {state.error && (
          <div className='error-msg'>Invalid username or password</div>
        )}

        <Button
          type='primary'
          shape='round'
          className='vehcile-select-forward-button'
          onClick={() => handleClick(state)}
        >
          Login
        </Button>
      </section>
    </section>
  );
};

export default Login;
