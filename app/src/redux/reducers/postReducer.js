import { POST_TYPES } from '../actions/postAction'
import { EditData, DeleteData } from '../actions/globalTypes'

const initialState = {
    loading: false,
    posts: [],
    result: 0,
    page: 2,
    error: false, uploading: false,
    length:0
}

const postReducer = (state = initialState, action) => {
    switch (action.type){

        case POST_TYPES.UPLOAD_START:
            return { ...state, error: false, uploading: true };
        case POST_TYPES.UPLOAD_SUCCESS:
            return { ...state, posts: [action.data, ...state.posts], uploading: false, error: false };
        case POST_TYPES.UPLOAD_FAIL:
            return { ...state, uploading: false, error: true };
        // belongs to Posts.jsx
        case POST_TYPES.RETREIVING_START:
            return { ...state, loading: true, error: false, length: action.payload };
        case POST_TYPES.RETREIVING_SUCCESS:
            return { ...state, posts: action.data, loading: false, error: false, length: action.payload };
        case POST_TYPES.RETREIVING_FAIL:
            return { ...state, loading: false, error: true };

        case POST_TYPES.CREATE_POST:
            return {
                ...state,
                posts: [action.payload, action.data, ...state.posts],
                uploading: true,
                length: action.payload
            };
        case POST_TYPES.LOADING_POST:
            return {
                ...state,
                loading: action.payload,
                length: action.payload

            };
        case POST_TYPES.GET_POSTS:
            return {
                ...state,
                posts: action.payload.posts,
                result: action.payload.result,
                page: action.payload.page,
                length: action.payload
            };
        case POST_TYPES.UPDATE_POST:
            return {
                ...state,
                posts: EditData(state.posts, action.payload._id, action.payload, action.data)
            };
        case POST_TYPES.DELETE_POST:
            return {
                ...state,
                posts: DeleteData(state.posts, action.payload._id, action.data)
            };
        default:
            return state;
    }
}

export default postReducer