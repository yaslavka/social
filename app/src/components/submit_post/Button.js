import React from "react";

const Button =()=>{
    return(
        <>
            <div className="addpost_button_wrap">
                <button className="FlatButton FlatButton--primary FlatButton--size-m addpost_button" type="button" id="send_post">
                    <span className="FlatButton__in">
                        <span className="FlatButton__content">Отправить</span>
                    </span>
                </button>
            </div>
        </>
    )
}
export default Button