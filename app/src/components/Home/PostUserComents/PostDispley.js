import React, {useState} from "react";
import {createComment} from "../../../redux/actions/commentAction";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Comments from "./index";

const InputComment = ({post, serverPublic, com, children, onReply, setOnReply}) => {

    const [sel, setSel]=useState(false)
    const [content, setContent] = useState('')

    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!content.trim()){
            if(setOnReply) return setOnReply(false);
            return;
        }

        setContent('')

        const newComment = {
            content,
            likes: [],
            user: auth.user,
            createdAt: new Date().toISOString(),
            reply: onReply && onReply.commentId,
            tag: onReply && onReply.user
        }

        dispatch(createComment({post, newComment, auth, socket}))

        if(setOnReply) return setOnReply(false);
    }

    return(
        <>
            <div className={"replies"}>
                <div className={"replies_wrap"} id="replies_wrap-158759436_13186" style={{display:`${com?"block":"none"}`}}>
                    <div className="replies_list _replies_list" id="replies-158759436_13186" data-can_reply_as_any_group="1"/>
                    <div className={"reply_box_wrap"} id="reply_box_wrap-137054863_72346">
                        <Comments post={post} serverPublic={serverPublic}/>
                        <div className={"reply_box_inner_wrap"}>
                            <div id="reply_box-137054863_72346" className={"submit_post_box reply_box clear_fix _submit_post_box"}>
                                <div className={"reply_form"} onSubmit={handleSubmit}>
                                    {children}
                                    <div id="reply_to_title-137054863_72346" className="reply_to_title"/>
                                    <div className={"reply_text_wrapper"}>
                                        <input type="hidden" id="reply_to-137054863_72346" value={content} onChange={e => setContent(e.target.value)}/>
                                        <div className={"reply_form_user_image"}>
                                            <Link to={"#"} className={"post_field_user_link _post_field_author"}>
                                                <img className={"post_field_user_image _post_field_image"} alt={""} src={auth.user.avatar ? serverPublic + auth.user.avatar: serverPublic + "defaultProfile.png"}/>
                                            </Link>
                                        </div>
                                        <div className={"reply_field_wrap _emoji_field_wrap"}>
                                            <div className={"emoji_smile_wrap  _emoji_wrap"} id="reply_smile-137054863_72346">

                                            </div>
                                            <button className="reply_box_photo" data-title="Фотография" aria-label="Фотография"/>
                                            <span className={"reply_box_more_attaches"} id="reply_more_attaches-137054863_72346">
                                                <div className={"media_selector clear_fix"} onClick={()=>setSel(!sel)}>
                                                    <div className={sel?"ms_items_more_wrap ms_items_more_wrap_vector to_down shown" : "ms_items_more_wrap ms_items_more_wrap_vector to_down"}>
                                                        <Link to={"#"} role={"button"} className={"ms_item_more"} aria-label="Добавить вложение">
                                                            <span className={"ms_item_more_label"}>
                                                                <span className="blind_label">Добавить вложение</span>
                                                            </span>
                                                        </Link>
                                                        <div className={"ms_items_more_helper"}>
                                                            <div className={"ms_items_more _more_items"}>
                                                                <a className="ms_item ms_item_photo _type_photo" tabIndex="0">
                                                                    <span className="MediaSelector__mediaIcon">
                                                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                                            <path clipRule="evenodd" d="M5.5 5.5c.57 0 1-.2 1.34-.52.24-.24.43-.54.55-.74l.06-.1c.15-.23.26-.37.39-.47.11-.08.3-.17.66-.17h3c.36 0 .55.09.66.17.13.1.24.24.4.48l.05.09c.12.2.3.5.55.74.33.32.77.52 1.34.52.73 0 .99 0 1.19.04.9.18 1.59.88 1.77 1.77.04.2.04.46.04 1.19v3.45c0 .85 0 1.45-.04 1.9-.04.46-.1.72-.2.92-.22.42-.57.77-.99.98-.2.1-.46.17-.91.21-.46.04-1.06.04-1.91.04h-6.9c-.85 0-1.45 0-1.91-.04a2.4 2.4 0 0 1-.91-.2 2.25 2.25 0 0 1-.99-.99 2.4 2.4 0 0 1-.2-.91c-.04-.46-.04-1.06-.04-1.91V8.5c0-.73 0-.99.04-1.19.18-.9.88-1.59 1.77-1.77.2-.04.46-.04 1.19-.04zm3-3.5c-.64 0-1.14.16-1.54.46-.39.27-.62.63-.78.9l-.08.11c-.13.22-.2.34-.3.43-.06.05-.12.1-.3.1h-.09c-.61 0-1.03 0-1.4.07a3.75 3.75 0 0 0-2.94 2.95C1 7.38 1 7.8 1 8.42v3.56c0 .81 0 1.47.04 2 .05.55.14 1.03.37 1.47.36.7.93 1.28 1.64 1.64.44.23.92.32 1.47.37.53.04 1.18.04 2 .04H13.48c.81 0 1.47 0 2-.04a3.84 3.84 0 0 0 1.47-.37c.7-.36 1.28-.93 1.64-1.64.23-.44.32-.92.37-1.47.04-.53.04-1.19.04-2V8.41c0-.61 0-1.03-.07-1.4a3.75 3.75 0 0 0-2.95-2.94 7.5 7.5 0 0 0-1.4-.07h-.08c-.18 0-.24-.05-.3-.1-.1-.1-.17-.2-.3-.43l-.08-.12c-.16-.26-.4-.62-.78-.9-.4-.29-.9-.45-1.54-.45zm3.75 8.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" fill="currentColor" fillRule="evenodd"/>
                                                                        </svg>
                                                                    </span>Фотография
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                            <div id="reply_field-137054863_72346" className="reply_field submit_post_field" content={content} contentEditable="true" role="textbox" aria-multiline="true"/>
                                            <div className="placeholder">
                                                <div className="ph_input">
                                                    <div className="ph_content">Написать комментарий...</div>
                                                </div>
                                            </div>
                                            <div className="composer_wdd clear_fix reply_composer_dd"
                                                 id="reply_field-137054863_72346_composer_wdd">
                                                <div className="wdd_lwrap" style={{display: "none", width: "auto"}}>
                                                    <div className="wdd_list"/>
                                                </div>
                                                <input type="hidden" id="reply_field-137054863_72346_composer_wdd_term" value="false"/>
                                            </div>
                                        </div>
                                        <button className="reply_send_button" id="reply_button-137054863_72346"

                                                aria-label="Отправить">
                                            <div className="reply_submit_hint_tt_point"/>
                                            <span className="ReplySendButtonIcon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <g id="send_24__Page-2" stroke="none" strokeWidth="1" fill="none"
                                                           fillRule="evenodd">
                                                            <g id="send_24__send_24">
                                                                <path id="send_24__Rectangle-76" d="M0 0h24v24H0z"/>
                                                                <path d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z" id="send_24__Mask" fill="currentColor"/>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </span>
                                            <div className="tt_w tt_default_right tt_up" style={{display:"none"}}>
                                                <div className="wrapped">
                                                    <div className="tt_text">
                                                        <div className="reply_submit_hint_wrap">
                                                            <div className="reply_submit_hint_title">Настройки
                                                                отправки
                                                            </div>
                                                            <div className="reply_submit_hint_opts"
                                                                 id="reply_submit_hint_opts">
                                                                <div className="radiobtn on " data-val="0">
                                                                    <div className="radiobtn_label">
                                                                        <b>Enter</b> —
                                                                        отправка сообщения
                                                                        <br/>
                                                                        <b>Shift+Enter</b> —
                                                                        перенос строки
                                                                    </div>
                                                                </div>
                                                                <div className="radiobtn  " data-val="1">
                                                                    <div className="radiobtn_label">
                                                                        <b>Ctrl+Enter</b> — отправка
                                                                        сообщения<br/>
                                                                        <b>Enter</b> — перенос строки
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div id="submit_reply-137054863_72346" className="submit_post clear_fix">
                                        <div className="submit_reply_wrapper">
                                            <div id="reply_warn-137054863_72346" className="reply_warn clear" style={{display: "none"}}/>
                                            <div id="reply_media_preview-137054863_72346" className="reply_media_preview clear_fix multi_media_preview">
                                                <div id="page_pics_preview2" className="page_pics_preview media_preview clear_fix"/>
                                                <div id="page_dpics_preview2" className="page_pics_preview post_thumbed_media page_media_sortable media_preview clear_fix"/>
                                                <div id="page_docs_preview2" className="page_docs_preview post_thumbed_media page_media_sortable media_preview clear_fix"/>
                                                <div id="page_pdocs_preview2" className="page_docs_preview media_preview clear_fix"/>
                                                <div id="page_ldocs_preview2" className="page_docs_preview media_preview clear_fix"/>
                                                <div id="page_adocs_preview2" className="page_docs_preview media_preview clear_fix"/>
                                                <div id="page_mpics_preview2" className="page_pics_preview media_preview clear_fix"/>
                                                <div id="page_ppdocs_preview2" className="page_docs_preview media_preview _page_ppdocs_preview clear_fix"/>
                                                <div id="page_progress_preview2" className="page_progress_preview media_preview clear_fix"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="hidden" id="post_hash-137054863_72346" value="4cd59f14867862ec89"/>
        </>
    )
}
export default InputComment