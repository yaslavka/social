import React from "react";
import {Link} from "react-router-dom";
import Mailboxaddrow from "./mail_box_add_row";

const MassageModalWindow = ({messege, setMessege, serverPublic, user}) => {

    return(
        <>
            <div id="box_layer_bg" className="fixed" style={{display:`${messege?"block":"none"}`}} onClick={()=>setMessege(false)}/>
            <div id="box_layer_wrap" className={"scroll_fix_wrap fixed"} style={{display:`${messege?"block":"none"}`, width:"100%"}} onClick={()=>setMessege(false)}>
                <div id="box_layer">
                    <div id={"box_loader"}/>
                    <div className={"popup_box_container"} tabIndex={"0"} style={{width:"600px", height:"auto", marginTop:"179.778px"}}>
                        <div className={"box_layout"} onClick={e=>e.stopPropagation()}>
                            <div className={"box_title_wrap"}>
                                <div className="box_x_button" aria-label="Закрыть" tabIndex="0" role="button" onClick={()=>setMessege(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M7.54 6.26a.9.9 0 0 0-1.28 1.28L10.73 12l-4.47 4.46a.9.9 0 0 0 1.28 1.28L12 13.27l4.46 4.47a.9.9 0 1 0 1.28-1.28L13.27 12l4.47-4.46a.9.9 0 1 0-1.28-1.28L12 10.73 7.54 6.26Z"/>
                                    </svg>
                                </div>
                                <div className="box_title_controls">
                                    <Link className="mail_box_header_link" to={`/message/${user._id}`}>
                                        Перейти к диалогу с {user.full_name} {user.last_name}
                                    </Link>
                                </div>
                                <div className="box_title">Новое сообщение</div>
                            </div>
                            <div className={"box_body box_no_buttons"}>
                                <div className={"mail_box_cont"}>
                                    <div className="mail_box_to_single">
                                        <div className="clear_fix mailbox_hidden_override" id="mail_box_dd">
                                            <div className="fl_r wdd_arr hidden_override"/>
                                            <input type="text" className="wdd_text fl_l hidden_override" placeholder="" id="mail_box_inp" style={{display: "none"}}/>
                                            <div className="fl_l">
                                                <Link className="mail_box_single_ava" to={`/profile/${user._id}`} onClick={()=>setMessege(false)}>
                                                    <img className="mail_box_single_ava_img" src={user.avatar?serverPublic+user.avatar:serverPublic+"defaultProfile.png"} alt="Александр Ремезов"/>
                                                </Link>
                                            </div>
                                            <div className="fl_l mail_box_sinlgle_recepient_info">
                                                <Link to={`/profile/${user._id}`} className="mail_box_label_peer" onClick={()=>setMessege(false)}>{user.full_name} {user.last_name}</Link>
                                                <p className="mail_box_group_first_message"/>
                                                <p className="mail_box_label_info">online </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fl_r mail_box_to_full_cls" id="mail_box_to_full"/>
                                    <div id="mail_box_title_wrap" style={{display: "none"}}>
                                        <span/>
                                        <h4 className="subheader">Тема</h4>
                                        <input type="text" className="text" id="mail_box_title" maxLength="64" onChange="curBox().changed=true;"/>
                                    </div>
                                    <div className={"mail_box_text_wrap _emoji_field_wrap"} id="mbe_emoji_wrap">
                                        <div id="mbe_smile" className={"emoji_smile_wrap  _emoji_wrap"}>

                                        </div>
                                        <div className="_sticker_hints sticker_hints_tt">
                                            <div className="sticker_hints_arrow sticker_left _sticker_left"
                                                 onMouseDown="Emoji.scrollStickersHints(this, -1, event);cancelEvent(event);"
                                                 onClick="cancelEvent(event);">
                                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.88 18.12a1.25 1.25 0 0 1-1.76 1.76l-7-7a1.25 1.25 0 0 1 0-1.76l7-7a1.25 1.25 0 0 1 1.76 1.76L9.77 12z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <div className="_sticker_hints_inner sticker_hints_inner"/>
                                            <div className="sticker_hints_arrow sticker_right _sticker_right"
                                                 onMouseDown="Emoji.scrollStickersHints(this, 1, event);cancelEvent(event);"
                                                 onClick="cancelEvent(event);">
                                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.23 12 8.12 5.88a1.25 1.25 0 1 1 1.76-1.76l7 7c.5.48.5 1.28 0 1.76l-7 7a1.25 1.25 0 0 1-1.76-1.76z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div tabIndex="0" contentEditable="true" id="mail_box_editable" onKeyUp="WriteBox.checkLen(this)" onKeyPress="onCtrlEnter(event, WriteBox.send)" onChange="curBox().changed=true;"/>
                                    </div>
                                    <div id="mail_box_warn" style={{display: "none"}}/>
                                    <div id="mail_box_added_row" className="multi_media_preview">
                                        <div id="page_pics_preview3" className="page_pics_preview media_preview clear_fix"/>
                                        <div id="page_dpics_preview3" className="page_pics_preview post_thumbed_media page_media_sortable media_preview clear_fix"/>
                                        <div id="page_docs_preview3" className="page_docs_preview post_thumbed_media page_media_sortable media_preview clear_fix"/>
                                        <div id="page_pdocs_preview3" className="page_docs_preview media_preview clear_fix"/>
                                        <div id="page_ldocs_preview3" className="page_docs_preview media_preview clear_fix"/>
                                        <div id="page_adocs_preview3" className="page_docs_preview media_preview clear_fix"/>
                                        <div id="page_mpics_preview3" className="page_pics_preview media_preview clear_fix"/>
                                        <div id="page_ppdocs_preview3" className="page_docs_preview media_preview _page_ppdocs_preview clear_fix"/>
                                        <div id="page_progress_preview3" className="page_progress_preview media_preview clear_fix"/>
                                    </div>
                                    <div id="mail_box_controls">
                                        <button className="FlatButton FlatButton--primary FlatButton--size-m mail_box_send_btn fl_r" type="button" id="mail_box_send" onClick="WriteBox.send()">
                                            <span className="FlatButton__in">
                                                <span className="FlatButton__content">Отправить</span>
                                            </span>
                                        </button>
                                        <Mailboxaddrow/>
                                        <br className="clear"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MassageModalWindow