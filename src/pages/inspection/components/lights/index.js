import { Collapse, Rate, Input } from 'antd';

import './styles.scss';

const Lights = ({ lights, setLights }) => {
  const { Panel } = Collapse;
  const { TextArea } = Input;

  return (
    <Collapse
      defaultActiveKey={['1']}
      className='lights-form-wrapper'
      expandIconPosition='end'
    >
      <Panel header='Front Lights' key='1'>
        <article className='input-wrapper'>
          <h3 className='input-label'>Low Beam</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                front: {
                  ...st.front,
                  lowBeam: value,
                },
              }));
            }}
            value={lights.front.lowBeam}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>High Beam</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                front: {
                  ...st.front,
                  highBeam: value,
                },
              }));
            }}
            value={lights.front.highBeam}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Left Indicator</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                front: {
                  ...st.front,
                  leftIndicator: value,
                },
              }));
            }}
            value={lights.front.leftIndicator}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Right Indicator</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                front: {
                  ...st.front,
                  rightIndicator: value,
                },
              }));
            }}
            value={lights.front.rightIndicator}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Emergency Indicators</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                front: {
                  ...st.front,
                  emergencyIndicator: value,
                },
              }));
            }}
            value={lights.front.emergencyIndicator}
          />
        </article>

        <TextArea
          value={lights.front.generalComments}
          onChange={(e) =>
            setLights((st) => ({
              ...st,
              front: {
                ...st.front,
                generalComments: e.target.value,
              },
            }))
          }
          rows={4}
        />
      </Panel>
      <Panel header='Rear Lights' key='2'>
        <article className='input-wrapper'>
          <h3 className='input-label'>Break Light</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  breakLight: value,
                },
              }));
            }}
            value={lights.rear.breakLight}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Reverse Light</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  reverseLight: value,
                },
              }));
            }}
            value={lights.rear.reverseLight}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Left Indicator</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  leftIndicator: value,
                },
              }));
            }}
            value={lights.rear.leftIndicator}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Right Indicator</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  rightIndicator: value,
                },
              }));
            }}
            value={lights.rear.rightIndicator}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Number Plate Light</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  numberPlateLight: value,
                },
              }));
            }}
            value={lights.rear.numberPlateLight}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Emergency Indicators</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setLights((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  emergencyIndicator: value,
                },
              }));
            }}
            value={lights.rear.emergencyIndicator}
          />
        </article>

        <TextArea
          value={lights.rear.generalComments}
          onChange={(e) =>
            setLights((st) => ({
              ...st,
              rear: {
                ...st.rear,
                generalComments: e.target.value,
              },
            }))
          }
          rows={4}
        />
      </Panel>
    </Collapse>
  );
};

export default Lights;
