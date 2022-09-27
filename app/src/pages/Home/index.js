import React, {useEffect, useState} from "react";
import Createpostnews from "../../components/Home/createpost";
import {useDispatch, useSelector} from "react-redux";
import {DISCOVER_TYPES, getDiscoverPosts} from "../../redux/actions/discoverAction";
import {getDataAPI} from "../../utils/fetchData";


const Home = () => {
    const [shown, setHhown] = useState(false)
    const [dropbox_over, setDropbox_over] = useState(false)
    const [eltt_vis, setEltt_vis] = useState(false)
    const [elttvis, setElttvis] = useState(false)
    const [zIndex, setZIndex] = useState(false)
    const [setings, setSetings] = useState(false)
    const [checkbox, setCheckbox] = useState(false)
    const [posterbtn, setPosterbtn] = useState(false)
    const [cam, setCam] = useState(false)
    const [vid, setVid] = useState(false)
    const [muz, setMuz] = useState(false)
    const [frinds, setFrinds] = useState(false)
    const [addmedia, setAddmedia] = useState(false)
    const [postaction, setPostaction] = useState(false)
    const {auth, discover} = useSelector(state => state)
    const dispatch = useDispatch();
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(!discover.firstLoad){
            dispatch(getDiscoverPosts(auth.token))
        }
    },[dispatch, auth.token, discover.firstLoad])

    const handleLoadMore = async () => {
        setLoad(true)
        const res = await getDataAPI(`post_discover?num=${discover.page * 9}`, auth.token)
        dispatch({type: DISCOVER_TYPES.UPDATE_POST, payload: res.data})
        setLoad(false)
    }


    return (
        <>
            <div className={"wide_column_left"} onClick={e=>e.stopPropagation()}>
                <div className={"narrow_column_wrap"}>
                    <div className={"narrow_column"} id="narrow_column">
                        <div className={"page_block ui_rmenu ui_rmenu_pr _ui_rmenu_auto_expand"} id="feed_rmenu" role="list"
                             style={{marginLeft:"10%", width:"150%"}}>
                            ckgkcm,fdymmx dyxdy
                        </div>
                    </div>
                </div>
                <Createpostnews shown={shown} setHhown={setHhown}
                                postaction={postaction} setPostaction={setPostaction}
                                dropbox_over={dropbox_over} setDropbox_over={setDropbox_over}
                                setings={setings} setSetings={setSetings}
                                checkbox={checkbox} setCheckbox={setCheckbox}
                                zIndex={zIndex} setZIndex={setZIndex}
                                posterbtn={posterbtn} setPosterbtn={setPosterbtn}
                                elttvis={elttvis} setElttvis={setElttvis}
                                eltt_vis={eltt_vis} setEltt_vis={setEltt_vis}
                                frinds={frinds} setFrinds={setFrinds}
                                cam={cam} setCam={setCam}
                                vid={vid} setVid={setVid}
                                muz={muz} setMuz={setMuz}
                                addmedia={addmedia} setAddmedia={setAddmedia}
                                auth={auth} discover={discover}
                                load={load} setLoad={setLoad}
                                handleLoadMore={handleLoadMore}
                />
            </div>

        </>
    )
}
export default Home