import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { NotificationsActive} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import logo from "../../images/logo.png"
import "./Heder.css";
import {useDispatch, useSelector} from "react-redux";
import UserCard from "../UserCard";
import {getDataAPI} from "../../utils/fetchData";
import {logout} from "../../redux/actions/authAction";
import NotifyModal from "../NotifyModal";
import Menu from "./Menu";
import {GLOBALTYPES} from "../../redux/actions/globalTypes";


const Header = () => {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const {auth, notify } = useSelector(state => state)
    const dispatch = useDispatch()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const [active, setActive] = useState(false)

    useEffect(()=>{
        if (search && auth.token){
            getDataAPI(`search?username=${search}`, auth.token)
                .then(res =>setUsers(res.data.users) )
                .catch(err=>{
                    dispatch({
                        type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}
                    })
                })
        }else {
            setUsers([])
        }
    },[search, auth.token,dispatch])

    const handleClose = () => {
        setSearch('')
        setUsers([])
    }
    const handleLogOut = () => {
        dispatch(logout()).then(res =>console.log(res) )
    }
    return (
        <>
            <div id="page_header_cont" className={"page_header_cont"}>
                <div className={"page_header_wrap"} id="page_header_wrap">
                    <header className={"p_head p_head_l0"} id="page_header">
                        <div className="PortalNavigation">
                            <div className="PortalNavigation__icon"/>
                        </div>
                        <ul id="top_nav" className={"HeaderNav"}>
                            <li className={"HeaderNav__item HeaderNav__item--logo"}>
                                <Link to={"/"} aria-label="На главную">
                                    <img alt={logo} src={logo}/>
                                </Link>
                                <div className="r-Webname" style={{marginTop:"-22px"}}><h1>RANDEVU</h1></div>
                            </li>
                            <li className={"HeaderNav__item HeaderNav__item--gap"}>
                                <div id="ts_wrap" className={"TopSearch"}>
                                    <form autoComplete="off">
                                        <input type="text"
                                               className="TopSearch__input"
                                               value={search}
                                               onChange={e => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))}
                                               id="ts_input" placeholder="Поиск" aria-label="Поиск"/>
                                    </form>
                                </div>
                            </li>
                            <div className="nav-item dropdown" style={{opacity: 1}} >
                                <span  id="navbarDropdown"
                                       role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <IconButton style={{color: notify.data.length > 0 ? 'crimson' : ''}}>
                                        <NotificationsActive  className="notify_length">{notify.data.length}</NotificationsActive>
                                    </IconButton>
                                </span>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown"
                                     style={{transform: 'translateX(75px)', marginTop:"70%"}}>
                                    <NotifyModal />
                                </div>
                            </div>
                            <li className={"HeaderNav__item HeaderNav__audio"}>
                                <div id="top_audio_layer_place" className="top_audio_layer_place"/>
                            </li>
                            <Menu serverPublic={serverPublic} handleLogOut={handleLogOut} />
                        </ul>

                        <div className={"ts_cont_wrap"} id="ts_cont_wrap" style={{display:"block", left:"285px"}}

                             onTouchStart={()=>setActive(true)} onMouseDown={()=>setActive(true)}>
                            {
                                search && users.length>0 && users.map(user=>(
                                         <UserCard
                                            key={user._id}
                                            user={user}
                                            active={active}
                                            setActive={setActive}
                                            handleClose={handleClose}
                                        />
                                ))
                            }
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header
