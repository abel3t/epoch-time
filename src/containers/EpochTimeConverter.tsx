import React, { useState, RefObject } from 'react';

import DateForm from 'components/DateForm';

import {
  getGMTDateTimeFromUnixTimeSeconds,
  getLocalDateTimeFromUnixTimeSeconds,
  getGMTDateTimeFromUnixTimeMiliSeconds,
  getLocalDateTimeFromUnixTimeMiliSeconds,
} from 'utils/time';

const SECONDS = 'seconds';
const MILISECONDS = 'milliseconds';
const MICROSECONDS = 'microseconds';
const NANOSECONDS = 'nanoseconds';

export default function EpochTimeConverter() {
  const [epochTime, setEpochTime] = useState(0);
  let textInput: RefObject<HTMLInputElement> = React.createRef();

  const onSubmitEpochTime = () => {
    const time = textInput.current?.value;

    setEpochTime(time ? +time || 0 : 0);
  };

  const onChangeEpochTime = (event: any) => {
    const acceptKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'Enter',
    ];

    if (acceptKeys.includes(event.key)) {
      onSubmitEpochTime();
    }
  };

  const getGMTTime = (time: number) => {
    if (time > 0) {
      if (`${time}`.length >= 12) {
        console.log(`${time}`, `${time}`.length);

        if (`${time}`.length >= 15) {
          time = parseInt(`${time}`.substr(0, 14));
        }

        console.log(`${time}`, `${time}`.length);

        return getGMTDateTimeFromUnixTimeMiliSeconds(time);
      }
      return getGMTDateTimeFromUnixTimeSeconds(time);
    }

    if (`${time}`.length >= 13) {
      if (`${time}`.length >= 16) {
        time = parseInt(`${time}`.substr(0, 15));
      }

      return getGMTDateTimeFromUnixTimeMiliSeconds(time);
    }
    return getGMTDateTimeFromUnixTimeSeconds(time);
  };

  const getLocalTime = (time: number) => {
    if (time > 0) {
      if (`${time}`.length >= 12) {
        if (`${time}`.length >= 15) {
          time = parseInt(`${time}`.substr(0, 14));
        }

        return getLocalDateTimeFromUnixTimeMiliSeconds(time);
      }
      return getLocalDateTimeFromUnixTimeSeconds(time);
    }

    if (`${time}`.length >= 13) {
      if (`${time}`.length >= 16) {
        time = parseInt(`${time}`.substr(0, 15));
      }

      return getLocalDateTimeFromUnixTimeMiliSeconds(time);
    }
    return getLocalDateTimeFromUnixTimeSeconds(time);
  };

  const getUnitTime = (time: number) => {
    if (time > 0) {
      const length = `${time}`.length;
      if (length < 12) {
        return SECONDS;
      }
      if (length < 15) {
        return MILISECONDS;
      }

      if (length < 18) {
        return MICROSECONDS;
      }

      return NANOSECONDS;
    }
    const length = `${time}`.length;
    if (length < 13) {
      return SECONDS;
    }
    if (length < 16) {
      return MILISECONDS;
    }

    if (length < 19) {
      return MICROSECONDS;
    }

    return NANOSECONDS;
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-2xl text-blue-900 my-2">
          Convert epoch to human-readable date and vice versa
        </h1>
        <div className="text-lg">
          <input
            className="bg-white p-1 mr-1.5"
            ref={textInput}
            maxLength={20}
            pattern="[0-9]*"
            type="number"
            onKeyDown={onChangeEpochTime}
          />
          <button className="bg-yellow-100 p-1" onClick={onSubmitEpochTime}>
            Timestamp to human date
          </button>

          <button className="bg-yellow-100 p-1" onClick={() => setEpochTime(0)}>
            Reset
          </button>
        </div>
        <div className="my-5">
          Supports Unix timestamps in seconds, milliseconds.
        </div>
        {!!epochTime && (
          <div>
            <div>
              Assuming that this timestamp is in{' '}
              <strong>{getUnitTime(epochTime)}</strong>:
            </div>
            <div>
              <strong>GMT:</strong> {getGMTTime(epochTime)}
            </div>
            <div>
              <strong>Your time zone:</strong>
              {getLocalTime(epochTime)}
            </div>
          </div>
        )}

        <div className="my-8">
          <DateForm />
        </div>
      </div>
    </>
  );
}
