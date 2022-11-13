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
        name: 'Senthil',
        stateName: 'Victoria',
      },
      {
        name: 'Mike',
        stateName: 'South Australia',
      },
      {
        name: 'Rahul',
        stateName: 'New South Wales',
      },
      {
        name: 'Queensland',
        stateName: 'James',
      },
      {
        name: 'Western Australia',
        stateName: 'Michael',
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
      value: 'Victoria',
      label: 'Victoria',
    },
    {
      value: 'South Australia',
      label: 'South Australia',
    },
    {
      value: 'New South Wales',
      label: 'New South Wales',
    },
    {
      value: 'Queensland',
      label: 'Queensland',
    },
    {
      value: 'Western Australia',
      label: 'Western Australia',
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
          placeholder='Enter Super User name'
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
          ADD Super User
        </Button>

        <ul className='sus-list'>
          <li className='heading'>Super User List</li>
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
