import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import {Form,Input} from "reactstrap";
import logo from "../../images/logo2.png";
import logos from "../../images/logo3.png";
import "./Auth.css"
import {register} from "../../redux/actions/authAction";



const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()


    const initialState = {
        full_name: '',last_name: '', username: '', email: '', gender: '',City:'', Region:'', Age:'',Cel:'', password: '', cf_password: ''
    }
    const [userData, setUserData] = useState(initialState)
    const { full_name,last_name, username, email, gender, City, Region, Age,Cel, password, cf_password } = userData


    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    return (
        <div className="r-Auth">
            <div className="r-a-left" style={{marginLeft:"5%"}}>
                <img
                    src={logo}
                    alt={logo}
                    style={{width:"50%", height:"50%"}}
                />
                <div className="r-Webname"><h1>RANDEVU</h1><h6>Знакомства Встречи Отношения</h6></div>
            </div>
            <div className="r-a-right" style={{marginLeft:"3%"}}>
                <Form className="r-infoForm r-authForm" onSubmit={handleSubmit}><h3>Регистрация</h3>
                    <div>
                        <Input
                            required=""
                            type="text"
                            placeholder="Имя"
                            className="r-infoInput"
                            name="full_name"
                            onChange={handleChangeInput}
                            value={full_name}
                            style={{background: `${alert.full_name ? '#fd2d6a14' : ''}`}}
                        />
                        <Input
                            required=""
                            type="text"
                            placeholder="Фамилия"
                            className="r-infoInput"
                            name="last_name"
                            onChange={handleChangeInput}
                            value={last_name}
                            style={{background: `${alert.last_name ? '#fd2d6a14' : ''}`}}
                        />
                    </div>
                    <div>
                        <Input
                            required=""
                            type="username"
                            placeholder="Логин"
                            className="r-infoInput"
                            name="username"
                            onChange={handleChangeInput}
                            value={username.toLowerCase().replace(/ /g, '')}
                            style={{background: `${alert.username ? '#fd2d6a14' : ''}`}}
                        />
                    </div>
                    <div>
                        <Input
                            required=""
                            type="email"
                            placeholder="email Адрес"
                            className="r-infoInput"
                            name="email"
                            onChange={handleChangeInput}
                            value={email}
                            style={{background: `${alert.email ? '#fd2d6a14' : ''}`}}
                        />
                    </div>
                    <div>
                        <select  style={{background: `${alert.gender ? '#fd2d6a14' : ''}`}} name="gender" value={gender} onChange={handleChangeInput} className="r-infoInput">
                            <option>ваш пол</option>
                            <option value="Муж">Муж</option>
                            <option value="Жен">Жен</option>
                        </select>
                        <select  style={{background: `${alert.City ? '#fd2d6a14' : ''}`}} name="City" value={City} onChange={handleChangeInput} className="r-infoInput">
                            <option>Город</option>
                            <option value="Москва">Москва</option>
                            <option value="Абаза">Абаза</option>
                            <option value="Абакан">Абакан</option>
                            <option value="Абакан">Абакан</option>
                            <option value="Абакан">Абакан</option>
                            <option value="Абакан">Абакан</option>
                            <option value="Абакан">Абакан</option>
                            <option value="Абакан">Абакан</option>
                            <option value="Абакан">Абакан</option>
                            <option value="Абакан">Абакан</option>
                            <option value="Абакан">Абакан</option>
                        </select>
                        <select style={{background: `${alert.Region ? '#fd2d6a14' : ''}`}}  name="Region" value={Region} onChange={handleChangeInput} className="r-infoInput">
                            <option>область</option>
                            <option value="Муж">Муж</option>
                            <option value="Жен">Жен</option>
                        </select>
                    </div>
                    <div>
                        <Input
                            required=""
                            type="text"
                            placeholder="Возраст"
                            className="r-infoInput"
                            name="Age"
                            onChange={handleChangeInput}
                            value={Age}
                        />
                    </div>
                    <div>
                        <select style={{background: `${alert.Cel ? '#fd2d6a14' : ''}`}} name="Cel" value={Cel} onChange={handleChangeInput} className="r-infoInput">
                            <option>Цель Знакомства</option>
                            <option value="Дружба">Дружба</option>
                            <option value="Общение">Общение</option>
                            <option value="Серьезные отношения">Серьезные отношения</option>
                        </select>
                    </div>
                    <div>
                        <Input
                            required=""
                            type="password"
                            className="r-infoInput"
                            placeholder="Пароль"
                            name="password"
                            onChange={handleChangeInput}
                            value={password}
                            style={{background: `${alert.password ? '#fd2d6a14' : ''}`}}
                        />
                        <Input
                            required=""
                            type="password"
                            className="r-infoInput"
                            name="cf_password"
                            placeholder="Повторите пароль"
                            onChange={handleChangeInput}
                            value={cf_password}
                            style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}}
                        />
                    </div>
                    <div>
                        <Link to={'/'}>
                        <span
                            style={{
                                fontSize: "12px",
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}>Уже есть  Аккаунт? Войдите</span>
                        </Link>
                        <button className="r-button r-infoButton" type="Submit">Регистрация</button>
                    </div>
                </Form>
            </div>
            <div className="r-a-leftss">
                <img
                    src={logos}
                    alt={logos}
                    className="r-a-lefts"
                />
            </div>
        </div>
    )
}

export default Register
