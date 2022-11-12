import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import loginLogo from '../../assets/icons/login/hp.png';
import loginBackground from '../../assets/icons/login/bg.png';

import './styles.scss';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <section className='login-container'>
      <figure className='logo-wrapper'>
        <img
          loading='lazy'
          className='login-page-logo'
          src={loginLogo}
          alt=''
        />
      </figure>

      <article
        className='buttons-container'
        style={{
          background: `url(${loginBackground}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <h4 className='login-heading'>Welcome to HP Fleet Inspection</h4>

        <Button
          type='primary'
          shape='round'
          className='custom-login-button'
          onClick={handleClick}
        >
          Get Started
        </Button>
      </article>
    </section>
  );
};

export default GetStarted;
