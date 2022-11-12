import { useNavigate } from 'react-router-dom';

import carIcon from '../../assets/icons/home/car.png';
import bikeIcon from '../../assets/icons/home/bike.png';
import truckIcon from '../../assets/icons/home/truck.png';
import bellIcon from '../../assets/icons/home/bell.png';

import './styles.scss';

const categories = [
  {
    name: 'Car',
    value: 'Car',
    icon: carIcon,
  },
  {
    name: 'Van',
    value: 'Van',
    icon: bikeIcon,
  },
  {
    name: 'Bike',
    value: 'Bike',
    icon: truckIcon,
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCategory = (e) => {
    const value = e.currentTarget?.id?.toLowerCase();

    if (value) {
      navigate(`/category/${value}`);
    }
  };

  return (
    <section className='home-page-container'>
      <section className='homepage-greet-wrapper'>
        <article className='hamburger-icon'>
          <span />
          <span />
          <span />
        </article>
        <img src={bellIcon} alt='' className='bell-icon' />

        <p className='username'>Hi Usman Ali</p>
        <h3 className='greet'>Good Morning</h3>
      </section>

      <article className='categories-wrapper'>
        <h3 className='heading'>Please Select Your Category</h3>
        <ul className='categories-list-wrapper'>
          {categories.map((item, index) => (
            <li
              key={`category-no-${index}`}
              className='category'
              onClick={handleCategory}
              id={item.value}
            >
              <img src={item.icon} alt='' className='icon' />
              <p className='name'>{item.name}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Home;
