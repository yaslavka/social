import React from "react";


const EditProfile =({setOnEdit})=>{
    return(
        <>
            <span className="FlatButton__in" onClick={() => setOnEdit(true)}>
                <span className="FlatButton__content">
                    Редактировать
                </span>
            </span>
        </>
    )
}
export default EditProfile