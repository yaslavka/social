import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {GLOBALTYPES} from "../../../redux/actions/globalTypes";

const Profilefull=({auth, dispatch,setOnEdit, user, info_shown})=>{
    const [phone, setPhone] = useState()
    useEffect(()=>{
        if (setPhone){
            dispatch({ type: GLOBALTYPES.MODAL, payload: true})
        }else{
            dispatch({ type: GLOBALTYPES.MODAL, payload: false})
        }
    },[dispatch,setPhone])
    return(
        <>
            <div className={"profile_info profile_info_full"} id="profile_full" style={{display:`${info_shown?"block":"none"}`}}>
                <div className={"profile_info_block clear_fix"}>
                    <div className={"profile_info_header_wrap"}>
                        {
                            auth.user._id === user._id &&
                            <Link to={"#"} className={"profile_info_edit"} onClick={()=>setOnEdit(true)}>Редактировать</Link>

                        }
                        <h2 className="profile_info_header">Основная информация</h2>
                    </div>
                    <div className="profile_info">
                        <div className="clear_fix profile_info_row ">
                            <h3 className="label fl_l">Языки:</h3>
                            <div className="labeled">
                                <Link to={"#"}>Русский</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_info_block clear_fix">
                    <div className="profile_info_header_wrap">
                        {
                            auth.user._id === user._id &&
                            <Link to={"#"} className={"profile_info_edit"} onClick={()=>setOnEdit(true)}>Редактировать</Link>

                        }
                        <h2 className="profile_info_header">Контактная информация</h2>
                    </div>
                    <div className="profile_info">
                        <div className="clear_fix profile_info_row ">
                            <h3 className="label fl_l">Мобильный:</h3>
                            <div className="labeled">
                                {
                                    !setPhone && phone
                                    ?<div className="labeled">Информация отсутствует</div>
                                    :<Link to={"#"}>{user.mobile}</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile_info_block clear_fix">
                    <div className="profile_info_header_wrap">
                        {
                            auth.user._id === user._id &&
                            <Link to={"#"} className={"profile_info_edit"} onClick={()=>setOnEdit(true)}>Редактировать</Link>

                        }
                        <h2 className="profile_info_header">Веб сайт</h2>
                    </div>
                    <div className="profile_info">
                        <div className="profile_no_info clear_fix">
                            <div className="label fl_l">&nbsp;</div>
                            <div className="labeled" role={"link"}>{user.website}</div>
                        </div>
                    </div>
                </div>
                <div className={"profile_info_block clear_fix"}>
                    <div className="profile_info_header_wrap">
                        {
                            auth.user._id === user._id &&
                            <Link to={"#"} className={"profile_info_edit"} onClick={()=>setOnEdit(true)}>Редактировать</Link>

                        }
                        <h2 className="profile_info_header">Немного о себе</h2>
                    </div>
                    <div className={"profile_info"}>
                        <div className={"clear_fix profile_info_row "}>
                            <h3 className="label fl_l">
                                <Link to={"#"} className="profile_label_link">Обомне:</Link>
                            </h3>
                            <div className={"labeled"}>
                                <Link to={"#"}>
                                    {user.story}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profilefull