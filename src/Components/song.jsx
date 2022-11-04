import React  from  'react';

//   this provide the list of song one  by one  like playlist with song font that you can select only songname
class Songs extends React.Component {
    render() {
        const {songItems,active} = this.props; 
        return (
            <div className="music-song">
                <h2>
                
                    Songs</h2>
                <ul>
                {songItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li  id="song1" key={index}>&nbsp;{element}</li>
                        })}
                </ul>
            </div>

        )




    }}
export default Songs;