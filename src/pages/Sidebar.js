import React from 'react';
import DashboardToggle from '../components/dashboard/DashboardToggle';
import CreateRoomBtnModal from '../components/CreateRoomBtnModal';

const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToggle />
        <CreateRoomBtnModal />
      </div>
      bottom text chatroom eement
    </div>
  );
};

export default Sidebar;
