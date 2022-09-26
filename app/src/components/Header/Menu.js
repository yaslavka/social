import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Menu = ({serverPublic, handleLogOut}) => {
    const { auth } = useSelector(state => state)




    return (
        <div className="menu">
            <ul className="navbar-nav flex-row">


           
            
                <li className="nav-item dropdown HeaderNav__item" style={{opacity: 1}} >
                    <Link to={"#"} className="nav-link dropdown-toggle TopNavBtn TopNavBtn__profileLink TopNavBtn__profileLink--new" id="navbarDropdown"
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img alt={""} className={"TopNavBtn__profileImg"}
                            src={
                            auth.user.avatar
                                ?serverPublic + auth.user.avatar
                                :serverPublic + "defaultProfile.png"
                        } />
                    </Link>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>Моя страница</Link>


                    <div className="dropdown-divider"/>
                    <Link className="dropdown-item" to="/"
                          onClick={handleLogOut}>
                        Выход
                    </Link>
                </div>
            </li>
        </ul>
    </div>

    )
}

export default Menu
