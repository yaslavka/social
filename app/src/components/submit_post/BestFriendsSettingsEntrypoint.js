import React from "react";
import {Link} from "react-router-dom";

const BestFriendsSettingsEntrypoint=({frinds, setFrinds})=>{
    return(
        <>
            <div className={"BestFriendsSettingsEntrypoint"}
                 onMouseOver={()=>setFrinds(true)}
                 onMouseLeave={()=>setFrinds(false)}
                 style={{zIndex:`${frinds?"100":""}`}}>
                <div className="BestFriendsSettingsEntrypoint__layout">
                    <Link to={"#"} className="BestFriendsSettingsEntrypoint__button"
                          /*onClick="window.openPostPrivacyModal &amp;&amp; window.openPostPrivacyModal('bestFriendsEntrypoint');"*/>
                        <span className="BestFriendsSettingsEntrypoint__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <path fill="currentColor" d="M10 10.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"/>
                                <path fill="currentColor" fillRule="evenodd" d="M6 7.03V5a4 4 0 0 1 8 0v2.03c.59.03 1 .12 1.36.3a3 3 0 0 1 1.31 1.3c.33.65.33 1.49.33 3.17v1.4c0 1.68 0 2.52-.33 3.16a3 3 0 0 1-1.3 1.31c-.65.33-1.49.33-3.17.33H7.8c-1.68 0-2.52 0-3.16-.33a3 3 0 0 1-1.31-1.3C3 15.71 3 14.87 3 13.2v-1.4c0-1.68 0-2.52.33-3.16a3 3 0 0 1 1.3-1.31c.36-.18.78-.27 1.37-.3Zm4-4.53A2.5 2.5 0 0 1 12.5 5v2h-5V5A2.5 2.5 0 0 1 10 2.5Zm-2.2 6c-.86 0-1.42 0-1.85.04-.4.03-.56.09-.63.12a1.5 1.5 0 0 0-.66.66c-.03.07-.1.22-.12.63-.04.43-.04.99-.04 1.85v1.4c0 .86 0 1.42.04 1.85.03.4.09.56.12.63.15.28.38.51.66.66.07.03.22.1.63.12.43.04.99.04 1.85.04h4.4c.86 0 1.42 0 1.85-.04.4-.03.56-.09.63-.12a1.5 1.5 0 0 0 .66-.66c.03-.07.1-.22.12-.63.04-.43.04-.99.04-1.85v-1.4c0-.86 0-1.42-.04-1.85-.03-.4-.09-.56-.12-.63a1.5 1.5 0 0 0-.66-.66c-.07-.03-.22-.1-.63-.12-.43-.04-.99-.04-1.85-.04H7.8Z" clipRule="evenodd"/>
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className="tt_w tt_black toleft tt_up"
                     style={{
                         display:`${frinds?"block":"none"}`,
                         position: "absolute",
                         opacity: "1",
                         top: "28.9922px",
                         left: "-112.469px",
                         pointerEvents: "auto"
                     }}>
                    <div className="tt_text">Выбор близких друзей</div>
                </div>
            </div>
        </>
    )
}
export default BestFriendsSettingsEntrypoint