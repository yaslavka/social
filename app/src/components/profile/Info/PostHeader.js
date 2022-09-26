import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GLOBALTYPES} from "../../../redux/actions/globalTypes";
import {deletePost} from "../../../redux/actions/postAction";
import {BASE_URL} from "../../../utils/config";
import { Link, useHistory } from 'react-router-dom'


const PostdHeader = ({post, auth, children}) => {
    const { socket } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const [header, setHeader] = useState(false)
    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: {...post, onEdit: true}})
    }

    const handleDeletePost = () => {
        if(window.confirm("Are you sure want to delete this post?")){
            dispatch(deletePost({post, auth, socket}))
            return history.push("/")
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`)
    }

    return(
        <>
            <>
                <div className={"PostHeaderActions PostHeaderActions--inPost PostHeaderActions--legacy"}>
                    <div className={"PostHeaderActions__action"}>
                        <div className={"PostHeaderActionsUiActionMenu"}>
                            <div className={header?"ui_actions_menu_wrap _ui_menu_wrap shown":"ui_actions_menu_wrap _ui_menu_wrap"}
                                 onClick={() => setHeader(!header)} onMouseOver={()=>setHeader(true)} onMouseOut={()=>setHeader(false)}>
                                        <span className={"PostHeaderActionsUiActionMenuIcon"}
                                              role={"button"} tabIndex={"0"}
                                              aria-label="Действия">
                                            <span className={"PostHeaderActionsButtonMoreIcon"} aria-hidden={"true"}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="more_horizontal_24__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <g id="more_horizontal_24__more_horizontal_24">
                                                            <path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"/>
                                                            <path d="M18 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Zm-6 4a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Zm-6 0a2 2 0 0 1-2-2c0-1.1.9-2 2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2Z" id="more_horizontal_24__Mask" fill="currentColor"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                        </span>
                                <div className={"ui_actions_menu _ui_menu ui_actions_menu--actionSheet"}>
                                    <Link to={"#"} className={"ui_actions_menu_item"} tabIndex={"0"} onClick={handleEditPost}>Изменить</Link>
                                    <Link to={"#"} className={"ui_actions_menu_item"} tabIndex={"0"} onClick={handleDeletePost}>Удалить</Link>
                                    <Link to={"#"} className={"ui_actions_menu_item"} tabIndex={"0"} onClick={handleCopyLink}>Копировать ссылку</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </>
        </>
    )
}
export default PostdHeader