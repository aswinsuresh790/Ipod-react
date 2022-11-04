import React from 'react';

class Setting extends React.Component{

    render(){
       
        return (
            
<div style={styles.settings} >

<div style={{width : '100%' , height : '90%'}}>
   <img style={styles.image} src="https://previews.123rf.com/images/vectorv/vectorv1906/vectorv190614505/124845983-white-gear-icon-isolated-on-white-background-cogwheel-gear-settings-sign-cog-symbol-orange-circle-bu.jpg" alt="setting" />
</div>

</div>
);
}
// This page will display the setting wallpaper
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
    
    
          
export default  Setting;