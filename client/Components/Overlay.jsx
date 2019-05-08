import React from 'react';
import TopMenu from './TopMenu';
import Sidebar from './Sidebar';

const Overlay = (props) => {
  const {
    toggleSidebar,
    colorChange,
    visible,
    changeType,
    currentType,
    root,
  } = props;

  return (
    <div className="overlay">
      <TopMenu toggleSidebar={toggleSidebar} colorChange={colorChange}/>
      <Sidebar
        visible={visible}
        type={currentType}
        changeType={changeType}
        root={root}
      />
    </div>
  );
};

export default Overlay;
