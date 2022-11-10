import { Rate, Input } from 'antd';

const VehicleCondition = ({ condition, setCondition }) => {
  const { TextArea } = Input;

  return (
    <section>
      <article className='input-wrapper'>
        <h3 className='input-label'>Windscreen Cracks</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setCondition((st) => ({
              ...st,
              windscreen: value,
            }));
          }}
          value={condition.windscreen}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Body Dents</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setCondition((st) => ({
              ...st,
              bodyDents: value,
            }));
          }}
          value={condition.bodyDents}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Light Cracks</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setCondition((st) => ({
              ...st,
              lightCracks: value,
            }));
          }}
          value={condition.lightCracks}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Interior Clean</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setCondition((st) => ({
              ...st,
              interiorClean: value,
            }));
          }}
          value={condition.interiorClean}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Interior Damage</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setCondition((st) => ({
              ...st,
              interiorDamage: value,
            }));
          }}
          value={condition.interiorDamage}
        />
      </article>

      <TextArea
        value={condition.generalComments}
        onChange={(e) =>
          setCondition((st) => ({
            ...st,
            generalComments: e.target.value,
          }))
        }
        rows={4}
      />
    </section>
  );
};

export default VehicleCondition;
