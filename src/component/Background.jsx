import React from 'react';
import background from '../assets/bg.png';
import r from '../assets/Rect.png';

const myStyle = {
    position: "absolute",
width: "378px",
height: "47px",
left: "200px",
top: "358px",

fontFamily: 'IBM Plex Sans',
fontStyle: "normal",
fontWeight: "700",
fontSize: "36px",
lineHeight: "47px",
color : '#FFFFFF'
}

const myStyle2 = {
    position: "absolute",
width: "327px",
height: "23px",
left: "200px",
top: "409px",

fontFamily: 'IBM Plex Sans',
fontStyle: "normal",
fontWeight: "400",
fontSize: "18px",
lineHeight: "23px",
color : '#FFFFFF'
}


const Background = () => {
  return (
    <div >
      <div>
        <div className='background' style={{backgroundImage : `url(${background})`, width: '1440px', height: '440px'}}>
            <div style={{backgroundImage : `url(${r})`, width: '1440px', height: '440px'}}>
                {/* <img src={r} alt=''/> */}
                <h1 style={myStyle}>Computer Engineering</h1>
                <p style={myStyle2}>142,765 Commputer Engineers follow this</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Background
