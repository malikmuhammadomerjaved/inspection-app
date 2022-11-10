import { Rate, Input } from 'antd';

const Gauges = ({ gauges, setGauges }) => {
  const { TextArea } = Input;

  return (
    <section>
      <article className='input-wrapper'>
        <h3 className='input-label'>Fuel</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setGauges((st) => ({
              ...st,
              fuel: value,
            }));
          }}
          value={gauges.fuel}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Oil</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setGauges((st) => ({
              ...st,
              oil: value,
            }));
          }}
          value={gauges.oil}
        />
      </article>

      <TextArea
        value={gauges.generalComments}
        onChange={(e) =>
          setGauges((st) => ({
            ...st,
            generalComments: e.target.value,
          }))
        }
        rows={4}
      />
    </section>
  );
};

export default Gauges;
