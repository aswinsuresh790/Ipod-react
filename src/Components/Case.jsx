import React from 'react';
import "../css/case.css"

import Wheel from './wheel';
import Display from './Display'

// This component is the outer case of iPod it does nothing special just renders display and wheel component
class Case extends React.Component {
    render() {
        const {active,updateActiveMenu, currentMenu,musicImage, changeMenuBackward,changeMenuForward, menuItems, musicItems,togglePlayPause, songItems,playing, songIndex,theme, audio, songUrl, songImgUrl, seekSongForward, seekSongReverse, wheelColor } = this.props;
        return (
            <div className="case-container"> 
                <div className="case">
                    <Display active={active} songIndex={songIndex} playing={playing} musicItems={musicItems} menuItems={menuItems} currentMenu={currentMenu} songItems={songItems} audio={audio} songUrl={songUrl} songImgUrl={songImgUrl} musicImage={musicImage} />
                    <Wheel theme={theme} active={active} musicItems={musicItems} musicImage={musicImage} menuItems={menuItems} currentMenu={currentMenu} changeMenuForward={changeMenuForward} changeMenuBackward={changeMenuBackward} updateActiveMenu={updateActiveMenu} togglePlayPause={togglePlayPause} seekSongForward={seekSongForward} seekSongReverse={seekSongReverse} wheelColor={wheelColor} />
                </div>
            </div>
        )
    }
}
//This ipod Case consist of a screen of display and controller
export default Case;