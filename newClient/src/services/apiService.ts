import { TalksByConference, Talk } from '../interfaces/Talk';
import talks from '../data/talks';
import moment from 'moment';

// export const fetchTalks = async () => {
//   let sortedEvent: TalkList = {};
//   const sortedEvents = talks.reduce((acc, cur) => {
//     const conference = cur.conference;
//     acc[conference.id] === undefined
//       ? (acc[conference.id] = [cur])
//       : (acc[conference.id] = [...acc[conference.id], cur]);
//     return acc;
//   }, sortedEvent);

//   return sortedEvents;
// };

const calendarFormat = {
  sameDay: '[Today, ]HH:mm',
  nextDay: '[Tomorrow, ]HH:mm',
  lastDay: '[Yesterday],HH:mm',
  lastWeek: '[last] dddd,HH:mm',
  nextWeek: 'dddd[, HH:mm',
  sameElse: 'MMM Do,HH:mm',
};

const parseTalk: (talk: Talk) => Talk = (talk) => {
  const from = moment(talk.session.date.from).calendar(calendarFormat);
  const to = moment(talk.session.date.to).format('HH:mm');

  return {
    ...talk,
    session: {
      ...talk.session,
      slot: `${from} - ${to}`,
    },
  };
};

const talkFilter: (talk: Talk) => boolean = (talk) => {
  return talk.session.date.to > Date.now();
};

const talkSort: (a: Talk, b: Talk) => number = (a, b) => {
  return a.session.date.from < b.session.date.from ? -1 : 1;
};

export const fetchTalks = async () => {
  return talks
    .map((talk) => parseTalk(talk))
    .filter(talkFilter)
    .sort(talkSort);
};

export const fetchStructuredTalks = async () => {
  const sortedTalks = talks.sort((a, b) =>
    a.conference.id.localeCompare(b.conference.id),
  );
  let emptyTalks: TalksByConference[] = [];
  const talksByConference = sortedTalks.reduce((acc, talk) => {
    const conference = talk.conference;
    const lastIndex = acc.length - 1;
    if (lastIndex < 0 || acc[lastIndex].conference.id !== conference.id) {
      acc.push({ conference: talk.conference, data: [talk.session] });
    } else {
      acc[acc.length - 1].data.push(talk.session);
    }
    return acc;
  }, emptyTalks);
  return talksByConference;
};
