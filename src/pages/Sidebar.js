import React, { useEffect, useRef, useState } from 'react';
import { Divider } from 'rsuite';
import DashboardToggle from '../components/dashboard/DashboardToggle';
import CreateRoomBtnModal from '../components/CreateRoomBtnModal';
import ChatRoomList from '../components/rooms/ChatRoomList';

const Sidebar = () => {
  const topSideBarRef = useRef();

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (topSideBarRef.current) {
      setHeight(topSideBarRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join Conversations</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;
