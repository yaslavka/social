import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from "../../images/logo2.png"
import {Form,Input} from "reactstrap"
import "./Auth.css"
import logos from "../../images/logo3.png";
import {login} from "../../redux/actions/authAction";



const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="Auth">
            <div className="a-left" style={{marginLeft:"7%"}}>
                <img
                    src={logo}
                    alt={logo}
                    style={{width:"50%", height:"50%"}}
                />
                <div className="r-Webname"><h1>RANDEVU</h1><h6>Знакомства Встречи Отношения</h6></div>
            </div>
            <div className="a-right" style={{marginLeft:"5%"}}>
                <Form className="infoForm authForm" onSubmit={handleSubmit} ><h3>Вход</h3>
                    <div>
                        <Input
                            required=""
                            type="email"
                            placeholder="email"
                            className="infoInput"
                            name="email"
                            onChange={handleChangeInput}
                            value={email}
                        />
                    </div>
                    <div>
                        <Input
                            required=""
                            type="password"
                            className="infoInput"
                            placeholder="Password"
                            name="password"
                            onChange={handleChangeInput}
                            value={password}
                        />
                    </div>
                    <div>
                        <Link to={'/register'}>
                        <span
                            style={{
                                fontSize: "12px",
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}>Все еще нет Аккаунта? зарегистрируйтесь</span></Link>
                        <button className="button infoButton" type="Submit">Войти</button>
                    </div>
                </Form>
            </div>
            <div className="a-leftss">
                <img
                    src={logos}
                    alt={logos}
                    className="a-lefts"
                />
            </div>
        </div>
    )
}

export default Login
