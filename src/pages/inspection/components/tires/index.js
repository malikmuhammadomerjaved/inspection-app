import { Collapse, Rate, Input } from 'antd';

const Tires = ({ tires, setTires }) => {
  const { Panel } = Collapse;
  const { TextArea } = Input;

  return (
    <Collapse
      defaultActiveKey={['1']}
      className='tires-form-wrapper'
      expandIconPosition='end'
    >
      <Panel header='Front Tires' key='1'>
        <article className='input-wrapper'>
          <h3 className='input-label'>Front Right Tread</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setTires((st) => ({
                ...st,
                front: {
                  ...st.front,
                  rightTread: value,
                },
              }));
            }}
            value={tires.front.rightTread}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Front Left Tread</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setTires((st) => ({
                ...st,
                front: {
                  ...st.front,
                  leftTread: value,
                },
              }));
            }}
            value={tires.front.leftTread}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Front Right Pressure</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setTires((st) => ({
                ...st,
                front: {
                  ...st.front,
                  rightPressure: value,
                },
              }));
            }}
            value={tires.front.rightPressure}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Front Left Pressure</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setTires((st) => ({
                ...st,
                front: {
                  ...st.front,
                  leftPressure: value,
                },
              }));
            }}
            value={tires.front.leftPressure}
          />
        </article>

        <TextArea
          value={tires.front.generalComments}
          onChange={(e) =>
            setTires((st) => ({
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

      <Panel header='Rear Tires' key='2'>
        <article className='input-wrapper'>
          <h3 className='input-label'>Rear Right Tread</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setTires((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  rightTread: value,
                },
              }));
            }}
            value={tires.rear.rightTread}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Rear Left Tread</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setTires((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  leftTread: value,
                },
              }));
            }}
            value={tires.rear.leftTread}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Rear Right Pressure</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setTires((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  rightPressure: value,
                },
              }));
            }}
            value={tires.rear.rightPressure}
          />
        </article>

        <article className='input-wrapper'>
          <h3 className='input-label'>Rear Left Pressure</h3>
          <Rate
            allowHalf
            defaultValue={0.5}
            onChange={(value) => {
              setTires((st) => ({
                ...st,
                rear: {
                  ...st.rear,
                  leftPressure: value,
                },
              }));
            }}
            value={tires.rear.leftPressure}
          />
        </article>

        <TextArea
          value={tires.rear.generalComments}
          onChange={(e) =>
            setTires((st) => ({
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

export default Tires;
