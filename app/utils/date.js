import format from 'dateformat';

export function formatDate(unixtime) {
  return format(new Date(unixtime * 1000), 'HH:MM');
}
