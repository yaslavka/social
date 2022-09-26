import React from "react";

const MsgBtn=()=>{
    return(
        <>
            <div className={"profile_actions"}>
                <div className={"page_actions_wide clear_fix no_actions edit"}>
                    <div className={"page_action_left fl_l"}>
                        <div role={"button"} className={"FlatButton FlatButton--secondary FlatButton--size-m FlatButton--wide"}>
                            <span className="FlatButton__in">
                                <span className="FlatButton__content">
                                    Написать сообщение
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MsgBtn