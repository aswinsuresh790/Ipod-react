import React from 'react';
import Game from './Game';
import Setting from './Setting';
import Music from './Music';

import LockScreen from './Locscreen';
import Menu from './Menu'
import Songs from './song'
import Playing from './Playing';


class Display extends React.Component{
    render(){
        const{ active,songItems, menuItems,musicItems,musicUrl,artist,songImgUrl,musicImage, currentMenu,songIndex, songUrl,playing,audio}=this.props
        return (
            
<div className='screen-size'>
{currentMenu===-2&& <LockScreen/>  } 
{currentMenu===-1 && <Menu songImgUrl={songImgUrl} menuItems={menuItems} active={active} /> }
{currentMenu===1&& <Music active={active} musicItems={musicItems}/>}
{currentMenu=== 2&& <Game/>} 
{currentMenu===3&& <Setting/>  } 
{currentMenu ===4 && <Songs songItems={songItems} active={active} />} 

{(currentMenu ===0 ||currentMenu===7) && <Playing songImgUrl={songImgUrl}  musicImage={musicImage} audio={audio} songUrl={songUrl} playing={playing} songIndex={songIndex} songItems={songItems} />}



</div>
)}}
        export default  Display;