import React from 'react'
import LeftSide from '../../components/message/LeftSide'
import logo from "../../images/logo.png";

const Message = () => {
    return (
        <>


                            <div className="message d-flex">
                                <div className="col-md-4 border-right px-0">
                                    <LeftSide/>
                                </div>

                                <div className="col-md-8 px-0 right_mess">
                                    <div className="d-flex justify-content-center align-items-center flex-column h-100">

                                        <img src={logo}
                                             style={{fontSize: '10rem', width: "80px", marginLeft: "20px"}} alt={logo}/>
                                        <h4>Messenger</h4>

                                    </div>
                                </div>
                            </div>

        </>
    )
}

export default Message
