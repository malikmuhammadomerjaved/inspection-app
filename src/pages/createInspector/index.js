import { useState } from 'react';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { goBackIcon } from '../../assets/svg';
import './styles.scss';

const CreateInspector = () => {
  const [state, setState] = useState({
    name: '',
    inspectors: ['John', 'Bob'],
  });

  const navigate = useNavigate();

  const handleUpdateSU = ({ name, stateName }) => {
    setState((st) => ({
      ...st,
      inspectors: [...st.inspectors, name],
    }));

    setState((st) => ({
      ...st,
      name: '',
    }));
  };

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <section className='select-vehicle-container'>
      <h2 className='heading-main'>
        <span onClick={() => navigate(-1)} className='go-back-button'>
          {goBackIcon}
        </span>{' '}
        Create Inspector
      </h2>

      <section className='vehcile-select-inner-wrapper'>
        <Input
          className='login-field'
          placeholder='Enter inspector name'
          value={state.name}
          onChange={(e) =>
            setState((st) => ({
              ...st,
              name: e.target.value,
            }))
          }
        />

        <Button
          type='primary'
          shape='round'
          className='vehcile-select-forward-button'
          onClick={() => handleUpdateSU(state)}
        >
          ADD SU
        </Button>

        <ul className='sus-list'>
          <li className='heading'>Inspectors List</li>
          {state.inspectors.map((item, index) => (
            <li className='su-item' key={`su-${index}`}>
              <p className='su-name'>Name: {item}</p>
              <p className='su-name'>Designation: Inspector</p>
            </li>
          ))}
        </ul>

        <Button
          type='primary'
          shape='round'
          className='vehcile-select-forward-button'
          onClick={handleClick}
        >
          Continue
        </Button>
      </section>
    </section>
  );
};

export default CreateInspector;
