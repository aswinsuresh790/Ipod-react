import React from 'react';
import "../css/Wheel.css"
import ZingTouch from 'zingtouch';
import {FaForward ,FaBackward,FaPlay,FaPause} from 'react-icons/fa';
// Render wheel
class Wheel extends React.Component {
    constructor() {
        super();
        this.angle = 0;
    }
     // control the wheel roatation action if rotation is more than 15 degrees and also check direction of rotation
     wheelControll = (e) => {
        const { updateActiveMenu, currentMenu } = this.props;

        if (e.detail.distanceFromOrigin === 0) {
            this.angle = e.detail.angle;
        }
        if (Math.abs(this.angle - e.detail.angle) > 300) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast < 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        } else if (Math.abs(this.angle - e.detail.angle) > 15) {
            this.angle = Math.abs(e.detail.angle);
            if (e.detail.distanceFromLast === 0) {
                return;
            }
            else if (e.detail.distanceFromLast > 0) {
                updateActiveMenu(1, currentMenu);
            } else {
                updateActiveMenu(0, currentMenu);
            }

        }
    }

   
    componentDidMount() {
        //once the component has been mounted
      
        //setting the wheel element as the active region for rotation
    
    //for initilizing the rotate event from menu

     const { changeMenuBackward ,togglePlayPause, seekSongForward, seekSongReverse} = this.props;
    const wheelControll = this.wheelControll;
    const wheel = document.getElementById("wheel");
    const activeRegion = ZingTouch.Region(wheel);
    const menuIcon = document.getElementById("menu");
    const playPause = document.getElementById("play-pause");
    const reverse = document.getElementById("reverse");
    const forward = document.getElementById("forward");
    const longTapGesture = new ZingTouch.Tap({
        maxDelay:10000,
        numInputs: 1,
        tolerance: 1,
    })

    activeRegion.bind(menuIcon, 'tap', function (e) {
        changeMenuBackward();
    });

    activeRegion.bind(wheel, 'rotate', function (e) {
        wheelControll(e);
    });


    activeRegion.bind(playPause, 'tap', function (e) {
        togglePlayPause();
    });

    activeRegion.bind(reverse, longTapGesture, function (e) {
        seekSongReverse(e);
    });

 
    
    activeRegion.bind(forward, longTapGesture, function (e) {
        seekSongForward(e);
    });



    }




    render() {
        const { changeMenuForward, active, currentMenu } = this.props;
        return (
            // wheels structure and values
            <div className="wheel-container" id="wheel-container">
                <div  className="wheel" id="wheel" >
                    <div className="controll" id="menu">
                        <div >MENU</div>
                    </div>
                    <div className="controll" id="forward">
               <FaForward/>
                    </div>
                    <div className="controll" id="play-pause">
                        <div>
                          <FaPlay/>
                            <FaPause/>
                        </div>
                    </div>
                    <div className="controll" id="reverse">
                        <FaBackward/>
                    </div>
                </div>

                <div className="blank" id="blank" onClick={() => { changeMenuForward(active, currentMenu) }}></div>
            </div>
        )
    }




}



export default Wheel;