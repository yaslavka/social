import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {follow, unfollow} from "../../../../redux/actions/profileAction";


const FollowBtn = ({user}) => {
    const [followed, setFollowed] = useState(false)

    const { auth, profile, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(auth.user.following.find(item => item._id === user._id)){
            setFollowed(true)
        }
        return () => setFollowed(false)
    }, [auth.user.following, user._id])

    const handleFollow =  async () => {
        if(load) return;

        setFollowed(true)
        setLoad(true)
        await dispatch(follow({users: profile.users, user, auth, socket}))
        setLoad(false)
    }

    const handleUnFollow = async () => {
        if(load) return;

        setFollowed(false)
        setLoad(true)
        await dispatch(unfollow({users: profile.users, user, auth, socket}))
        setLoad(false)
    }


    return(
        <>
            {
                followed
                ?<span className="FlatButton__in" onClick={handleUnFollow}>
                        <span className="FlatButton__content">
                            отписатся
                        </span>
                </span>
               :<span className="FlatButton__in" onClick={handleFollow}>
                        <span className="FlatButton__content">
                            Подписатся
                        </span>
                </span>
            }
        </>
    )
}
export default FollowBtn