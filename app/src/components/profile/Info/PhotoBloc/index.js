import React from "react";
import {Link} from "react-router-dom";

const AddPhoto=({auth, dispatch, id, profile, serverPublic, setOnEdit, setShowFollowers, setShowFollowing, user})=>{
    return(
        <>
            <div className={"page_block"}>
                <aside aria-label="Мои фотографии" className={"page_block_item_empty"}>
                    <div className={"module clear photos_module empty _module"} id="profile_photos_module">
                        <div className="header_right_link fl_r"/>
                        <Link to={"#"}  className="module_header">
                            <div className="header_top clear_fix">
                                <span className="header_label fl_l">Мои фотографии</span>
                                <span className="header_count fl_l">6</span>
                            </div>
                        </Link>
                        <div className={"module_body clear_fix"}>
                            <Link to={"#"} className={"page_module_upload"} role={"button"}>
                                <span className="page_upload_label page_photos_upload">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.46 3h3.08c.29 0 .53 0 .76.03.7.1 1.35.47 1.8 1.03.25.3.4.64.62.96.2.28.5.46.85.48.3.02.58-.01.88.02a3.9 3.9 0 0 1 3.53 3.53c.02.18.02.37.02.65v4.04c0 1.09 0 1.96-.06 2.66a5.03 5.03 0 0 1-.47 1.92 4.9 4.9 0 0 1-2.15 2.15c-.57.29-1.2.41-1.92.47-.7.06-1.57.06-2.66.06H9.26c-1.09 0-1.96 0-2.66-.06a5.03 5.03 0 0 1-1.92-.47 4.9 4.9 0 0 1-2.15-2.15 5.07 5.07 0 0 1-.47-1.92C2 15.7 2 14.83 2 13.74V9.7c0-.28 0-.47.02-.65a3.9 3.9 0 0 1 3.53-3.53c.3-.03.59 0 .88-.02.34-.02.65-.2.85-.48.21-.32.37-.67.61-.96A2.9 2.9 0 0 1 9.7 3.03c.23-.03.47-.03.76-.03Zm0 1.8-.49.01a1.1 1.1 0 0 0-.69.4c-.2.24-.33.56-.52.82A2.9 2.9 0 0 1 6.54 7.3c-.28.01-.55-.02-.83 0a2.1 2.1 0 0 0-1.9 1.91l-.01.53v3.96c0 1.14 0 1.93.05 2.55.05.62.15.98.29 1.26.3.58.77 1.05 1.35 1.35.28.14.64.24 1.26.29.62.05 1.42.05 2.55.05h5.4c1.13 0 1.93 0 2.55-.05.62-.05.98-.15 1.26-.29a3.1 3.1 0 0 0 1.35-1.35c.14-.28.24-.64.29-1.26.05-.62.05-1.41.05-2.55V9.21a2.1 2.1 0 0 0-1.91-1.9c-.28-.03-.55 0-.83-.01a2.9 2.9 0 0 1-2.22-1.27c-.19-.26-.32-.58-.52-.83a1.1 1.1 0 0 0-.69-.39 3.92 3.92 0 0 0-.49-.01h-3.08Z"
                                              fill="currentColor"
                                        />
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M12 9.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm-4.5 2.7a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
                                              fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                Добавить фотографии
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}
export default AddPhoto