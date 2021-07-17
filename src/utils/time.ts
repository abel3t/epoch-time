import { getUnixTime, fromUnixTime, format } from 'date-fns';

import { vi } from 'date-fns/locale';

export const unixTime = () => getUnixTime(new Date());

export const getGMTDateTimeFromUnixTimeSeconds = (epochTime: number) =>
  format(fromUnixTime(epochTime), 'EEEE, dd MMMM yyyy HH:mm:ss');

export const getLocalDateTimeFromUnixTimeSeconds = (epochTime: number) =>
  format(fromUnixTime(epochTime), 'EEEE, dd MMMM yyyy HH:mm:ss OOOO', {
    locale: vi,
  });

export const getGMTDateTimeFromUnixTimeMiliSeconds = (epochTime: number) =>
  format(new Date(epochTime), 'EEEE, dd MMMM yyyy HH:mm:ss');

export const getLocalDateTimeFromUnixTimeMiliSeconds = (epochTime: number) =>
  format(new Date(epochTime), 'EEEE, dd MMMM yyyy HH:mm:ss OOOO', {
    locale: vi,
  });

export const unixTimeFromDate = (date: Date) => getUnixTime(date);
