import { Route, Redirect} from 'react-router-dom'
import React from "react";

const PrivateRouter = (props) => {
    const firstLogin = localStorage.getItem('firstLogin')
    return firstLogin ? <Route {...props} /> : <Redirect to="/" />
}

export default PrivateRouter
