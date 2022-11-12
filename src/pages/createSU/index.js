import { useState } from 'react';
import { Input, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

import { goBackIcon } from '../../assets/svg';
import './styles.scss';

const CreateSU = () => {
  const [state, setState] = useState({
    name: '',
    stateName: '',
    suList: [
      {
        name: 'John',
        stateName: 'State 1',
      },
      {
        name: 'Bob',
        stateName: 'State 2',
      },
    ],
  });

  const navigate = useNavigate();

  const handleChange = (value) => {
    setState((st) => ({
      ...st,
      stateName: value,
    }));
  };

  const handleUpdateSU = ({ name, stateName }) => {
    if (!!name && !!stateName) {
      const newData = {
        name,
        stateName,
      };

      setState((st) => ({
        ...st,
        suList: [...st.suList, newData],
      }));

      setState((st) => ({
        ...st,
        name: '',
        stateName: '',
      }));
    }
  };

  const handleClick = () => {
    navigate('/create-inspector');
  };

  const states = [
    {
      value: 'State 3',
      label: 'State 3',
    },
    {
      value: 'State 4',
      label: 'State 4',
    },
    {
      value: 'State 5',
      label: 'State 5',
    },
    {
      value: 'State 6',
      label: 'State 6',
    },
  ];

  return (
    <section className='select-vehicle-container'>
      <h2 className='heading-main'>
        <span onClick={() => navigate(-1)} className='go-back-button'>
          {goBackIcon}
        </span>{' '}
        Create State Super User
      </h2>

      <section className='vehcile-select-inner-wrapper'>
        <Input
          className='login-field'
          placeholder='Enter SU name'
          value={state.name}
          onChange={(e) =>
            setState((st) => ({
              ...st,
              name: e.target.value,
            }))
          }
        />

        <Select
          onChange={handleChange}
          options={states}
          value={state.stateName}
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
          <li className='heading'>SU List</li>
          {state.suList.map((item, index) => (
            <li className='su-item' key={`su-${index}`}>
              <p className='su-name'>Name: {item.name}</p>
              <p className='su-state'>State: {item.stateName}</p>
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

export default CreateSU;
