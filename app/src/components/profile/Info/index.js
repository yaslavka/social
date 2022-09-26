import React, { useState, useEffect } from 'react'
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
import InfoLeft from "./InfoLeft";
import InfoRight from "./InfoRight";
import EditProfil from "./EditProfile";
import {getDataAPI} from "../../../utils/fetchData";
import {PROFILE_TYPES} from "../../../redux/actions/profileAction";




const Info =({auth, id, profile, dispatch, postactio, setPostactio})=>{
    const [userData, setUserData] = useState([])
    const [onEdit, setOnEdit] = useState(false)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const [showFollowers, setShowFollowers] = useState(false)
    const [showFollowing, setShowFollowing] = useState(false)
    const [posts, setPosts] = useState([])
    const [result, setResult] = useState(9999)
    const [page, setPage] = useState(0)
    const [load, setLoad] = useState(false)
    const [postacti, setPostacti] = useState(false)
    useEffect(() => {
        profile.posts.forEach(data => {
            if(data._id === id){
                setPosts(data.posts)
                setResult(data.result)
                setPage(data.page)
            }
        })
    },[profile.posts, id])

    const handleLoadMore = async () => {
        setLoad(true)
        const res = await getDataAPI(`user_posts/${id}?limit=${page * 9999}`, auth.token)
        const newData = {...res.data, page: page + 1, _id: id}
        dispatch({type: PROFILE_TYPES.UPDATE_POST, payload: newData})
        setLoad(false)
    }

    useEffect(() => {
        if(id === auth.user._id){
            setUserData([auth.user])
        }else{
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])


    useEffect(() => {
        if(showFollowers || showFollowing || onEdit){
            dispatch({ type: GLOBALTYPES.MODAL, payload: true})
        }else{
            dispatch({ type: GLOBALTYPES.MODAL, payload: false})
        }
    },[showFollowers, showFollowing, onEdit, dispatch])


    return(
        <>
            {
                userData.map(user=>(
                    <>
                        <InfoLeft auth={auth} id={id} profile={profile}
                                  setShowFollowers={setShowFollowers} setShowFollowing={setShowFollowing}
                                  user={user} serverPublic={serverPublic}
                                  key={user._id}
                                  dispatch={dispatch} setOnEdit={setOnEdit}/>
                        <InfoRight auth={auth} id={id} profile={profile}
                                   setShowFollowers={setShowFollowers} setShowFollowing={setShowFollowing}
                                   user={user} serverPublic={serverPublic}
                                   posts={posts} setPosts={setPosts}
                                   users={userData}
                                   page={page} setPage={setPage}
                                   load={load} setLoad={setLoad}
                                   handleLoadMore={handleLoadMore}
                                   postactio={postactio} setPostactio={setPostactio}
                                   postacti={postacti} setPostacti={setPostacti}
                                   result={result} setResult={setResult}
                                   dispatch={dispatch} setOnEdit={setOnEdit}/>

                        {
                            onEdit && <EditProfil setOnEdit={setOnEdit} />
                        }
                    </>
                ))
            }
        </>
    )
}
export default Info