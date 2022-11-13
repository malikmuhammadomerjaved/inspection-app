import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Collapse, Button } from 'antd';

import Lights from './components/lights';
import Interior from './components/interior';
import Tires from './components/tires';
import Gauges from './components/gauges';
import FluidLevel from './components/fluidLevel';
import VehicleCondition from './components/vehicleCondition';
import Other from './components/other';

import icon1 from '../../assets/icons/collapse/1.png';
import icon2 from '../../assets/icons/collapse/2.png';
import icon3 from '../../assets/icons/collapse/3.png';
import icon4 from '../../assets/icons/collapse/4.png';
import icon5 from '../../assets/icons/collapse/5.png';
import icon6 from '../../assets/icons/collapse/6.png';
import icon7 from '../../assets/icons/collapse/7.png';

import vehicleIcon from '../../assets/icons/rego-icon.png';
import { goBackIcon } from '../../assets/svg';
import './styles.scss';

const Inspection = () => {
  const location = useLocation();
  const { driverName, regoName } = location.state.state;
  const { Panel } = Collapse;
  const navigate = useNavigate();

  const [lights, setLights] = useState({
    front: {
      lowBeam: 0,
      highBeam: 0,
      leftIndicator: 0,
      rightIndicator: 0,
      emergencyIndicator: 0,
      generalComments: '',
    },
    rear: {
      breakLight: 0,
      reverseLight: 0,
      leftIndicator: 0,
      rightIndicator: 0,
      numberPlateLight: 0,
      emergencyIndicator: 0,
      generalComments: '',
    },
  });

  const [interior, setInterior] = useState({
    wiper: 0,
    washer: 0,
    heater: 0,
    seats: 0,
    rearViewMirror: 0,
    doorLock: 0,
    windows: 0,
    horn: 0,
    seatBelts: 0,
    handBreak: 0,
    generalComments: '',
  });

  const [tires, setTires] = useState({
    front: {
      rightTread: 0,
      leftTread: 0,
      rightPressure: 0,
      leftPressure: 0,
      generalComments: '',
    },
    rear: {
      rightTread: 0,
      leftTread: 0,
      rightPressure: 0,
      leftPressure: 0,
      generalComments: '',
    },
  });

  const [gauges, setGauges] = useState({
    fuel: 0,
    oil: 0,
    generalComments: '',
  });

  const [fluidLevel, setFluidLevel] = useState({
    oil: 0,
    coolant: 0,
    break: 0,
    generalComments: '',
  });

  const [condition, setCondition] = useState({
    windscreen: 0,
    bodyDents: 0,
    lightCracks: 0,
    interiorClean: 0,
    interiorDamage: 0,
    generalComments: '',
  });

  const [other, setOther] = useState({
    serviceLogBook: 0,
    spareTire: 0,
    tireJack: 0,
    tireWrench: 0,
  });

  const data = {
    lights,
    interior,
    tires,
    gauges,
    fluidLevel,
    condition,
    other,
  };

  const handlePdfPage = () => {
    navigate('/vehicle/report', { state: data });
  };

  return (
    <section className='inspection-form-page-container'>
      <h2 className='heading-main'>
        <span onClick={() => navigate(-1)} className='go-back-button'>
          {goBackIcon}
        </span>{' '}
        {regoName}
      </h2>

      <section className='inspection-inner-wrapper'>
        <article className='car-detail-wrapper'>
          <img src={vehicleIcon} alt='' className='car-icon' />
          <h2>{driverName}</h2>
          <p>50km</p>
        </article>
      </section>

      <Collapse
        defaultActiveKey={['0']}
        // onChange={onChange}
        className='collapse-forms-container'
        expandIconPosition='end'
      >
        <Panel
          header={
            <section className='collapse-header-custom'>
              <img src={icon1} alt='' className='collapse-icon' />
              <p className='title'>Lights</p>
            </section>
          }
          key='1'
        >
          <Lights lights={lights} setLights={setLights} />
        </Panel>
        <Panel
          header={
            <section className='collapse-header-custom'>
              <img src={icon2} alt='' className='collapse-icon' />
              <p className='title'>Interior</p>
            </section>
          }
          key='2'
        >
          <Interior interior={interior} setInterior={setInterior} />
        </Panel>
        <Panel
          header={
            <section className='collapse-header-custom'>
              <img src={icon3} alt='' className='collapse-icon' />
              <p className='title'>Tires</p>
            </section>
          }
          key='3'
        >
          <Tires tires={tires} setTires={setTires} />
        </Panel>
        <Panel
          header={
            <section className='collapse-header-custom'>
              <img src={icon4} alt='' className='collapse-icon' />
              <p className='title'>Gauges</p>
            </section>
          }
          key='4'
        >
          <Gauges gauges={gauges} setGauges={setGauges} />
        </Panel>
        <Panel
          header={
            <section className='collapse-header-custom'>
              <img src={icon5} alt='' className='collapse-icon' />
              <p className='title'>Fluid Levels</p>
            </section>
          }
          key='5'
        >
          <FluidLevel fluidLevel={fluidLevel} setFluidLevel={setFluidLevel} />
        </Panel>
        <Panel
          header={
            <section className='collapse-header-custom'>
              <img src={icon6} alt='' className='collapse-icon' />
              <p className='title'>Vehicle Condition</p>
            </section>
          }
          key='6'
        >
          <VehicleCondition condition={condition} setCondition={setCondition} />
        </Panel>
        <Panel
          header={
            <section className='collapse-header-custom'>
              <img src={icon7} alt='' className='collapse-icon' />
              <p className='title'>Other</p>
            </section>
          }
          key='7'
        >
          <Other other={other} setOther={setOther} />
        </Panel>
      </Collapse>

      <section className='generate-button-container'>
        <Button
          type='primary'
          shape='round'
          className='generate-pdf-button'
          onClick={handlePdfPage}
        >
          Generate Report
        </Button>
      </section>

      <section className='generate-button-container'>
        <Button type='primary' shape='round' className='generate-pdf-button'>
          Logout
        </Button>
      </section>
    </section>
  );
};

export default Inspection;
