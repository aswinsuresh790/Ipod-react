import React from 'react';
import Case from './Components/Case';
import './App.css';

import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import song1 from './Static/songs/1.mp3';
import song2 from  './Static/songs/Confetti  Ghost.mp3';
import song3 from  './Static/songs/3.mp3';
import song4 from  './Static/songs/4.mp3';
import song5 from  './Static/songs/5.mp3';
import Wallpaper1 from './Static/7461.jpg';
import songimg1  from './images/nowplay.png';
import songimg2 from  './images/2.jpg';
import songimg3 from './Static/positivemind.jpg';
import songimg4 from  './images/mallipoo.jpg'
import songimg5 from './images/srivalli.jpg';




class App extends React.Component{
  constructor(){
    super()
    this.state={
     active:0,
     menuItems: ["Now Playing", "Music", "Games", "Settings"], //menu Items//menu 
      musicItems: ["All Songs", "Artist", "Albums"], //Items in music
     
      musicUrl:[song1,song2,song3,song4,song5] , //music link
      musicImage:[songimg1,songimg2,songimg3,songimg4,songimg5],          //music  thumbnail image 
      songItems:["Kesariya  ", "Billie Eilish  ", "Confetti  Ghost","Mallipoo ","Srivali "],   
      artist:[song3,song4],
      album:[song3,song4], 
      lengthMenuKey: { "-1": 3, 1: 2, 4: 4, 8: 4, 3: 2, 9: 3 ,10:2},  //length of a particular menu
      menuMapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] }, //which menu can be rendered by key menu

      songIndex: 0, //current song
      songImgUrl:[songimg1,songimg2,songimg3,songimg4,songimg5],
      songUrl: song1, //current song url
      playing: false, //playing or not
      currentMenu:-2,
      theme: "rgb(210, 160, 110)", //current body theme
      wallpaperItems: [Wallpaper1],
      audio: new Audio(song1), //current audio file
      navigationStack: [], //Used for navigation forward and backward
      //current body theme

  }
  }

// function to long press forward button to  next audio when playing audio
seekSongForward = (e) => {
  if (this.state.currentMenu === -2) {
    return;
  }
  if (this.state.playing === false) {
    return;
  }
  if (e.detail.interval < 250) {
    this.state.audio.pause();
    let songIndex = this.state.songIndex;
    if (songIndex === this.state.musicUrl.length - 1) {
      songIndex = 0;
    } else {
      songIndex++;
    }
    const songUrl = this.state.musicUrl[songIndex];
    const songImgUrl = this.state.musicImage[songIndex];
    this.setState(
      {
        songIndex: songIndex,
        songImgUrl: songImgUrl,
        songUrl: songUrl,
        audio: new Audio(songUrl),
      },
      () => {
        this.state.audio.play();
      }
    );
  } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
    const interval = e.detail.interval / 100;
    this.setState((prevState) => {
      prevState.audio.currentTime += interval;
      return prevState;
    });
  }
};

 // FUNCTION FOR :long press the backward button to play previous audio 
 seekSongReverse = (e) => {
  if (this.state.currentMenu === -2) {
    return;
  }
  if (this.state.playing === false) {
    return;
  }
  console.log(e.detail.interval);
  if (e.detail.interval < 250) {
    this.state.audio.pause();
    let songIndex = this.state.songIndex;
    if (songIndex === 0) {
      songIndex = this.state.musicUrl.length - 1;
    } else {
      songIndex--;
    }
    const songUrl = this.state.musicUrl[songIndex];
    const songImgUrl = this.state.musicImage[songIndex];
    this.setState(
      {
        songIndex: songIndex,
        songImgUrl: songImgUrl,
        songUrl: songUrl,
        audio: new Audio(songUrl),
      },
      () => {
        this.state.audio.play();
      }
    );
  } else if (e.detail.interval > 250 && e.detail.interval < 10000) {
    const interval = e.detail.interval / 100;
    this.setState((prevState) => {
      prevState.audio.currentTime -= interval;
      return prevState;
    });
  }
};

// FUNCTION FOR : TOGGLE SONG PLAY AND PAUSE
togglePlayPause = () => {
  if (this.state.currentMenu === -2) {
    return;
  }
  if (this.state.playing === true) {
    this.setState({ playing: false });
    this.state.audio.pause();
  }
  else {
    this.setState({ playing: true });
    this.state.audio.play();
  }
}

 // FUNCTION FOR : UPDATE ACTIVE MENU WHILE ROTATING ON THE TRACK-WHEEL
 updateActiveMenu = (direction, menu) => {

  if (menu !== -1 && menu !== 1 && menu !== 4 && menu !== 8 && menu !== 3 && menu !== 9 && menu !== 10) {
    return;
  }
  let min = 0;
  let max = 0;

  max = this.state.lengthMenuKey[menu];

  if (direction === 1) {
    if (this.state.active >= max) {
      this.setState({ active: min })
    } else {
      this.setState({ active: this.state.active + 1 })
    }
  } else {
    if (this.state.active <= min) {
      this.setState({ active: max })
    } else {
      this.setState({ active: this.state.active - 1 })
    }
  }
}

