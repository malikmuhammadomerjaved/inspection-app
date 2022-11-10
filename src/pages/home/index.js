import { useNavigate } from 'react-router-dom';

import './styles.scss';

const categories = [
  {
    name: 'Car',
    value: 'Car',
    icon: '',
  },
  {
    name: 'Van',
    value: 'Van',
    icon: '',
  },
  {
    name: 'Bike',
    value: 'Bike',
    icon: '',
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCategory = (e) => {
    const value = e.target?.id?.toLowerCase();

    if (value) {
      navigate(`/category/${value}`);
    }
  };

  return (
    <section className='home-page-container'>
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
              {item.name}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Home;
