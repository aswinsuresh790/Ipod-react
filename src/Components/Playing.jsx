import React from   'react';
import '../css/Playing.css'
import {FaPlay,FaPause} from 'react-icons/fa';

class Playing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
        }
        this.intervalId = "";

    }
     // logic for updating the current music playbak
     componentDidMount() {
        const { audio } = this.props;
        this.setState({ currentTime: audio.currentTime });
        this.intervalId = setInterval(() => {
            this.setState({ currentTime: this.props.audio.currentTime });
        }, 100);
    }


     // Clear interval for that same thing
     componentWillUnmount() {
        clearInterval(this.intervalId);
    }


render(){
    const { songItems, playing, songIndex, audio,musicItems, songImgUrl,musicImage } = this.props; //passing as props from  App for data passing
    var currentTimeStatus = Math.floor(this.state.currentTime / 60) + ":" + Math.floor(this.state.currentTime % 60);
    var durationTimeStatus=Math.floor(audio.duration/60)+ ":"+  Math.floor(audio.duration%60);
    const percentageComplete = { width: (this.state.currentTime / audio.duration * 100) + "%" };
    //to get the duration time of song and total time of song
    if(durationTimeStatus==="NaN:NaN"){
        durationTimeStatus="0:00";
    }   
    //exception case
    if(Math.floor(this.state.currentTime%60<10)){
        currentTimeStatus = Math.floor(this.state.currentTime / 60) + ":0" + Math.floor(this.state.currentTime % 60);
    }   //avoid single digit
    return(
    <div className="now-playing-container" styles={styles.settings} >
    <div className="song-details">
        
        <img src={musicImage[songIndex]} alt="songImg"></img>
        <div>
        
        <h1>{songItems[songIndex]}</h1>
        {playing && <h6 className="play-pause-nav"><FaPlay/>
      
            Playing</h6>}
        {!playing && <h6 className='play-pause-nav'><FaPause/> Paused</h6>}
        </div>
                </div>
        <div className="status">
            {currentTimeStatus}
            <div id="progress">
                        <div style={percentageComplete} id="progress-bar"></div>
            </div>
            {durationTimeStatus}
                </div>
            </div>
        


    )
    
    
}


}


const styles = {
    settings : {
    width : '100%',
    height : '100%',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    flexWrap : 'wrap'
    },
    image : {
    width:'280px',
    height:'250px',
    alignSelf : 'center'
    },
    titleBar : {
    height:'10%',
    width:'100%',
    borderRadius:'12px 0 0 0',
    backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
    borderBottom: '1px solid #6c757d',
    padding : '1px 5px 10px 8px',
    display:'flex',
    flexDirecton : 'row',
    justifyContent : 'space-between'
    
    },
    battery :{
    width : '20px',
    height: '20px',
    }
    }
export default Playing;