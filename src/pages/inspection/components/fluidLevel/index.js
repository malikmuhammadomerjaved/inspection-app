import { Rate, Input } from 'antd';

const FluidLevel = ({ fluidLevel, setFluidLevel }) => {
  const { TextArea } = Input;

  return (
    <section className='generic-form-wrapper-inner'>
      <article className='input-wrapper'>
        <h3 className='input-label'>Oil</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setFluidLevel((st) => ({
              ...st,
              oil: value,
            }));
          }}
          value={fluidLevel.oil}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Coolant</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setFluidLevel((st) => ({
              ...st,
              coolant: value,
            }));
          }}
          value={fluidLevel.coolant}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Break</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setFluidLevel((st) => ({
              ...st,
              break: value,
            }));
          }}
          value={fluidLevel.break}
        />
      </article>

      <article className='general-comments-wrapper'>
        <h3 className='input-label'>General Comments</h3>
        <TextArea
          value={fluidLevel.generalComments}
          onChange={(e) =>
            setFluidLevel((st) => ({
              ...st,
              generalComments: e.target.value,
            }))
          }
          rows={4}
        />
      </article>
    </section>
  );
};

export default FluidLevel;
