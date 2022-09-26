import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfileUsers } from '../../redux/actions/profileAction'
import { useParams } from 'react-router-dom'
import Info from "../../components/profile/Info";

const Profile = () => {
    const { profile, auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const [postactio, setPostactio] = useState(false)
    const { id } = useParams()
    const [saveTab, setSaveTab] = useState(false)

    useEffect(() => {
        if(profile.ids.every(item => item !== id)){
            dispatch(getProfileUsers({id, auth}))
        }
    },[id, auth, dispatch, profile.ids])


    return(
        <>
            <div id="profile" className={"profile_content"} onClick={e=>e.stopPropagation()}>
                <div className={"wide_column_right"}>
                    <Info auth={auth} profile={profile}
                          postactio={postactio} setPostactio={setPostactio}
                          key={profile._id} saveTab={saveTab} setSaveTab={setSaveTab}
                          dispatch={dispatch} id={id}/>
                </div>
            </div>
        </>
    )
}
export default Profile