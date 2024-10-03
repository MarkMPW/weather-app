
export type WeeklyDataType = {
  day: string;
  imgUrl: string;
  highest: number;
  lowest: number;
};

export const WeeklyData: WeeklyDataType[] = [
  {
    day: 'San',
    imgUrl: '/assets/cloudy.png',
    highest: 15,
    lowest: -3
  },
  {
    day: 'Mon',
    imgUrl: '/assets/sunny.png',
    highest: 20,
    lowest: 10
  },
  {
    day: 'Tue',
    imgUrl: '/assets/rainy.png',
    highest: 20,
    lowest: 10
  },
  {
    day: 'Wed',
    imgUrl: '/assets/snow.png',
    highest: 14,
    lowest: -8
  },
  {
    day: 'Thu',
    imgUrl: '/assets/sunny.png',
    highest: 10,
    lowest: 10
  },
  {
    day: 'Fri',
    imgUrl: '/assets/rainy.png',
    highest: 11,
    lowest: -6
  },
  {
    day: 'Sat',
    imgUrl: '/assets/rainy.png',
    highest: 20,
    lowest: 9
  },
]
