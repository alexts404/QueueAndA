interface Location {
  lat: number;
  long: number;
}
interface Conference {
  id: string;
  name: string;
  organized_by: string;
  location: Location;
}

interface Session {
  id: string;
  title: string;
  speakers: string[];
  date: {
    from: number;
    to: number;
  };
  slot?: string;
}

export interface Talk {
  conference: Conference;
  session: Session;
}

export interface TalkList {
  [conference: string]: Talk[];
}

export interface TalksByConference {
  conference: Conference;
  data: Session[];
}
