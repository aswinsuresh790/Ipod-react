import React from "react";
class Music extends React.Component{
render(){
    const{active,musicItems}=this.props
    return(
        <div  className="music-section">
            <h6>Music</h6>
            <ul>
            

                { musicItems.map((element, index)=>{
                            return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li key={index}>&nbsp;{element}</li>
                        })}
                </ul>
                



               
        </div>
    )
}

}
export default Music