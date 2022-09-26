import React, {useState} from "react";
import {Link} from "react-router-dom";
import Profilefull from "./Profilefull";
import AddPhoto from "./PhotoBloc";
import UserPhoto from "./PhotoBloc/UserPhoto";
import InputsProfile from "../../inputaus/InputsProfile/InputsProfile";
import InputsProfileUser from "../../inputaus/InputsProfile/InputsProfileUser";
import Wallmodule from "./Wallmodule";



const InfoRight = ({auth, dispatch, id, profile, serverPublic, postactio, setPostactio,
                       setOnEdit, setShowFollowers, postacti, setPostacti,
                       setShowFollowing, user, users,
                       handleLoadMore, load, page, posts, result, setLoad, setPage, setPosts, setResult}) =>{
    const [info_shown, setInfo_shown] = useState(false)
    const [showninput, setShowninput] = useState(false)
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
    return(
        <>
            <div className={"wide_column_wrap"}>
                <div className={"wide_column"} id="wide_column">
                    <div className={"page_block"}>
                        <div id="page_info_wrap" className={"page_info_wrap "}>
                            <div className={"page_top"}>
                                <div className="_profile_online profile_online">
                                    <div className="profile_online_lv">online</div>
                                </div>
                                <h1 className="page_name">{user.full_name} {user.last_name}</h1>
                                <div className={"page_current_info"} id="page_current_info"/>
                            </div>
                            <div className={"profile_info profile_info_short"} id="profile_short">
                                <div className="clear_fix profile_info_row ">
                                    <h3 className="label fl_l">Возраст:</h3>
                                    <div className="labeled">
                                        <Link to={"#"}>{user.Age} год</Link>
                                    </div>
                                </div>
                                <div className="clear_fix profile_info_row ">
                                    <h3 className="label fl_l">Цель знакомства:</h3>
                                    <div className="labeled">
                                        <Link to={"#"}>{user.Cel}</Link>
                                    </div>
                                </div>
                                <Link to={"#"} className={info_shown?"profile_more_info_link info_shown":"profile_more_info_link"}>
                                    {
                                        !info_shown
                                        ?<span className="profile_label_more" onClick={()=>setInfo_shown(true)}>Показать подробную информацию</span>
                                        :<span className="profile_label_less" onClick={()=>setInfo_shown(false)}>Скрыть подробную информацию</span>
                                    }
                                </Link>
                            </div>
                            {
                                info_shown &&
                                <Profilefull
                                    auth={auth} user={user} setShowFollowing={setShowFollowing}
                                    dispatch={dispatch} serverPublic={serverPublic} id={id}
                                    profile={profile} setOnEdit={setOnEdit}
                                    key={user._id}
                                    setShowFollowers={setShowFollowers}
                                    info_shown={info_shown}
                                />
                            }
                        </div>
                        <div className={"counts_module"}>
                            <Link to={"#"} className={"page_counter"}>
                                <div className="count">{user.following.length}</div>
                                <div className="label">я подписан</div>
                            </Link>
                            <Link to={"#"} className={"page_counter"}>
                                <div className="count">{user.followers.length}</div>
                                <div className="label">Подписчики</div>
                            </Link>
                            <Link to={"#"} className={"page_counter"}>
                                <div className="count">{user.avatar.length}</div>
                                <div className="label">Фотографии</div>
                            </Link>
                        </div>
                    </div>
                    {
                        user._id === auth.user._id
                        ?<AddPhoto setShowFollowers={setShowFollowers} setOnEdit={setOnEdit}
                                   profile={profile} id={id} serverPublic={serverPublic}
                                   dispatch={dispatch} setShowFollowing={setShowFollowing}
                                   key={user._id}
                                   user={user} auth={auth}/>
                        :<UserPhoto setShowFollowers={setShowFollowers} setOnEdit={setOnEdit}
                                    profile={profile} id={id} serverPublic={serverPublic}
                                    dispatch={dispatch} setShowFollowing={setShowFollowing}
                                    user={user} auth={auth}/>
                    }
                    {
                        user._id === auth.user._id
                        ?<InputsProfile setShowFollowers={setShowFollowers} setOnEdit={setOnEdit}
                                        showninput={showninput} setShowninput={setShowninput}
                                   profile={profile} id={id} serverPublic={serverPublic}
                                   dispatch={dispatch} setShowFollowing={setShowFollowing}
                                        vid={vid} setVid={setVid} setCam={setCam} cam={cam}
                                        muz={muz} setMuz={setMuz}
                                        eltt_vis={eltt_vis} setEltt_vis={setEltt_vis} setFrinds={setFrinds} frinds={frinds}
                                        setPosterbtn={setPosterbtn} posterbtn={posterbtn} zIndex={zIndex} checkbox={checkbox} elttvis={elttvis} setCheckbox={setCheckbox}
                                        setElttvis={setElttvis} setings={setings} setSetings={setSetings} setZIndex={setZIndex}
                                   user={user} auth={auth} setAddmedia={setAddmedia} addmedia={addmedia}/>
                        :<InputsProfileUser setShowFollowers={setShowFollowers} setOnEdit={setOnEdit}
                                            showninput={showninput} setShowninput={setShowninput}
                                            profile={profile} id={id} serverPublic={serverPublic}
                                            dispatch={dispatch} setShowFollowing={setShowFollowing}
                                            vid={vid} setVid={setVid} setCam={setCam} cam={cam}
                                            muz={muz} setMuz={setMuz}
                                            eltt_vis={eltt_vis} setEltt_vis={setEltt_vis} setFrinds={setFrinds} frinds={frinds}
                                            setPosterbtn={setPosterbtn} posterbtn={posterbtn} zIndex={zIndex} checkbox={checkbox} elttvis={elttvis} setCheckbox={setCheckbox}
                                            setElttvis={setElttvis} setings={setings} setSetings={setSetings} setZIndex={setZIndex}
                                            user={user} auth={auth} setAddmedia={setAddmedia} addmedia={addmedia}/>
                    }
                    <Wallmodule setShowFollowers={setShowFollowers} setOnEdit={setOnEdit}
                                showninput={showninput} setShowninput={setShowninput}
                                profile={profile} id={id} serverPublic={serverPublic}
                                dispatch={dispatch} setShowFollowing={setShowFollowing}
                                vid={vid} setVid={setVid} setCam={setCam} cam={cam}
                                muz={muz} setMuz={setMuz} handleLoadMore={handleLoadMore} load={load}
                                page={page} posts={posts} result={result} setLoad={setLoad} setPage={setPage}
                                setPosts={setPosts} setResult={setResult} users={users}
                                postactio={postactio} setPostactio={setPostactio}
                                postacti={postacti} setPostacti={setPostacti}
                                eltt_vis={eltt_vis} setEltt_vis={setEltt_vis} setFrinds={setFrinds} frinds={frinds}
                                setPosterbtn={setPosterbtn} posterbtn={posterbtn} zIndex={zIndex} checkbox={checkbox} elttvis={elttvis} setCheckbox={setCheckbox}
                                setElttvis={setElttvis} setings={setings} setSetings={setSetings} setZIndex={setZIndex}
                                user={user} auth={auth} setAddmedia={setAddmedia} addmedia={addmedia}/>
                </div>
            </div>
        </>
    )
}
export default InfoRight