import React from "react";
import {Link} from "react-router-dom";

const Settings=
    ({
         setings, setSetings,
        checkbox, setCheckbox,
    })=>{
    return(
        <>
            <div className="post_settings PostSettings" id="post_settings_btn">
                <span onMouseOver={()=>setSetings(true)} onClick={()=>setSetings(true)}
                    className="PostOption PostSettings__gear"
                    role={"button"} tabIndex="0" aria-label="Настройки публикации">
                    <span className="PostOption__iconWrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="m7.22 3.38.01-.03a4.15 4.15 0 0 1 .17-.48c.36-.82.95-1.29 1.86-1.36l.16-.01h1.21c1.05.03 1.74.6 2.1 1.7l.05.18.05.16c.01.07.03.14.06.2l.05.14.03.02.06-.02.11-.04.14-.06a5.36 5.36 0 0 1 .17-.08l.03-.01a4.23 4.23 0 0 1 .43-.15c.93-.27 1.68-.08 2.32.61l.1.13.72.88c.63.83.61 1.72 0 2.68l-.12.16-.1.14-.12.18-.06.1-.03.05v.02l.08.05.11.06.13.08c1.21.61 1.71 1.42 1.52 2.54l-.03.16-.22.92c-.13.59-.24.87-.67 1.25a2.13 2.13 0 0 1-1.05.52h-.01a3.92 3.92 0 0 1-.44.06l-.2.02H15.63l-.16.01-.16.02.01.13.01.08.03.15c.07.32.1.62.1.9a2.04 2.04 0 0 1-1.13 1.87l-.15.08-1.02.5c-.9.4-1.72.23-2.48-.47a3.93 3.93 0 0 1-.15-.14l-.13-.14-.11-.13a2.94 2.94 0 0 0-.15-.17l-.09-.08-.04-.04-.08.08-.09.1-.1.1c-.83.99-1.7 1.34-2.77.93l-.15-.06-.91-.45-.28-.13a1.78 1.78 0 0 1-.87-.92 2.15 2.15 0 0 1-.2-1.01v-.02c0-.19.02-.39.06-.6l.04-.2.04-.2.01-.15-.1-.02-.12-.01h-.15a4.14 4.14 0 0 1-.86-.1h-.01a2.05 2.05 0 0 1-1.61-1.53l-.05-.16-.25-1.1c-.2-1.03.2-1.82 1.19-2.41l.17-.1.15-.08.19-.1.13-.1v-.01l-.05-.1-.07-.1-.09-.13a5.2 5.2 0 0 1-.29-.42c-.54-.9-.53-1.72.05-2.52l.1-.14.72-.87c.68-.8 1.56-.96 2.64-.56l.18.08.16.07a2.9 2.9 0 0 0 .19.08l.12.04.03-.02.03-.07.04-.12.04-.15.04-.16Zm4.24.84.01.04.05.14a1.5 1.5 0 0 0 .75.83l.03.01a1.5 1.5 0 0 0 1.13.08l.06-.02a1.47 1.47 0 0 0 .07-.02l.12-.04.06-.03.13-.06.04-.01a2.7 2.7 0 0 1 .41-.16c.27-.08.41-.06.47-.04.06.01.16.05.32.22l.07.09.69.84c.13.18.15.29.15.35 0 .09-.03.27-.23.58l-.08.12-.08.1a4.4 4.4 0 0 0-.18.27l-.02.02-.06.1v.01l-.01.02-.03.05a1.5 1.5 0 0 0-.18 1.06v.01a1.5 1.5 0 0 0 .65.96l.08.05.05.04.1.06.07.03.13.08.04.01c.45.24.62.43.67.52.04.06.09.16.04.42l-.02.12-.2.89c-.07.28-.1.35-.11.37h-.01a.97.97 0 0 1-.1.11.65.65 0 0 1-.36.16 2.36 2.36 0 0 1-.25.04h-.16l-.13.01h-.08a4.55 4.55 0 0 0-.28.02l-.15.02a1.5 1.5 0 0 0-1.32 1.63l.01.12v.07l.02.09.01.06.03.15v.05c.06.23.07.42.07.55 0 .2-.04.3-.07.35a.72.72 0 0 1-.28.24l-.1.05-.98.47c-.2.1-.32.09-.38.07-.08-.01-.23-.06-.46-.28a2.38 2.38 0 0 1-.08-.07l-.1-.1-.09-.11a4.39 4.39 0 0 0-.21-.24l-.02-.01-.08-.09a1.43 1.43 0 0 0-.04-.03l-.04-.04a1.5 1.5 0 0 0-2.05.01l-.08.08a1.43 1.43 0 0 0-.04.04l-.1.1a1.53 1.53 0 0 0-.04.04l-.1.12-.03.03c-.31.37-.53.5-.64.53-.08.03-.19.05-.42-.03l-.1-.04-.86-.42-.24-.12a1.19 1.19 0 0 1-.13-.08v-.01a1.08 1.08 0 0 1-.09-.15.67.67 0 0 1-.06-.34l.04-.36.04-.18a4.38 4.38 0 0 0 .06-.35l.01-.15a1.5 1.5 0 0 0-.43-1.22 1.5 1.5 0 0 0-.86-.43h-.1a1.4 1.4 0 0 0-.06-.02h-.13a1.54 1.54 0 0 0-.06-.01h-.19a2.66 2.66 0 0 1-.55-.07c-.22-.05-.3-.11-.35-.15a.7.7 0 0 1-.17-.32L3.26 12l-.24-1.05c-.04-.22 0-.33.02-.38.04-.08.15-.23.46-.42l.13-.08.12-.06a4.43 4.43 0 0 0 .31-.18l.14-.09a1.5 1.5 0 0 0 .65-.94v-.02a1.5 1.5 0 0 0-.17-1.07l-.05-.09a1.49 1.49 0 0 0-.04-.06l-.07-.11a1.5 1.5 0 0 0-.04-.06l-.09-.12a1.52 1.52 0 0 0-.02-.03c-.31-.4-.37-.65-.38-.76 0-.06 0-.18.15-.4L4.2 6l.68-.83c.16-.18.27-.21.33-.23.1-.02.28-.03.63.1l.13.06.13.05a4.42 4.42 0 0 0 .31.13l.12.04a1.5 1.5 0 0 0 1.14-.05l.03-.02a1.5 1.5 0 0 0 .76-.82l.03-.08.02-.07.04-.12.02-.06.04-.14.01-.04.03-.12.12-.32c.1-.23.19-.32.24-.36.04-.03.13-.09.34-.1l.1-.01h1.14c.24.01.34.07.39.11.07.06.2.2.3.54l.05.14.03.13.1.3ZM10 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd"/>
                        </svg>
                    </span>
                </span>
                <div className={setings?"eltt post_settings_tooltip post_settings_tooltip_with_custom_btn eltt_arrow_size_normal eltt_align_center eltt_top eltt_vis":"eltt post_settings_tooltip post_settings_tooltip_with_custom_btn eltt_arrow_size_normal eltt_align_center eltt_top"}
                     onMouseLeave={()=>setSetings(false)}
                    id="" style={{display: `${setings? "block":"none"}`, left: "-106px", top: "-95.5px"}}>
                    <div className="eltt_arrow_back _eltt_arrow_back" style={{marginLeft: "107px"}}>
                        <div className="eltt_arrow"/>
                    </div>
                    <div className="eltt_content _eltt_content">
                        <div className={checkbox?"checkbox on":"checkbox"} id="mute_notifications" onClick={()=>setCheckbox(true)}
                             role={"checkbox"}
                             aria-checked="false" tabIndex="0">
                            Не отправлять уведомления
                        </div>
                        <Link to={"#"} className="Post__copyrightButton" /*onClick="cur.addMedia[9].copyrightShowBox();"*/>
                            <span className="Post__copyrightButtonIcon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M10 2c.41 0 .75.34.75.75v6.5h6.5a.75.75 0 0 1 0 1.5h-6.5v6.5a.75.75 0 0 1-1.5 0v-6.5h-6.5a.75.75 0 0 1 0-1.5h6.5v-6.5c0-.41.34-.75.75-.75z" fill="currentColor" fillRule="evenodd"/>
                                </svg>
                            </span>
                            <span className="Post__copyrightButtonText">
                                Указать источник
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Settings