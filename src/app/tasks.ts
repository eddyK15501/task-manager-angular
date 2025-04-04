export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'AI Conference',
    day: 'March 18th at 10:00am',
    reminder: true,
  },
  {
    id: 2,
    text: 'Web Seminar',
    day: 'March 19th at 6:00pm',
    reminder: false,
  },
  {
    id: 3,
    text: 'Job Interview',
    day: 'March 23th at 11:00am',
    reminder: true,
  },
  {
    id: 4,
    text: 'Earnings Report',
    day: 'March 26th at 4:00pm',
    reminder: true,
  },
  {
    id: 5,
    text: 'Car Wash',
    day: 'April 1st at 3:00pm',
    reminder: false,
  },
];