// FUNCTION FOR : CHANGE THE THEME OF iPod BODY
setTheme = (id) => {
  let theme ="";
  if (id === 0) {
    theme= "#FDDCD7";
  }
  else if (id === 1) {
    theme= "rgb(210, 210, 210)"
  } else if (id === 2) {
    theme= "#F5DDC5";
  } else if (id === 3) {
    theme="#D1CDDA";
    
  } else if (id === 4) {
    theme="black"
  }
  this.setState({ theme:theme , noty:true, notifyText:"Theme Changed"})
  return;
}


// FUNCTION FOR : CHANGE COLOR OF WHEEL
setWheelColor = (id) => {
  let wheelColor ="";
  if (id === 0) {
    wheelColor= "#212121";
  }
  else if (id === 1) {
    wheelColor= "white";
  } else if (id === 2) {
    wheelColor = "#3E2723";
  } else if (id === 3) {
    wheelColor= "#3D5AFE";
  }
  this.setState({ wheelColor: wheelColor, noty:true, notifyText:"Wheel Color Changed"})
  return;
}

// FUNCTION FOR : SET WALLPAPER OF iPod Body
setWallpaper = (id) => {
  this.setState({ wallpaper: id , noty:true, notifyText:"Wallpaper Changed"});
  return;
}

// FUNCTION FOR : CHANGE PLAYING MUSIC
chagePlayingSongFromMusicMenu = (id, navigationStack) => {
  const songUrl = this.state.musicUrl[id];
  const songImgUrl = this.state.musicImage[id];
  this.state.audio.pause();
  this.setState({ currentMenu: 7, songImgUrl:songImgUrl, songUrl: songUrl, navigationStack: navigationStack, active: 0, playing: true, songIndex: id, audio: new Audio(songUrl)}, () => {
    this.state.audio.play();
  });
  return;
}

// FUNCTION FOR : CHANGE MENU BACKWARDS on PRESS OF CENTER BUTTON
changeMenuBackward = () => {

  const navigationStack = this.state.navigationStack.slice();
  if (this.state.currentMenu === -2) {
    return;
  }
  else {
    const prevId = navigationStack.pop();
    this.setState({ currentMenu: prevId, navigationStack: navigationStack, active: 0 });
    return;
  }

}

// FUNCTION FOR : CHANGE MENU FORWARD on PRESS OF CENTER BUTTON using NAVIGATION STACK
changeMenuForward = (id, fromMenu) => {

  const navigationStack = this.state.navigationStack.slice();

  if (fromMenu !== -2 && fromMenu !== -1 && fromMenu !== 1 && fromMenu !== 4 && fromMenu !== 3 && fromMenu !== 8 && fromMenu !== 9 && fromMenu !== 0 && fromMenu !== 7 &&fromMenu !== 10) {
    return;
  }

  if (fromMenu === -2) {
    navigationStack.push(this.state.currentMenu);
    this.setState({ currentMenu: -1, navigationStack: navigationStack, active: 0 });
    return;
  }

  if (fromMenu === -1) {
    navigationStack.push(this.state.currentMenu);
    this.setState({ currentMenu: id, navigationStack: navigationStack, active: 0 });
    return;
  }

  if (fromMenu === 7 || fromMenu === 0) {
    this.togglePlayPause();
    return;
  }

  if (fromMenu === 8) {
    this.setTheme(id);
    return;
  }


  if (fromMenu === 9) {
    this.setWheelColor(id)
    return;
  }

  if (fromMenu === 10) {
    this.setWallpaper(id)
    return;
  }

  navigationStack.push(this.state.currentMenu);

  if (fromMenu === 4) {
    this.chagePlayingSongFromMusicMenu(id, navigationStack, fromMenu);
    return;
  }

  const currentMenuID = this.state.menuMapping[fromMenu][id];
  this.setState({ currentMenu: currentMenuID, navigationStack: navigationStack, active: 0 });

}

// FUNCTION FOR : SET NOTIFICATION AS FALSE AFTER SENDING NOTIFICATION
setNoty=()=>{
  this.setState({noty:false});
  return;
}





render() {
  const{ active, menuItems,musicItems,songItems,musicUrl,musicImage,artist, currentMenu,songIndex, songUrl,songImgUrl,playing,audio}=this.state;
return (
  
  <div className='App'> 

  <Case active={active}songIndex={songIndex} musicItems={musicItems} menuItems={menuItems}  currentMenu={currentMenu} musicImage={musicImage} musicUrl={musicUrl} arttist={artist}  songItems={songItems} playing={playing}  audio={audio} songUrl={songUrl}  songImgUrl={songImgUrl} seekSongForward={this.seekSongForward} seekSongReverse={this.seekSongReverse}    changeMenuForward={this.changeMenuForward} changeMenuBackward={this.changeMenuBackward} updateActiveMenu={this.updateActiveMenu} togglePlayPause={this.togglePlayPause} />
      
  </div>
)



}


}
export default App;
