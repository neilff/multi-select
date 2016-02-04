import { fromJS } from 'immutable';

const estimations = [
  {
    title: 'Size of Project',
    id: 'size',
    select: 'single',
    options: [
      {
        id: 'sm',
        label: 'Small',
        logo: 'src/image.jpg',
        value: 100,
      },
      {
        id: 'md',
        label: 'Medium',
        logo: 'src/image.jpg',
        value: 1000,
      },
      {
        id: 'lg',
        label: 'Large',
        logo: 'src/image.jpg',
        value: 10000,
      },
    ],
  },
  {
    title: 'Login Type',
    id: 'login',
    select: 'multi',
    options: [
      {
        id: 'linkedin',
        label: 'LinkedIn',
        logo: 'src/image.jpg',
        value: 100,
      },
      {
        id: 'google',
        label: 'Google',
        logo: 'src/image.jpg',
        value: 100,
      },
      {
        id: 'facebook',
        label: 'Facebook',
        logo: 'src/image.jpg',
        value: 100,
      },
    ],
  },
];

export default estimations;
