import React from "react";

const Posterbtn=({posterbtn, setPosterbtn})=>{
    return(
        <>
            <div className="poster__open-btn-wrapper poster " id="page_poster_btn"
                 onMouseOver={()=>setPosterbtn(true)}
                 onMouseLeave={()=>setPosterbtn(false)}
                 style={{zIndex:`${posterbtn?"100":""}`}}>
                <div className="poster__open-btn-layout" style={{zIndex:`${posterbtn?"100":""}`}}>
                    <div className="poster__open-btn poster"
                        /*onMouseEnter="showTooltip(this, { text: getLang('wall_poster_open_tt'), black: 1, shift: [10, 9] })"*//>
                    <div className="tt_w tt_black tt_down"
                         style={{
                             display:`${posterbtn? "block":"none"}`,
                             position: "absolute",
                             opacity: "1",
                             top: "-33.375px",
                             left: "-10px",
                             pointerEvents: "auto"
                         }}>
                        <div className="tt_text">Постер</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Posterbtn