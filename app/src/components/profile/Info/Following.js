import React from "react";
import {Link} from "react-router-dom";
import {Avatar} from "@mui/material";

const Following=({users, setShowFollowing, serverPublic, user, children})=>{
    return(
        <>
            <Link to={"link"} className={"module_header"}>
                <div className={"header_top clear_fix"}>
                    <span className="header_label fl_l">Я подписан</span>
                    <span className="header_count fl_l">{user.following.length}</span>
                </div>
            </Link>
            {
                users.map(user=>(
                    <>
                        <div className={"module_body clear_fix"}>
                            <div className={"people_row"}>
                                <div className={"people_cell"}>
                                    <Link to={`/profile/${user._id}`} className={"people_cell_ava"} title={user.full_name}>
                                        <Avatar className={"people_cell_img"} src={
                                            user.avatar
                                                ? serverPublic + user.avatar
                                                : serverPublic + "defaultProfile.png"
                                        }/>
                                        <span className="blind_label">.</span>
                                    </Link>
                                    <div className={"people_cell_name"}>
                                        <Link to={`/profile/${user._id}`} title={user.full_name}> {user.full_name}</Link>
                                    </div>
                                </div>
                                {children}
                            </div>
                        </div>
                    </>
                ))
            }
        </>
    )
}
export default Following