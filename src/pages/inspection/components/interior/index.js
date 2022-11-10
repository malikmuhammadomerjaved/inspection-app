import { Rate, Input } from 'antd';

const Interior = ({ interior, setInterior }) => {
  const { TextArea } = Input;

  return (
    <section>
      <article className='input-wrapper'>
        <h3 className='input-label'>Wiper</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              wiper: value,
            }));
          }}
          value={interior.wiper}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Washer</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              washer: value,
            }));
          }}
          value={interior.washer}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Heater</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              heater: value,
            }));
          }}
          value={interior.heater}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Seats</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              seats: value,
            }));
          }}
          value={interior.seats}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Rear View Mirror</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              rearViewMirror: value,
            }));
          }}
          value={interior.rearViewMirror}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Door Lock</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              doorLock: value,
            }));
          }}
          value={interior.doorLock}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Windows</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              windows: value,
            }));
          }}
          value={interior.windows}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Horn</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              horn: value,
            }));
          }}
          value={interior.horn}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Seat Belts</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              seatBelts: value,
            }));
          }}
          value={interior.seatBelts}
        />
      </article>

      <article className='input-wrapper'>
        <h3 className='input-label'>Hand Break</h3>
        <Rate
          allowHalf
          defaultValue={0.5}
          onChange={(value) => {
            setInterior((st) => ({
              ...st,
              handBreak: value,
            }));
          }}
          value={interior.handBreak}
        />
      </article>

      <TextArea
        value={interior.generalComments}
        onChange={(e) =>
          setInterior((st) => ({
            ...st,
            generalComments: e.target.value,
          }))
        }
        rows={4}
      />
    </section>
  );
};

export default Interior;
