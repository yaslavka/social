import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const UserCard = ({children, handleClose, setShowFollowers, setShowFollowing, msg, user, active, setActive}) => {

    const {theme} = useSelector(state => state)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleCloseAll = () => {
        if (handleClose) handleClose()
        if (setShowFollowers) setShowFollowers(false)
        if (setShowFollowing) setShowFollowing(false)
    }

    const showMsg = (user) => {
        return (
            <>
                <div style={{filter: theme ? 'invert(1)' : 'invert(0)'}}>
                    {user.text}
                </div>
                {
                    user.media.length > 0 &&
                    <div>
                        {user.media.length} <i className="fas fa-image"/>
                    </div>
                }

                {
                    user.call &&
                    <span className="material-icons">
                        {
                            user.call.times === 0
                                ? user.call.video ? 'videocam_off' : 'phone_disabled'
                                : user.call.video ? 'video_camera_front' : 'call'
                        }
                    </span>
                }
            </>
        )
    }


    return (
        <>
            <Link to={`/profile/${user._id}`} key={user._id}
                  style={{height:"58px"}}
                  onClick={handleCloseAll}
                  className={active? "ts_contact clear_fix write active":"ts_contact clear_fix write"}>
                <span className={"ts_contact_photo  _online"} >
                    <img className={"ts_contact_img"} src={
                        user.avatar
                            ? serverPublic + user.avatar
                            : serverPublic + "defaultProfile.png"
                    }
                             alt={""}/>
                </span>
                <span  className="ts_contact_name fl_l">
                    <div className="ts_contact_title_wrap">
                        <span className="ts_contact_title">{user.full_name} {user.last_name}</span>
                    </div>
                    <div className="ts_contact_info"/>
                </span>
                <small style={{opacity: 0.7}}>
                    {
                        msg
                            ? showMsg(user)
                            : ""
                    }
                </small>
            </Link>
            {children}
        </>
    )
}

export default UserCard
