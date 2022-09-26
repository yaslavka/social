import React from "react";
import {Link} from "react-router-dom";

const UserPhoto=({user, serverPublic})=>{
    return(
        <>
            <div className={"page_block"} style={{padding:"12px"}}>
               <div className={"module clear photos_module"}>
                   <Link to={"#"} className={"module_header"}>
                       <div className={"header_top clear_fix"}>
                           <span className="header_label fl_l">Фотографии {user.full_name}</span>
                           <span className="header_count fl_l">{user.avatar.length}</span>
                       </div>
                   </Link>
                   <div id={"page_photos_module"} className={"page_photos_module"} style={{padding:"1px"}}>
                       <a href={serverPublic + user.avatar} style={{backgroundImage: `url(${
                           user.avatar
                               ? serverPublic + user.avatar
                               : serverPublic + ""
                       })`}} className={"page_square_photo crisp_image"}>
                           <span className="blind_label">фотография</span>
                       </a>
                   </div>
               </div>
            </div>
        </>
    )
}
export default UserPhoto