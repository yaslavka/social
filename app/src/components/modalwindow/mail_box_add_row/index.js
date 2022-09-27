import React, {useState} from "react";

const Mailboxaddrow = () => {
    const [so, setSo]=useState(false)
    return(
        <>
            <div className="fl_l" id="mail_box_add_row">
                <span className="link add_media_lnk" id="mail_box_add_link">
                    <div className="media_selector clear_fix">
                        <a className="ms_item ms_item_photo _type_photo" tabIndex="0" data-title="Фотография" aria-label="Фотография" role="link">
                            <span className="MediaSelector__mediaIcon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M5.5 5.5c.57 0 1-.2 1.34-.52.24-.24.43-.54.55-.74l.06-.1c.15-.23.26-.37.39-.47.11-.08.3-.17.66-.17h3c.36 0 .55.09.66.17.13.1.24.24.4.48l.05.09c.12.2.3.5.55.74.33.32.77.52 1.34.52.73 0 .99 0 1.19.04.9.18 1.59.88 1.77 1.77.04.2.04.46.04 1.19v3.45c0 .85 0 1.45-.04 1.9-.04.46-.1.72-.2.92-.22.42-.57.77-.99.98-.2.1-.46.17-.91.21-.46.04-1.06.04-1.91.04h-6.9c-.85 0-1.45 0-1.91-.04a2.4 2.4 0 0 1-.91-.2 2.25 2.25 0 0 1-.99-.99 2.4 2.4 0 0 1-.2-.91c-.04-.46-.04-1.06-.04-1.91V8.5c0-.73 0-.99.04-1.19.18-.9.88-1.59 1.77-1.77.2-.04.46-.04 1.19-.04zm3-3.5c-.64 0-1.14.16-1.54.46-.39.27-.62.63-.78.9l-.08.11c-.13.22-.2.34-.3.43-.06.05-.12.1-.3.1h-.09c-.61 0-1.03 0-1.4.07a3.75 3.75 0 0 0-2.94 2.95C1 7.38 1 7.8 1 8.42v3.56c0 .81 0 1.47.04 2 .05.55.14 1.03.37 1.47.36.7.93 1.28 1.64 1.64.44.23.92.32 1.47.37.53.04 1.18.04 2 .04H13.48c.81 0 1.47 0 2-.04a3.84 3.84 0 0 0 1.47-.37c.7-.36 1.28-.93 1.64-1.64.23-.44.32-.92.37-1.47.04-.53.04-1.19.04-2V8.41c0-.61 0-1.03-.07-1.4a3.75 3.75 0 0 0-2.95-2.94 7.5 7.5 0 0 0-1.4-.07h-.08c-.18 0-.24-.05-.3-.1-.1-.1-.17-.2-.3-.43l-.08-.12c-.16-.26-.4-.62-.78-.9-.4-.29-.9-.45-1.54-.45zm3.75 8.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" fill="currentColor" fillRule="evenodd"/>
                                </svg>
                            </span>
                            <span className="blind_label">Фотография</span>
                        </a>
                        <a className="ms_item ms_item_video _type_video" tabIndex="0" data-title="Видеозапись" aria-label="Видеозапись" role="link">
                            <span className="MediaSelector__mediaIcon">
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-8.5-7a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0zm8.65 3.38 2.7-1.56a2.1 2.1 0 0 0 0-3.64l-2.7-1.56A2.1 2.1 0 0 0 7 8.44v3.12a2.1 2.1 0 0 0 3.15 1.82zm1.95-3.9c.4.23.4.8 0 1.04l-2.7 1.56a.6.6 0 0 1-.9-.52V8.44c0-.46.5-.75.9-.52z" fill="currentColor" fillRule="evenodd"/>
                                </svg>
                            </span>
                            <span className="blind_label">Видеозапись</span>
                        </a>
                        <a className="ms_item ms_item_audio _type_audio" tabIndex="0" data-title="Аудиозапись" aria-label="Аудиозапись" role="link">
                            <span className="MediaSelector__mediaIcon">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <g id="music_outline_20__Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="music_outline_20__Icons-20/music_outline_20">
                                        <g id="music_outline_20__music_outline_20">
                                            <path d="M0 0h20v20H0z"/>
                                            <path d="M14.73 2.05a2.28 2.28 0 0 1 2.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54ZM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37Zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37Zm-.02-7.78a.78.78 0 0 0-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 0 0-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67V4.2Z" id="music_outline_20__Icon-Color" fill="currentColor" fillRule="nonzero"/>
                                        </g>
                                    </g>
                                    </g>
                                </svg>
                            </span>
                            <span className="blind_label">Аудиозапись</span>
                        </a>
                        <div className={so?"ms_items_more_wrap to_down shown":"ms_items_more_wrap to_down"} onClick={()=>setSo(!so)}>
                            <a className="ms_item_more" tabIndex="0" role="button" aria-label="Ещё">
                                <span className="ms_item_more_label">
                                    Ещё
                                    <span className="MediaSelector__moreIcon">
                                        <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
                                            <path clipRule="evenodd" d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z" fill="currentColor" fillRule="evenodd"/>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                            <div className="ms_items_more_helper">
                                <div className="ms_items_more _more_items">
                                    <a className="ms_item ms_item_money _type_money" tabIndex="0">
                                        <span className="MediaSelector__mediaIcon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.62 2.5h6.76c.99 0 1.65 0 2.21.16a4.05 4.05 0 0 1 2.75 2.75c.16.56.16 1.22.16 2.2v3.18a.75.75 0 0 1-1.5 0V8.5H3v1.47c0 .94 0 1.6.04 2.1.04.51.12.8.24 1.04.24.48.63.87 1.11 1.11.23.12.53.2 1.03.24.52.04 1.17.04 2.11.04H17a.75.75 0 1 1 0 1.5H7.5c-.9 0-1.62 0-2.2-.05a4.2 4.2 0 0 1-1.59-.4 4.05 4.05 0 0 1-1.77-1.76c-.24-.48-.34-1-.4-1.6-.04-.57-.04-1.3-.04-2.19V7.62c0-.99 0-1.65.16-2.21a4.05 4.05 0 0 1 2.75-2.75c.56-.16 1.22-.16 2.2-.16ZM3 7h14c-.01-.63-.03-.92-.1-1.17a2.55 2.55 0 0 0-1.73-1.73c-.33-.1-.75-.1-1.92-.1h-6.5c-1.17 0-1.6 0-1.92.1A2.55 2.55 0 0 0 3.1 5.83C3.03 6.08 3 6.37 3 7Z" clipRule="evenodd"/>
                                                <path fillRule="evenodd" d="M14.72 12.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                                            </svg>
                                        </span>Деньги
                                    </a>
                                    <a className="ms_item ms_item_gift _type_gift" tabIndex="0">
                                        <span className="MediaSelector__mediaIcon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <g id="gift_outline_20__Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="gift_outline_20__Icons-20/gift_outline_20">
                                                        <g id="gift_outline_20__gift_outline_20">
                                                            <path d="M0 0h20v20H0z"/>
                                                            <path d="M14.85 2.31c1.02 1.03 1.23 2.88-.26 4.19h.91a3 3 0 0 1 3 3v.5c0 .82-.1 1.15-.27 1.48a1.88 1.88 0 0 1-1.23.94v1.61c0 1.56-.16 2.13-.47 2.7-.3.57-.75 1.02-1.32 1.32l-.2.1c-.48.23-1.04.35-2.23.37h-5.3c-1.55 0-2.12-.16-2.69-.47a3.18 3.18 0 0 1-1.32-1.32l-.1-.2A5.12 5.12 0 0 1 3 14.3V12.4a1.88 1.88 0 0 1-1.23-.93c-.16-.3-.25-.6-.27-1.3V9.5a3 3 0 0 1 3-3h.91c-1.49-1.31-1.28-3.16-.26-4.19C6.37 1.1 8.74 1.04 10 3.57c1.26-2.53 3.63-2.47 4.85-1.26ZM9.25 12.5H4.5v1.76l.01.4c.02.6.08.92.2 1.2l.08.16c.17.31.4.54.7.71l.17.08c.33.14.72.2 1.6.2h1.99V12.5Zm6.25 0h-4.75v4.52h2l.4-.01c.6-.02.91-.08 1.19-.2l.16-.08c.31-.17.54-.4.71-.7.19-.36.27-.7.29-1.56V12.5ZM9.16 8H4.5C3.67 8 3 8.67 3 9.5v.87c.02.23.04.31.09.4.03.06.08.1.14.14.11.06.22.08.63.09h5.39V8h-.09Zm6.34 0h-4.76v3h5.4c.4 0 .52-.03.63-.09.06-.03.1-.08.14-.14.06-.12.09-.25.09-.78V9.5c0-.83-.67-1.5-1.5-1.5ZM9.22 6.16c-.43-3.1-1.96-3.83-3-2.79C5.16 4.42 5.9 5.95 9 6.38l.26.04Zm1.56 0-.03.19.01.06.24-.03c3.1-.43 3.83-1.96 2.79-3-1.05-1.05-2.58-.32-3.01 2.78Z" id="gift_outline_20__Icon-Color" fill="currentColor" fillRule="nonzero"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>Подарок</a>
                                    <a className="ms_item ms_item_doc _type_doc" tabIndex="0">
                                        <span className="MediaSelector__mediaIcon">
                                            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                                <path clipRule="evenodd" d="M17.2 6.78a2 2 0 0 1 .24.58c.06.23.06.48.06.97v2.97c0 2.52 0 3.78-.49 4.74a4.5 4.5 0 0 1-1.97 1.97c-.96.49-2.22.49-4.74.49h-.6c-2.52 0-3.78 0-4.74-.49a4.5 4.5 0 0 1-1.97-1.97c-.49-.96-.49-2.22-.49-4.74V8.7c0-2.52 0-3.78.49-4.74a4.5 4.5 0 0 1 1.97-1.97c.96-.49 2.22-.49 4.74-.49h.97c.5 0 .74 0 .97.06.2.04.4.13.58.23.2.13.37.3.72.65l3.62 3.62c.35.35.52.52.65.72zM10.3 17h-.6c-1.28 0-2.16 0-2.83-.06-.66-.05-1-.15-1.23-.27a3 3 0 0 1-1.31-1.3 3.24 3.24 0 0 1-.27-1.24C4 13.46 4 12.58 4 11.3V8.7c0-1.28 0-2.16.06-2.83.05-.66.15-1 .27-1.23a3 3 0 0 1 1.3-1.31c.24-.12.58-.22 1.24-.27C7.54 3 8.42 3 9.7 3h.3v1.28c0 .67 0 1.23.04 1.67.03.47.12.88.31 1.28.32.6.81 1.1 1.42 1.42.4.2.81.28 1.28.31.44.04 1 .04 1.67.04H16v2.3c0 1.28 0 2.16-.06 2.83-.05.66-.15 1-.27 1.23a3 3 0 0 1-1.3 1.31c-.24.12-.58.22-1.24.27-.67.06-1.55.06-2.83.06zm5.57-9.5h-1.12c-.71 0-1.2 0-1.58-.03a1.88 1.88 0 0 1-.71-.16c-.33-.17-.6-.44-.77-.77a1.88 1.88 0 0 1-.16-.7 21.6 21.6 0 0 1-.03-1.59V3.13l.01.01.37.36 3.62 3.62.36.37.01.01z" fill="currentColor" fillRule="evenodd"/>
                                            </svg>
                                        </span>Файл
                                    </a>
                                    <a className="ms_item ms_item_map _type_map" tabIndex="0">
                                        <span className="MediaSelector__mediaIcon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <g id="place_outline_20__Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="place_outline_20__Icons-20/place_outline_20">
                                                        <g id="place_outline_20__place_outline_20">
                                                            <path opacity=".4" d="M0 0h20v20H0z"/>
                                                            <path d="M10 1c4.15 0 7.5 3.43 7.5 7.5 0 2.85-1.84 6.17-5.43 10.1a2.8 2.8 0 0 1-4.14 0C4.34 14.66 2.5 11.34 2.5 8.5 2.5 4.43 5.85 1 10 1Zm0 1.5c-3.38 0-6 2.83-6 6 0 2.38 1.68 5.41 5.04 9.08a1.3 1.3 0 0 0 1.92 0C14.32 13.91 16 10.88 16 8.5c0-3.17-2.62-6-6-6ZM10 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" id="place_outline_20__Icon-Color" fill="currentColor" fillRule="nonzero"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>Карта
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
                <div className="tt_w tt_black tt_down"
                     style={{position: "absolute", opacity: "1", top: "-26.4091px", left: "55.9716px", pointerEvents: "auto", display: "none"}}>
                    <div className="tt_text">Аудиозапись</div>
                </div>
            </div>
        </>
    )
}
export default Mailboxaddrow