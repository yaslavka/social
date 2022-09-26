import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css"
import PageRender from './customRouter/PageRender'
import PrivateRouter from './customRouter/PrivateRouter'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

import Alert from './components/alert/Alert'
import Header from './components/Header'
import StatusModal from './components/StatusModal'

import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import {getPosts} from './redux/actions/postAction'
import { getSuggestions } from './redux/actions/suggestionsAction'

import io from 'socket.io-client'
import { GLOBALTYPES } from './redux/actions/globalTypes'
import SocketClient from './SocketClient'

import { getNotifies } from './redux/actions/notifyAction'
import CallModal from './components/message/CallModal'
import Peer from 'peerjs'
import Sidebar from "./components/Sidebar";

function App() {
  const { auth, status, modal, call } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({type: GLOBALTYPES.SOCKET, payload: socket})
    return () => socket.close()
  },[dispatch])

  useEffect(() => {
    if(auth.token) {
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])


  
  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {}
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {}
      });
    }
  },[])

 
  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/', secure: true
    })
    
    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer })
  },[dispatch])


  return (
    <Router>
      <Alert />
      <div className={`App ${(status || modal) && 'mode'}`}>
        <div className="blur" style={{top: "1%", right: "0"}}/>
        <div className="blur" style={{top: "36%", left: "-8rem"}}/>
        {auth.token && <Header />}
        <div id="page_layout">
          {auth.token && <Sidebar />}
          <div id="page_body" className={"fl_r "} style={{width: "750px"}}>
            <div id="wrap_between"/>
            <div id="wrap3">
              <div id="wrap2">
                <div id="wrap1">
                  <div id="content">
                    {status && <StatusModal />}
                    {auth.token && <SocketClient />}
                    {call && <CallModal />}
                    <Route exact path="/" component={auth.token ? Home : Login} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRouter exact path="/:page" component={PageRender} />
                    <PrivateRouter exact path="/:page/:id" component={PageRender} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
