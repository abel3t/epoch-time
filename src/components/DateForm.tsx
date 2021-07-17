import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { unixTimeFromDate } from 'utils/time';

const TIME_TYPE = {
  GMT: 'GMT',
  LOCAL: 'LOCAL',
};

export default function DateForm() {
  const { register, handleSubmit } = useForm();

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [type, setType] = useState(TIME_TYPE.GMT);

  const [epochTime, setEpochtime] = useState(0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const date = new Date();
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setHour(date.getHours());
    setMinute(date.getMinutes());
    setSecond(date.getSeconds());
  }, []);

  const onSubmit = (data: any) => {
    setDay(data.day);
    setMonth(data.month);
    setYear(data.year);
    setHour(data.hour);
    setMinute(data.minute);
    setSecond(data.second);
    setType(data.type);

    setEpochtime(
      unixTimeFromDate(
        new Date(`${month}/${day}/${year} ${hour}:${minute}:${second}`)
      )
    );
  };

  const Input = ({
    label,
    name,
    register,
    required,
    maxLength,
    className,
    value,
    max,
  }: any) => (
    <>
      <div className={`${className}`}>
        <div className="text-black">{label}</div>
        <input
          {...register(name, { required, maxLength, value, max })}
          type="number"
          className={`${className} p-1`}
        />
      </div>
    </>
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid grid-rows-2 grid-flow-col w-4/5"
      >
        <div className="row-span-2 grid grid-rows-2 grid-flow-col gap-0 w-1/6">
          <Input
            label="Year"
            name="year"
            register={register}
            value={year}
            max={3100}
            required
            className="w-14 row-start-1 row-span-2"
            maxLength={4}
          />
          <div className="mx-1 row-start-2 row-span-1">
            <span>-</span>
          </div>
          <Input
            label="Month"
            name="month"
            register={register}
            value={month}
            required
            className="w-12 row-start-1 row-span-2"
            maxLength={2}
          />
          <div className="mx-1 row-start-2 row-span-1">
            <span>-</span>
          </div>
          <Input
            label="Day"
            name="day"
            register={register}
            value={day}
            required
            className="w-12 row-start-1 row-span-2"
            maxLength={2}
          />
        </div>

        <div className="row-span-2 grid grid-rows-2 grid-flow-col gap-0 w-1/5">
          <Input
            label="Hr"
            name="hour"
            register={register}
            value={hour}
            required
            className="w-12 row-start-1 row-span-2"
            maxLength={4}
          />
          <div className="mx-2 row-start-2 row-span-1">
            <span>:</span>
          </div>
          <Input
            label="Min"
            name="minute"
            register={register}
            value={minute}
            required
            className="w-12 row-start-1 row-span-2"
            maxLength={2}
          />
          <div className="mx-2 row-start-2 row-span-1">
            <span>:</span>
          </div>
          <Input
            label="Sec"
            name="second"
            register={register}
            value={second}
            required
            className="w-12 row-start-1 row-span-2"
            maxLength={2}
          />

          <div className="ml-2 row-start-2 row-span-1">
            <select
              {...register('type', { value: TIME_TYPE.GMT })}
              className="p-1"
            >
              <option value={TIME_TYPE.GMT}>GMT</option>
              <option value={TIME_TYPE.LOCAL}>Local Time</option>
            </select>
          </div>
        </div>

        <button
          className="row-start-2 row-span-1 bg-yellow-100 p-1 w-3/4"
          type="submit"
        >
          Human date to Timestamp
        </button>
      </form>

      <div className="mt-5">
        {isValid && !!epochTime && (
          <div>
            <div>
              <strong>Epoch timestamp:</strong> {epochTime}
            </div>

            <div>
              <strong>Epoch timestamp in milliseconds:</strong>{' '}
              {epochTime * 1000}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
