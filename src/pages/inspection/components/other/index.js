import { Rate, Input } from 'antd';

const Other = ({ other, setOther }) => {
  const { TextArea } = Input;

  return (
    <section className='generic-form-wrapper-inner'>
      <article className='input-wrapper'>
        <h3 className='input-label'>Service Log Book</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setOther((st) => ({
              ...st,
              serviceLogBook: value,
            }));
          }}
          value={other.serviceLogBook}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Spare Tire</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setOther((st) => ({
              ...st,
              spareTire: value,
            }));
          }}
          value={other.spareTire}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Tire Jack</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setOther((st) => ({
              ...st,
              tireJack: value,
            }));
          }}
          value={other.tireJack}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Tire Wrench</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setOther((st) => ({
              ...st,
              tireWrench: value,
            }));
          }}
          value={other.tireWrench}
        />
      </article>

      <article className='general-comments-wrapper'>
        <h3 className='input-label'>General Comments</h3>
        <TextArea
          value={other.generalComments}
          onChange={(e) =>
            setOther((st) => ({
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

export default Other;
