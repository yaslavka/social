import React from "react";
import {Link} from "react-router-dom";
import {Avatar} from "@mui/material";

const Followers = ({user, setShowFollowers, users, serverPublic, children}) => {
    return(
        <>
            <aside aria-label="Мои подписчики">
                <div className={"module clear people_module _module"} id="profile_friends_online">
                    <div className="header_right_link fl_r"/>
                    <Link to={"#"} className={"module_header"}>
                        <div className="header_top clear_fix">
                            <span className="header_label fl_l">Подписчики</span>
                            <span className="header_count fl_l">{user.followers.length}</span>
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
                </div>
            </aside>
        </>
    )
}
export default Followers