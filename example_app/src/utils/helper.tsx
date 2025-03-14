import { DateTime } from 'luxon';
import { faker } from '@faker-js/faker';

const colors: string[] = [
  'indigo',
  'blue',
  'orange',
  'red',
  'pink',
  'crimson',
  'dodgerblue',
  'brown',
  'purple',
  'tomato',
  'salmon',
  'gray',
];

const generateId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 12; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export const generateDemoEvents = (
  date: DateTime = DateTime.now(),
  count = 250
) => {
  const events: any = [];

  const start: any = date
    .set({ day: 1 })
    .minus({ month: 2 })
    .toFormat('yyyy-MM-dd');
  const end: any = date
    .set({ day: 28 })
    .plus({ month: 2 })
    .toFormat('yyyy-MM-dd');

  for (let i = 1; i < count; i += 1) {
    const dateStart: any = faker.date.between({from: start, to: end});

    const hour: number = Math.floor(Math.random() * 23) + 1;
    const minute: number = Math.floor(Math.random() * 40) + 1;
    const minuteDuration: number = Math.floor(Math.random() * 120) + 30;

    const startDate: DateTime = DateTime.fromJSDate(dateStart).set({
      hour: hour,
      minute: minute,
    });
    const endDate: DateTime = startDate.plus({ minute: minuteDuration });

    const event: any = {
      id: generateId(),
      startAt: startDate.toUTC().toString(),
      endAt: endDate.toUTC().toString(),
      summary: faker.commerce.department(),
      color: colors[Math.floor(Math.random() * colors.length - 1) + 1],
      allDay: endDate.day !== startDate.day,
      // style: {
      //   textDecoration: 'line-through',
      //   border: 'solid 1px red',
      //   background: 'white',
      //   color: 'black',
      // },
    };

    events.push(event);
  }

  return events;
};
