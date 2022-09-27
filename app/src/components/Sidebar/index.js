import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = () => {
    const {auth} = useSelector(state => state)
    return(
        <>
            <div id="side_bar" className="side_bar fl_l" style={{top:"0"}}>
                <div id="side_bar_inner" className="side_bar_inner">
                    <nav className="side_bar_nav">
                        <ol className="side_bar_ol">
                            <li id="l_pr" className="">
                                <Link to={`/profile/${auth.user._id}`} className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd"
                                                  d="M5.84 15.63a6.97 6.97 0 0 0 8.32 0 8.2 8.2 0 0 0-8.32 0zM4.7 14.57a7 7 0 1 1 10.6 0 9.7 9.7 0 0 0-10.6 0zM10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zm-1.5 7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm1.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                                                  fill="currentColor" fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Моя страница</span>
                                    <span className="left_count_wrap fl_r left_void">
                                        <span className="inl_bl left_count_sign">0</span>
                                    </span>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <li id="l_nwsf" className="">
                                <Link to="/" className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd"
                                                  d="M11.84 2H8.16c-.93 0-1.67 0-2.26.05-.62.05-1.15.15-1.63.4a4.15 4.15 0 0 0-1.82 1.82 4.26 4.26 0 0 0-.4 1.63C2 6.5 2 7.23 2 8.16v3.68c0 .93 0 1.67.05 2.26.05.62.15 1.15.4 1.63.4.78 1.04 1.42 1.82 1.82.48.25 1.01.35 1.63.4.6.05 1.33.05 2.26.05h3.68c.93 0 1.67 0 2.26-.05a4.26 4.26 0 0 0 1.63-.4 4.15 4.15 0 0 0 1.82-1.82c.25-.48.35-1.01.4-1.63.05-.6.05-1.33.05-2.26V8.16c0-.93 0-1.67-.05-2.26a4.26 4.26 0 0 0-.4-1.63 4.15 4.15 0 0 0-1.82-1.82 4.26 4.26 0 0 0-1.63-.4C13.5 2 12.77 2 11.84 2zm-6.9 1.79c.25-.12.56-.2 1.08-.25.53-.04 1.2-.04 2.17-.04h3.62c.96 0 1.64 0 2.17.04.52.05.83.13 1.07.25.5.25.9.66 1.16 1.16.12.24.2.55.25 1.07l.02.48H3.52l.02-.48c.05-.52.13-.83.25-1.07.25-.5.66-.9 1.16-1.16zM3.5 8v3.81c0 .96 0 1.64.04 2.17.05.52.13.83.25 1.07.25.5.66.9 1.16 1.16.24.12.55.2 1.07.25.53.04 1.2.04 2.17.04h3.62c.96 0 1.64 0 2.17-.04a2.8 2.8 0 0 0 1.07-.25c.5-.25.9-.66 1.16-1.16.12-.24.2-.55.25-1.07.04-.53.04-1.2.04-2.17V8z"
                                                  fill="currentColor" fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Новости</span>
                                    <span className="left_count_wrap fl_r left_void">
                                        <span className="inl_bl left_count_sign">0</span>
                                    </span>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <li id="l_msg" className="">
                                <Link to={"/message"} className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <g id="message_outline_20__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="message_outline_20__message_outline_20">
                                                    <path id="message_outline_20__Shape" opacity=".4" d="M0 0h20v20H0z"/>
                                                    <path d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22ZM3.24 18.5a1.2 1.2 0 0 1-1.1-1.77A10.77 10.77 0 0 0 3.26 14 7 7 0 0 1 2 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4Z"
                                                          id="message_outline_20__Icon-Color" fill="currentColor"
                                                          fillRule="nonzero"
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Мессенджер</span>
                                    <span className="left_count_wrap fl_r left_void">
                                        <span className="inl_bl left_count_sign">0</span>
                                    </span>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <li id="l_ca" className="">
                                <Link to={"/calls"} className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <g id="phone_outline_20__Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="phone_outline_20__Icons-20/phone_outline_20">
                                                    <g id="phone_outline_20__phone_outline_20">
                                                        <path opacity=".1" d="M0 0h20v20H0z"/>
                                                        <path d="m7.78 2.7.7.83a4.13 4.13 0 0 1-.3 5.58l-.3.3c.23.38.64.88 1.23 1.48.53.53.99.9 1.35 1.14l.13.09.3-.3a4.14 4.14 0 0 1 5.58-.3l.83.7a3.45 3.45 0 0 1 .34 4.9c-.6.69-1.43 1.15-2.29 1.28l-.5.06c-3 .3-6.04-1.16-9.1-4.21-3.05-3.06-4.5-6.1-4.22-9.03l.06-.51a3.83 3.83 0 0 1 1.3-2.36l.17-.13a3.44 3.44 0 0 1 4.72.48Zm-3.91.79a2.38 2.38 0 0 0-.81 1.58c-.35 2.55.9 5.25 3.76 8.12 2.86 2.86 5.56 4.1 8.12 3.75.6-.05 1.17-.35 1.57-.8.72-.85.64-2.09-.18-2.77l-.83-.7-.14-.12a2.64 2.64 0 0 0-3.41.33l-.6.6-.09.07a.9.9 0 0 1-.86.14 7.26 7.26 0 0 1-2.35-1.74A7.23 7.23 0 0 1 6.31 9.6a.9.9 0 0 1 .21-.95l.6-.6.13-.13c.86-1 .9-2.44.08-3.42l-.7-.83-.11-.13c-.7-.7-1.85-.73-2.65-.05Z"
                                                              id="phone_outline_20__Icon-Color" fill="currentColor" fillRule="nonzero"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Звонки</span>
                                    <span className="left_count_wrap fl_r left_void">
                                        <span className="inl_bl left_count_sign">0</span>
                                    </span>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <li id="l_fr" className="">
                                <Link to={"/friends"} className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="currentColor">
                                                <g clipRule="evenodd" fillRule="evenodd">
                                                    <path d="M6.25 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1.5 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2.06 5.07c.96-.55 2.22-.82 3.56-.82s2.6.27 3.56.82c.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54H3.5c-.61 0-1.24-.15-1.72-.54-.5-.4-.78-1-.78-1.71 0-1.21.71-2.12 1.69-2.68zm.75 1.3c-.65.37-.94.84-.94 1.38 0 .3.1.44.22.54.14.11.4.21.78.21H9c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38-.66-.39-1.65-.62-2.81-.62s-2.15.23-2.81.62zM13.75 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1.5 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"/>
                                                </g>
                                                <path d="M13.75 12.25c-.23 0-.45.01-.68.03a.75.75 0 1 1-.14-1.49c.27-.03.54-.04.82-.04 1.34 0 2.6.27 3.56.82.98.56 1.69 1.47 1.69 2.68 0 .7-.28 1.3-.78 1.71-.48.39-1.1.54-1.72.54h-3a.75.75 0 0 1 0-1.5h3c.39 0 .64-.1.78-.21.12-.1.22-.25.22-.54 0-.54-.29-1-.94-1.38a5.77 5.77 0 0 0-2.81-.62z"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Друзья</span>
                                    <object type="internal/link">
                                        <Link to="/friends?section=requests" className="left_count_wrap fl_r left_void left_count_wrap_hovered">
                                            <span className="inl_bl left_count_sign">0</span>
                                        </Link>
                                    </object>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <li id="l_gr" className="">
                                <Link to={"/groups"} className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd"
                                                  d="M10 7.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM7.25 6.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0zm-.5 7.25c0-.42.23-.83.8-1.17A4.81 4.81 0 0 1 10 12c1.03 0 1.88.23 2.45.58.57.34.8.75.8 1.17 0 .3-.1.44-.22.54-.14.11-.4.21-.78.21h-4.5c-.39 0-.64-.1-.78-.21-.12-.1-.22-.25-.22-.54zM10 10.5c-1.22 0-2.37.27-3.23.8-.88.53-1.52 1.37-1.52 2.45 0 .7.28 1.3.78 1.71.48.39 1.1.54 1.72.54h4.5c.61 0 1.24-.15 1.72-.54.5-.4.78-1 .78-1.71 0-1.08-.64-1.92-1.52-2.45-.86-.53-2-.8-3.23-.8zm4-5.59c.06-.4.44-.7.85-.64a2.5 2.5 0 0 1-.35 4.98.75.75 0 0 1 0-1.5 1 1 0 0 0 .14-1.99.75.75 0 0 1-.63-.85zM15.76 10a.75.75 0 0 0 0 1.5c1.16 0 1.75.67 1.75 1.25 0 .22-.07.41-.19.55-.1.12-.24.2-.46.2a.75.75 0 0 0 0 1.5c1.43 0 2.15-1.21 2.15-2.25 0-1.71-1.6-2.75-3.25-2.75zM5 10.75a.75.75 0 0 0-.75-.75C2.61 10 1 11.04 1 12.75 1 13.79 1.72 15 3.15 15a.75.75 0 0 0 0-1.5.57.57 0 0 1-.47-.2.86.86 0 0 1-.18-.55c0-.58.6-1.25 1.75-1.25.41 0 .75-.34.75-.75zm.14-6.47a.75.75 0 0 1 .22 1.48 1 1 0 0 0 .14 1.99.75.75 0 1 1 0 1.5 2.5 2.5 0 0 1-.36-4.97z"
                                                  fill="currentColor" fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Сообщества</span>
                                    <span className="left_count_wrap fl_r left_void">
                                        <span className="inl_bl left_count_sign">0</span>
                                    </span>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <li id="l_ph" className="">
                                <Link to={"/albums"} className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd" d="M6.84 16.44c.76.06 1.74.06 3.16.06 1.42 0 2.4 0 3.16-.06a3.75 3.75 0 0 0 1.43-.32 3.5 3.5 0 0 0 1.53-1.53c.15-.29.26-.69.32-1.43l.03-.63-1.3-1.3c-.3-.3-.5-.5-.67-.64a.86.86 0 0 0-.27-.18.75.75 0 0 0-.46 0 .86.86 0 0 0-.27.18c-.16.13-.36.33-.67.64l-2.3 2.3a.75.75 0 0 1-1.06 0l-.3-.3c-.3-.3-.5-.5-.67-.64a.86.86 0 0 0-.27-.18.75.75 0 0 0-.46 0 .86.86 0 0 0-.27.18c-.16.13-.36.33-.67.64L4.56 15.5c.25.24.53.45.85.6.29.16.69.27 1.43.33zm9.39-6.27.27.27V10c0-1.42 0-2.4-.06-3.16a3.75 3.75 0 0 0-.32-1.43 3.5 3.5 0 0 0-1.53-1.53 3.75 3.75 0 0 0-1.43-.32A43.2 43.2 0 0 0 10 3.5c-1.42 0-2.4 0-3.16.06-.74.06-1.14.17-1.43.32a3.5 3.5 0 0 0-1.53 1.53c-.15.29-.26.69-.32 1.43A43.2 43.2 0 0 0 3.5 10c0 1.42 0 2.4.06 3.16.04.47.1.8.17 1.05l2.04-2.04.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.16.14.34.3.53.5l1.77-1.77.02-.02c.28-.28.52-.52.74-.7.23-.2.47-.37.77-.47.46-.15.94-.15 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7zM2.54 4.73C2 5.8 2 7.2 2 10c0 2.8 0 4.2.54 5.27a5 5 0 0 0 2.19 2.19C5.8 18 7.2 18 10 18c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.19-2.19C18 14.2 18 12.8 18 10c0-2.8 0-4.2-.55-5.27a5 5 0 0 0-2.18-2.19C14.2 2 12.8 2 10 2c-2.8 0-4.2 0-5.27.54a5 5 0 0 0-2.19 2.19zM7.25 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
                                                  fill="currentColor" fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Фотографии</span>
                                    <span className="left_count_wrap fl_r left_void">
                                        <span className="inl_bl left_count_sign">0</span>
                                    </span>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <li id="l_aud" className="">
                                <Link to={"/audios"} className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" d="M5.5 11a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75v-1A.75.75 0 0 1 5.5 11Zm3.75-.25a.75.75 0 0 0-1.5 0v2.75a.75.75 0 0 0 1.5 0v-2.75ZM14.5 10a.75.75 0 0 1 .75.76v2.8a.75.75 0 0 1-1.5-.01v-2.8a.75.75 0 0 1 .75-.75Zm-2.25-.74a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z"/>
                                            <path fill="currentColor" fillRule="evenodd"
                                                  d="M7.92 2c-.88 0-1.6 0-2.17.05a4.1 4.1 0 0 0-1.57.39 4 4 0 0 0-1.74 1.74 4.1 4.1 0 0 0-.4 1.57C2 6.33 2 7.04 2 7.92v4.16c0 .88 0 1.6.05 2.17.04.58.15 1.1.39 1.57a4 4 0 0 0 1.74 1.74c.48.24.99.35 1.57.4.58.04 1.29.04 2.17.04h4.16c.88 0 1.6 0 2.17-.05a4.1 4.1 0 0 0 1.57-.39 4 4 0 0 0 1.74-1.74c.24-.47.35-.99.4-1.57.04-.58.04-1.29.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 0 0-.39-1.57 4 4 0 0 0-1.74-1.74 4.1 4.1 0 0 0-1.57-.4C13.67 2 12.96 2 12.08 2H7.92ZM4.87 3.77c.22-.11.51-.19 1-.23.51-.04 1.16-.04 2.08-.04h4.1c.92 0 1.57 0 2.07.04.5.04.8.12 1.02.23a2.5 2.5 0 0 1 1.09 1.1c.11.22.19.51.23 1 .03.42.04.93.04 1.6-.38-.28-.85-.6-1.35-.9-1.04-.65-2.4-1.32-3.65-1.32-1.43 0-2.53.64-3.54 1.23l-.42.25A8.5 8.5 0 0 1 3.5 7.99v-.04c0-.92 0-1.57.04-2.07.04-.5.12-.8.23-1.01a2.5 2.5 0 0 1 1.1-1.1ZM3.5 9.5v2.55c0 .92 0 1.57.04 2.07.04.5.12.8.23 1.02a2.5 2.5 0 0 0 1.1 1.09c.22.11.51.19 1 .23.51.04 1.16.04 2.08.04h4.1c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.02-.23a2.5 2.5 0 0 0 1.09-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08V9.36a30.58 30.58 0 0 1-.17-.13c-.43-.33-1.14-.88-1.96-1.39a6.19 6.19 0 0 0-2.87-1.09c-1 0-1.73.42-2.77 1.02a70.79 70.79 0 0 1-.45.26A9.97 9.97 0 0 1 3.5 9.5Z"
                                                  clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Музыка</span>
                                    <span className="left_count_wrap fl_r left_void">
                                        <span className="inl_bl left_count_sign">0</span>
                                    </span>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <li id="l_vid" className="">
                                <Link to="/video" className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                                                <path d="M5.7 7.97a1.48 1.48 0 0 1 1.95-1.13c1.25.45 2.39 1.15 3.35 2.03.67.6.67 1.66 0 2.26-.96.88-2.1 1.58-3.34 2.03a1.48 1.48 0 0 1-1.96-1.13 10.49 10.49 0 0 1 0-4.06zm1.47.29A8.54 8.54 0 0 1 10 10.02h-.01a8.54 8.54 0 0 1-2.82 1.72 8.99 8.99 0 0 1 0-3.48z"/>
                                                <path d="M7.08 18h5.84c1.77 0 2.42-.18 3.07-.53A3.57 3.57 0 0 0 17.47 16c.35-.65.53-1.3.53-3.07V7.08c0-1.77-.18-2.42-.53-3.07A3.57 3.57 0 0 0 16 2.53c-.65-.35-1.3-.53-3.07-.53H7.08c-1.77 0-2.42.18-3.07.53-.64.34-1.14.84-1.48 1.48-.35.65-.53 1.3-.53 3.07v5.84c0 1.77.18 2.42.53 3.07.34.64.84 1.14 1.48 1.48.65.35 1.3.53 3.07.53zm4.04-14.46c-.5-.04-1.15-.04-2.07-.04H7.08c-1.66 0-2.02.17-2.36.35-.38.2-.67.5-.87.87-.18.34-.35.7-.35 2.36v5.84c0 1.66.17 2.02.35 2.36.2.38.5.67.87.87.34.18.7.35 2.36.35h1.97c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08v-4.1c0-.92 0-1.57-.04-2.07-.04-.5-.12-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1 2.65 2.65 0 0 0-1-.23zm4.16 12.61c-.23.12-.47.24-1.12.3a4 4 0 0 0 .4-.63c.24-.47.35-.99.4-1.57.04-.58.04-1.28.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 0 0-.39-1.57 4 4 0 0 0-.4-.63c.65.06.89.18 1.12.3.38.2.67.5.87.87.18.34.35.7.35 2.36v5.84c0 1.66-.17 2.02-.35 2.36-.2.38-.5.67-.87.87z"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Видео</span>
                                    <span className="left_count_wrap fl_r left_void">
                                        <span className="inl_bl left_count_sign">0</span>
                                    </span>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <li id="l_ap" className="">
                                <Link to="/apps" className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd"
                                                  d="M11.5 4h-3c-2.32 0-4.25.43-5.58 1.76S1.02 9.15 1 12c0 .8.05 1.99.46 3 .2.5.5 1.01.98 1.4.48.39 1.09.61 1.81.61.8 0 1.37-.33 1.81-.77.31-.31.58-.72.8-1.07l.17-.24c.28-.42.55-.76.91-1 .35-.24.82-.42 1.56-.42h1c.74 0 1.21.18 1.56.42.36.24.63.58.91 1l.16.24c.23.35.5.76.8 1.07.45.44 1.02.77 1.82.77a2.8 2.8 0 0 0 1.81-.61c.47-.39.78-.9.98-1.4.4-1.01.47-2.2.46-3-.02-2.84-.6-4.9-1.92-6.23C15.75 4.43 13.82 4 11.5 4zm-1 8h-1c-1.01 0-1.79.26-2.4.68-.6.4-1 .94-1.31 1.4l-.23.34c-.21.32-.37.56-.57.76a.95.95 0 0 1-.74.32c-.4 0-.67-.12-.87-.28a1.9 1.9 0 0 1-.53-.79 6.82 6.82 0 0 1-.35-2.42c.02-2.71.57-4.28 1.48-5.19.91-.9 2.34-1.32 4.52-1.32h3c2.18 0 3.61.42 4.52 1.32.9.91 1.46 2.48 1.48 5.19 0 .75-.06 1.7-.35 2.42a1.9 1.9 0 0 1-.53.8c-.2.15-.47.27-.87.27a.95.95 0 0 1-.74-.32c-.2-.2-.36-.44-.57-.76l-.23-.34c-.3-.46-.7-1-1.3-1.4A4.13 4.13 0 0 0 10.5 12zM7.25 7.5a.75.75 0 0 0-1.5 0v.75H5a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75H8a.75.75 0 0 0 0-1.5h-.75zm5.25.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
                                                  fill="currentColor" fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Игры</span>
                                    <object type="internal/link">
                                        <Link to="/apps?act=profile&amp;ref=left_menu" className="left_count_wrap fl_r left_void left_count_wrap_hovered">
                                            <span className="inl_bl left_count_sign">0</span>
                                        </Link>
                                    </object>
                                </Link>
                                <div className="left_settings" >
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                            <div className="more_div l_main"/>
                            <div className="more_div"/>
                            <li id="l_ads" className="">
                                <Link to={"/ads"}
                                   className="left_row">
                                    <div className="LeftMenu__icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M16.8 3.96a.87.87 0 0 0-.66.12l-.01.01-3.63 2.3v6.21l3.64 2.3a.88.88 0 0 0 1.1-.12.94.94 0 0 0 .27-.66V4.88a.95.95 0 0 0-.14-.51.9.9 0 0 0-.56-.4zM11 12.54V6.46H5.48c-.82 0-1.56.34-2.1.89a3.06 3.06 0 0 0-.86 2.15c0 .84.33 1.6.87 2.15a2.92 2.92 0 0 0 2.09.88H11zm.96-7.57 3.36-2.13a2.37 2.37 0 0 1 1.82-.33 2.4 2.4 0 0 1 1.5 1.07c.24.4.37.85.37 1.3v9.25c0 .66-.26 1.27-.7 1.71a2.38 2.38 0 0 1-2.99.34l-3.37-2.14h-2.3l.19 1.04a2.43 2.43 0 0 1-.42 1.85 2.52 2.52 0 0 1-3.47.6 2.46 2.46 0 0 1-1.03-1.59l-.36-2a4.44 4.44 0 0 1-2.24-1.23 4.56 4.56 0 0 1-1.3-3.2c0-1.25.5-2.38 1.3-3.2a4.42 4.42 0 0 1 3.16-1.34h6.48zM6.1 14.03l.3 1.64a.96.96 0 0 0 .4.62 1.02 1.02 0 0 0 1.4-.24.93.93 0 0 0 .16-.71l-.23-1.31H6.1z"
                                                  fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <span className="left_label inl_bl">Реклама</span>
                                    <span className="left_count_wrap fl_r left_void"><span
                                        className="inl_bl left_count_sign">0</span></span>
                                </Link>
                                <div className="left_settings">
                                    <div className="left_settings_inner"/>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div id="left_blocks"/>
                </div>
            </div>
        </>
    )
}
export default Sidebar