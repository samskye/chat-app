import React, { memo } from 'react';
import { ButtonToolbar, Icon } from 'rsuite';
import Link from 'react-dom';
import { useCurrentRoom } from '../../../context/current-room.context';
import { isImportAttribute } from '@babel/types';
import { useMediaQuery } from '../../../misc/custom-hooks';
import RoomInfoBtnModal from './RoomInfoBtnModal';

const Top = () => {
  const name = useCurrentRoom(v => v.name);
  const isMobile = useMediaQuery('(max-width: 992px)');

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h4>
          <Icon
            componentClass={Link}
            icon="arrow-circle-left"
            size="2x"
            to="/"
            className={
              isMobile ? 'd-inline p-0 mr-2 text-blue link-unstyled' : 'd-none'
            }
          />

          <span className="text-disappear">{name}</span>
        </h4>
        <ButtonToolbar className="ws-nowrap">todo</ButtonToolbar>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <span>todo</span>
        <RoomInfoBtnModal />
      </div>
    </div>
  );
};

export default memo(Top);
