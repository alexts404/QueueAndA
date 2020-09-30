import React, { createContext, useEffect, useState } from 'react';
import { Talk } from '../interfaces/Talk';
import { fetchTalks } from '../services/apiService';

type NullTalks = null | Talk[];

export const TalksContext = createContext<{
  talks: NullTalks;
}>({
  talks: null,
});

interface TalksProviderProps {}

export const TalksProvider: React.FC<TalksProviderProps> = ({ children }) => {
  const [talks, setTalks] = useState<NullTalks>(null);

  useEffect(() => {
    fetchTalks().then((fetchedTalks) => {
      setTalks(fetchedTalks);
    });
  }, []);

  return (
    <TalksContext.Provider
      value={{
        talks,
      }}
    >
      {children}
    </TalksContext.Provider>
  );
};
