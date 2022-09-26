import React from "react";
import Button from "./Button";
import Settings from "./Settings";
import Posterbtn from "./Posterbtn";
import BestFriendsSettingsEntrypoint from "./BestFriendsSettingsEntrypoint";
import Addmedia from "./Addmedia";

const Submitpost =
    ({
         zIndex, setZIndex,
        setings, setSetings,
        checkbox, setCheckbox,
         posterbtn, setPosterbtn,
         frinds, setFrinds, cam, setCam, vid, setVid, muz, setMuz,
         addmedia, setAddmedia, user, auth
    }) => {
    return(
        <>
            <div id="submit_post" className={"submit_post clear_fix"} onMouseLeave={()=>setZIndex(false)}
                 style={{zIndex:`${zIndex? "100":""}`}}
            >
                <Button/>
                <Settings setings={setings} setSetings={setSetings}
                          checkbox={checkbox} setCheckbox={setCheckbox}/>
                <Posterbtn posterbtn={posterbtn} setPosterbtn={setPosterbtn}/>
                {
                    user._id === auth.user._id &&
                    <BestFriendsSettingsEntrypoint frinds={frinds} setFrinds={setFrinds}/>
                }
                <Addmedia addmedia={addmedia} setAddmedia={setAddmedia}
                          vid={vid} setVid={setVid}
                          muz={muz} setMuz={setMuz}
                          cam={cam} setCam={setCam}/>
            </div>
        </>
    )
}
export default Submitpost