import { useState } from 'react';
import { unixTime } from 'utils/time';
import { useInterval } from 'hooks/use-interval';

export default function CurrentEpochTime() {
  const [time, setTime] = useState(unixTime());

  useInterval(() => {
    setTime(unixTime);
  }, 1000);

  return (
    <>
      <div className="my-10 flex">
        <div className="p-2">The current Unix epoch time is</div>
        <div className="bg-indigo-200 p-2 rounded-md">
          <strong>{time}</strong>
        </div>
      </div>
    </>
  );
}
