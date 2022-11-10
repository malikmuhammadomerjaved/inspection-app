import { useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import { goBackIcon } from '../../assets/svg';
import './styles.scss';

const date_data = [
  {
    day: 'Su',
    date: '27',
  },
  {
    day: 'Mo',
    date: '28',
  },
  {
    day: 'Tu',
    date: '29',
  },
  {
    day: 'We',
    date: '30',
  },
  {
    day: 'Th',
    date: '31',
  },
  {
    day: 'Fr',
    date: '01',
  },
  {
    day: 'Sa',
    date: '02',
  },
];

const duration_data = ['Morning', 'Afternoon', 'Evening'];
const time_data = ['8:00 am', '9:00 am', '10:00 am', '11:00 am'];

const Category = () => {
  const navigate = useNavigate();
  // const { category } = useParams();
  const [state, setState] = useState({
    date: {},
    slot: {
      duration: '',
      time: '',
    },
  });

  const handleDate = (item) => {
    if (item) {
      setState((st) => ({
        ...st,
        date: item,
      }));
    }
  };

  const handleDuration = (item) => {
    if (item) {
      setState((st) => ({
        ...st,
        slot: {
          ...st.slot,
          duration: item,
        },
      }));
    }
  };

  const handleTime = (item) => {
    if (item) {
      setState((st) => ({
        ...st,
        slot: {
          ...st.slot,
          time: item,
        },
      }));
    }
  };

  const handleClick = () => {
    navigate(`/category/vehicle`);
  };

  return (
    <section className='inspection-slot-pickup-container'>
      <h2 className='heading-main'>
        <span onClick={() => navigate(-1)} className='go-back-button'>
          {goBackIcon}
        </span>{' '}
        Inspection Date
      </h2>

      <section className='inner-slot-wrapper'>
        <article className='pick-date-container'>
          <h3>Pickup Date</h3>
          <ul className='pick-date-list-wrapper'>
            {date_data.map((item, index) => (
              <li
                key={`date-${index}`}
                className='date-wrapper'
                onClick={() => handleDate(item)}
              >
                <section
                  className={`date-circle ${
                    state.date.day === item.day && 'selected'
                  }`}
                >
                  <p className='day'>{item.day}</p>
                  <p className='date'>{item.date}</p>
                </section>
              </li>
            ))}
          </ul>
        </article>

        <article className='pick-time-container'>
          <h3>Pickup Time</h3>
          <ul className='pick-duration-list-wrapper'>
            {duration_data.map((item, index) => (
              <li
                key={`duration-${index}`}
                onClick={() => handleDuration(item)}
                className={`duration-wrapper ${
                  state.slot.duration === item && 'selected'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          <ul className='pick-time-list-wrapper'>
            {time_data.map((item, index) => (
              <li
                key={`time-${index}`}
                onClick={() => handleTime(item)}
                className={`time-wrapper ${
                  state.slot.time === item && 'selected'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <Button
          type='primary'
          shape='round'
          className='time-slot-forward-button'
          onClick={handleClick}
        >
          Continue
        </Button>
      </section>
    </section>
  );
};

export default Category;
