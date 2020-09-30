import { Talk } from '../interfaces/Talk';

const talks: Talk[] = [
  {
    conference: {
      id: '1',
      name: "The world's greatest conference",
      organized_by: 'NN',
      location: {
        lat: 52.5125277,
        long: 13.387167799999999,
      },
    },
    session: {
      id: '1',
      title: 'Interesting talk',
      speakers: ['interesting speaker'],
      date: {
        from: Date.now() - 10000,
        to: Date.now() + 10000000,
      },
    },
  },
  {
    conference: {
      id: '1',
      name: "The world's greatest conference",
      organized_by: 'NN',
      location: {
        lat: 52.5125277,
        long: 13.387167799999999,
      },
    },
    session: {
      id: '2',
      title: 'sLightlY Weird Talk',
      speakers: ['funny speaker'],
      date: {
        from: Date.now() - 10000,
        to: Date.now() + 10000000,
      },
    },
  },
  {
    conference: {
      id: '1',
      name: "The world's greatest conference",
      organized_by: 'NN',
      location: {
        lat: 52.5125277,
        long: 13.387167799999999,
      },
    },
    session: {
      id: '3',
      title: 'sLightlY old Talk',
      speakers: ['ancient speaker'],
      date: {
        from: Date.now() + 150000,
        to: Date.now() + 9000000,
      },
    },
  },
  {
    conference: {
      id: '2',
      name: 'Second greatest conference',
      organized_by: 'MM',
      location: {
        lat: 41.3949022,
        long: 2.1979387,
      },
    },
    session: {
      id: '4',
      title: 'Great Talk',
      speakers: ['speaker A', 'speaker B'],
      date: {
        from: Date.now() + 1000000,
        to: Date.now() + 7000000,
      },
    },
  },
];

export default talks;
