import React from 'react';

import '../css/Menu.css';
import Game from '../images/game.jpg';
import Setting from '../images/settings.png';
import Music from '../images/music.jpg';
import Now from '../images/spotify.jpg';

class Menu extends React.Component {
    render() {
        const { active,menuItems, songImgUrl} = this.props;
        return (

            <div className="menu-container">
                <div className="menu">
                    
                    <ul>
                    
                        {menuItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li key={index}>&nbsp;{element}</li>
                        })}
                    </ul>
                </div>
                <div className="leaf">
                
                {active === 0 && <img className="leaf-img" src={Now} alt=""></img>}
                    {active === 1 && <img className="leaf-img" src={Music} alt=""></img>}
                    {active === 2 && <img className="leaf-img" src={Game} alt=""></img>}
                    {active === 3 && <img className="leaf-img" src={Setting} alt=""></img>}
                </div>
            </div>
        )
    }
}
//Menu consist of various data it can take one at time by using active state 
//action state working based on index value

export default Menu;