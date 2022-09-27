import React from "react";
import {Link} from "react-router-dom";
import Mediapreview from "../media_preview/mediapreview";
import Postactionsbtns from "../post_actions_btns/postactionsbtns";
import Submitpost from "../submit_post/submitpost";


const Inputaus =
    ({
         auth,shown,
         setHhown, dropbox_over,
         setDropbox_over, eltt_vis,
         setEltt_vis, elttvis, setElttvis,
        zIndex, setZIndex,
        setings, setSetings,
        checkbox, setCheckbox,
         posterbtn, setPosterbtn,
         frinds, setFrinds, cam, setCam, vid, setVid, muz, setMuz,
     addmedia, setAddmedia
    }) => {

        const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <>
            <div className="wall_module page_block feed_post_field_wrap">
                <div id="submit_post_box" className={shown ? "submit_post_box clear_fix _submit_post_box submit_post_box_with_best_friends submit_post_box_with_sitposting shown" : "submit_post_box clear_fix _submit_post_box submit_post_box_with_best_friends submit_post_box_with_sitposting"} onClick={()=>setHhown(true)}>
                    <div id="post_upload_dropbox" className={dropbox_over?"post_upload_dropbox dropbox_over": "post_upload_dropbox"} style={{display:`${dropbox_over? "block":"none"}`}} onMouseEnter={()=>setDropbox_over(false)}>
                        <div className="post_upload_dropbox_inner">
                            <div className="post_upload_label drop_label">
                                Перетащите сюда фотографии или видео,
                                <br/>
                                чтобы прикрепить их к записи
                            </div>
                            <div className="post_upload_label release_label">
                                Отпустите кнопку мыши, чтобы прикрепить фото или видео
                            </div>
                        </div>
                    </div>
                    <div id="submit_post_error" className="error"/>
                    <Link to={`/profile/${auth.user._id}`} className="post_field_user_link _post_field_author">
                        <img loading="lazy" src={auth.user.avatar
                            ? serverPublic + auth.user.avatar
                            : serverPublic + "defaultProfile.png"} className="post_field_user_image _post_field_image" alt={auth.user.avatar}/>
                        <img loading="lazy" src={auth.user.avatar
                            ? serverPublic + auth.user.avatar
                            : serverPublic + "defaultProfile.png"} className="post_field_user_image post_field_image_secondary _post_field_image" alt={auth.user.avatar}/>
                    </Link>
                    <div className="post_field_wrap _emoji_field_wrap" >
                        <div className="emoji_smile_wrap  _emoji_wrap"/>
                        <div className={shown ? "post_upload_wrap fl_r" :"post_upload_wrap fl_r post_upload_min_wrap"} onClick={()=>setHhown(true)}>
                            <div id="post_field_upload" className="post_upload">
                                <input className="file" type="file" size="28"
                                       multiple={true}
                                       accept="image/jpeg,image/png,image/gif" name="photo" style={{cursor: "pointer"}}
                                />
                            </div>
                        </div>
                        <div className="post_upload_video_wrap fl_r">
                            <div id="post_field_upload_video" className="post_upload_video">
                                <input className="file" type="file" size="28"
                                       multiple={true}
                                       accept="video/*,.avi,.mp4,.3gp,.mpeg,.mov,.flv,.f4v,.wmv,.mkv,.webm,.vob,.rm,.rmvb,.m4v,.mpg,.ogv,.ts,.m2ts,.mts,.mxf,.torrent"
                                       name="video_file" style={{cursor: "pointer"}}
                                />
                            </div>
                        </div>
                        <div id="post_field" className="submit_post_field dark submit_post_inited zoom_text" contentEditable={true} role={"textbox"} aria-multiline={true}/>
                        <div className="composer_wdd clear_fix " id="post_field_composer_wdd">
                            <div className="wdd_lwrap" style={{display:"none", width:"auto"}}>
                                <div className="wdd_list"/>
                            </div>
                            <input type="hidden" id="post_field_composer_wdd_term" value={true}/>
                        </div>
                        <div className="placeholder">
                            <div className="ph_input">
                                <div className="ph_content">Что у вас нового?</div>
                            </div>
                        </div>
                        <span className="post_field_warning"/>
                    </div>
                    <Mediapreview/>
                    <Postactionsbtns elttvis={elttvis} setElttvis={setElttvis}
                                     eltt_vis={eltt_vis} setEltt_vis={setEltt_vis}/>
                    <Submitpost setings={setings} setSetings={setSetings}
                                posterbtn={posterbtn} setPosterbtn={setPosterbtn}
                                cam={cam} setCam={setCam}
                                vid={vid} setVid={setVid}
                                muz={muz} setMuz={setMuz}
                                auth={auth} user={auth.user}
                                addmedia={addmedia} setAddmedia={setAddmedia}
                                checkbox={checkbox} setCheckbox={setCheckbox}
                                frinds={frinds} setFrinds={setFrinds}
                                zIndex={zIndex} setZIndex={setZIndex}/>
                </div>
            </div>
        </>
    )
}
export default Inputaus