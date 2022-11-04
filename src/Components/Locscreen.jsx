import React from 'react';

// Renderse lockscreen
class LockScreen extends React.Component {
    render() {
        return (
            <div className="music-song">
                <div className="lock-display" style={styles.settings} >
                    <i className="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div className="bottom-div-lock">
                    <h3>Press Centre Button to unlock!</h3>
                </div>
            </div>
        )
    }
//First status of show screen of unlock
}
const styles = {
    settings : {
    width : '100%',
    height : '100%',
   backgroundImage:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg",
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
    
    

export default LockScreen;