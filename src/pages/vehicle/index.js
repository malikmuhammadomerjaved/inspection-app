import { useState } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import vehicleIcon from '../../assets/icons/select-vehicle.png';
import { goBackIcon } from '../../assets/svg';
import './styles.scss';

const vehicle_list = [
  {
    regoName: 'Rego 1',
    driverName: 'Driver Name 1',
    value: 'rego-1',
  },
  {
    regoName: 'Rego 2',
    driverName: 'Driver Name 2',
    value: 'rego-2',
  },
  {
    regoName: 'Rego 3',
    driverName: 'Driver Name 3',
    value: 'rego-3',
  },
  {
    regoName: 'Rego 4',
    driverName: 'Driver Name 4',
    value: 'rego-4',
  },
];

const Vehicle = () => {
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const handleVehcileChange = (item) => {
    if (item) {
      setState(() => item);
    }
  };

  const handleClick = () => {
    navigate(`/category/vehicle/${state.value}`);
  };

  return (
    <section className='select-vehicle-container'>
      <h2 className='heading-main'>
        <span onClick={() => navigate(-1)} className='go-back-button'>
          {goBackIcon}
        </span>{' '}
        Select Vehcile
      </h2>

      <section className='vehcile-select-inner-wrapper'>
        <ul className='vehicles-list-wrapper'>
          {vehicle_list.map((item, index) => (
            <li
              key={`vehcile-${index}`}
              className={`vehcile-item ${state === item && 'selected'}`}
              onClick={() => handleVehcileChange(item)}
            >
              <img className='vehcile-icon' src={vehicleIcon} alt='' />
              <article className='box-inner-content'>
                <p className='day'>{item.regoName}</p>
                <p className='date'>{item.driverName}</p>
              </article>
            </li>
          ))}
        </ul>

        <Button
          type='primary'
          shape='round'
          className='vehcile-select-forward-button'
          onClick={handleClick}
        >
          Continue to inspection
        </Button>
      </section>
    </section>
  );
};

export default Vehicle;
