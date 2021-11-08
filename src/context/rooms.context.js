import React, { createContext, useContext, useEffect, useState } from 'react';
import { database } from '../misc/firebase';
import { transformToArrayWithId } from '../misc/helpers';

const RoomsContext = createContext();

// component that provides us

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const roomListRef = database.ref('rooms');

    // real time listener using .on
    roomListRef.on('value', snap => {
      const data = transformToArrayWithId(snap.val);
      console.log('data ', data);
    });

    // unsub
    return () => {
      roomListRef.off();
    };
  }, []);

  return (
    <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
  );
};

export const useRooms = () => useContext(RoomsContext);
