import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../../utils/imageUpload'
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
import { updateProfileUser } from '../../../redux/actions/profileAction'

const EditProfil = ({setOnEdit}) => {
    const initState = {
        full_name: '', mobile: '', last_name:'', address: '', website: '', story: '', gender: ''
    }
    const [userData, setUserData] = useState(initState)
    const { full_name, last_name, mobile, address, website, story, gender } = userData

    const [avatar, setAvatar] = useState('')

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user])


    const changeAvatar = (e) => {
        const file = e.target.files[0]

        const err = checkImage(file)
        if(err) return dispatch({
            type: GLOBALTYPES.ALERT, payload: {error: err}
        })

        setAvatar(file)
    }

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateProfileUser({userData, avatar, auth}))
    }

    return (
        <div className="edit_profile" onClick={() => setOnEdit(false)}>
            <button className="btn btn-danger btn_close"
            onClick={() => setOnEdit(false)}>
                Close
            </button>

            <form onSubmit={handleSubmit} onClick={e=>e.stopPropagation()}>
                <div className="info_avatar">
                    <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} 
                    alt="avatar" style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
                    <span>
                        <i className="fas fa-camera" />
                        <p>Change</p>
                        <input type="file" name="file" id="file_up"
                        accept="image/*" onChange={changeAvatar} />
                    </span>
                </div>

                <div className="form-group">
                    <label htmlFor="last_name">Имя</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="last_name"
                               name="last_name" value={last_name} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                               style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {last_name.length}/25
                        </small>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="full_name">Фамилия</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="full_name"
                        name="full_name" value={full_name} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                        style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {full_name.length}/25
                        </small>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" name="mobile" value={mobile}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" value={address}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="text" name="website" value={website}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="story">Story</label>
                    <textarea name="story" value={story} cols="30" rows="4"
                    className="form-control" onChange={handleInput} />

                    <small className="text-danger d-block text-right">
                        {story.length}/200
                    </small>
                </div>

                <label htmlFor="gender">Gender</label>
                <div className="input-group-prepend px-0 mb-4">
                    <select name="gender" id="gender" value={gender}
                    className="custom-select text-capitalize"
                    onChange={handleInput}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button className="btn btn-info w-100" type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditProfil
