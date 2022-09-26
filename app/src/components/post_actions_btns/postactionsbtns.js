import React from "react";

const Postactionsbtns = ({eltt_vis, setEltt_vis, elttvis, setElttvis}) => {
    return(
        <>
            <div className="post_actions_btns" id="post_actions_btns">
                <div className="post_action_btn post_available" id="post_visibility_btn">
                    <div className="post_action_btn_layout" onClick={()=>setEltt_vis(true)}>
                        <span className="post_action_btn_text" role={"button"} aria-label="Видно всем">Видно всем</span>
                        <span className="post_action_image_btn" >
                            <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z" fill="currentColor" fillRule="evenodd"/>
                            </svg>
                        </span>
                    </div>
                    <div className={eltt_vis?"eltt eltt_fancy eltt_fancy_actions eltt_arrow_size_normal eltt_align_left eltt_bottom eltt_vis":"eltt eltt_fancy eltt_fancy_actions eltt_arrow_size_normal eltt_align_left eltt_bottom"}
                         onMouseLeave={()=>setEltt_vis(false)}
                         style={{display:`${eltt_vis? "block":"none"}` ,left:"-12px", top:"30px"}}>
                        <div className={"eltt_arrow_back _eltt_arrow_back"} style={{marginLeft:"35px"}}>
                            <div className="eltt_arrow"/>
                        </div>
                        <div className="eltt_content _eltt_content">
                            <div className="post_action_tt_content" id="post_visibility_tt_content" style={{display:"block"}}>
                                <div className="FancyElementTT__item radiobtn name_no_friends_only"
                                     id="no_friends_only"
                                     name="friends_only"
                                     data-value="1"
                                     aria-checked
                                     aria-label="Видно друзьям"
                                     role={"radio"}>
                                    <div className="FancyElementTT__itemLabel">Видно друзьям</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn name_friends_only"
                                     role={"radio"}
                                     id="friends_only"
                                     name="friends_only"
                                     data-value="1"
                                     aria-checked
                                     aria-label="Видно друзьям">
                                    <div className="FancyElementTT__itemLabel">Видно друзьям</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn name_best_friends_only"
                                     role={"radio"}
                                     id="best_friends_only"
                                     name="best_friends_only"
                                     data-value="2"
                                     aria-checked
                                     aria-label="<div class=&quot;PostVisibilityBestFriendsOnlyOption&quot; data-count=&quot;0&quot;>Выбрать близких друзей</div>"
                                     >
                                    <div className="FancyElementTT__itemLabel">
                                        <div className="PostVisibilityBestFriendsOnlyOption" data-count="0">
                                            Выбрать близких друзей
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post_action_btn" id="post_discover_category_btn">
                    <div className="post_action_btn_layout" onClick={()=>setElttvis(true)}>
                        <span className="post_action_btn_text"
                              role={"button"}
                              aria-label="Тематика"
                              data-empty="Тематика">
                            Тематика
                        </span>
                        <span className="post_action_image_btn">
                            <svg fill="none" height="8" viewBox="0 0 12 8" width="12" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z" fill="currentColor" fillRule="evenodd"/>
                            </svg>
                        </span>
                    </div>
                    <div className={elttvis?"eltt eltt_fancy eltt_fancy_actions eltt_arrow_size_normal eltt_align_left eltt_bottom eltt_vis":"eltt eltt_fancy eltt_fancy_actions eltt_arrow_size_normal eltt_align_left eltt_bottom"}
                         onMouseLeave={()=>setElttvis(false)}
                        id="" style={{display:`${elttvis? "block":"none"}` ,left:"-12px", top:"30px"}}>
                        <div className="eltt_arrow_back _eltt_arrow_back" style={{marginLeft: "111px"}}>
                            <div className="eltt_arrow"/>
                        </div>
                        <div className="eltt_content _eltt_content">
                            <div className="post_action_tt_content" style={{display: "block"}}>
                                <div className="FancyElementTT__item radiobtn on"
                                     role={"radio"}
                                     aria-label="Не выбрано"
                                     /*{data - click - params = "{&quot;label&quot;:&quot;Не выбрано&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:-1}"*/
                                     /*    data-onclick="togglePostTopic"} */
                                     data-value="-1"
                                     aria-checked={true} tabIndex="0">
                                    <span className="FancyElementTT__checkIcon">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.74 3.76c.35.34.35.9 0 1.23l-7.31 7.25a.88.88 0 0 1-1.25 0L2.26 9.36a.87.87 0 0 1 0-1.23.88.88 0 0 1 1.24 0l2.3 2.26 6.7-6.63a.88.88 0 0 1 1.24 0Z" fill="currentColor"/>
                                        </svg>
                                    </span>
                                    <div className="FancyElementTT__itemLabel">Не выбрано</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Арт"
                                     data-click-params="{&quot;label&quot;:&quot;Арт&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:1}"
                                     data-onclick="togglePostTopic" data-value="1" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Арт</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="IT"
                                     data-click-params="{&quot;label&quot;:&quot;IT&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:7}"
                                     data-onclick="togglePostTopic" data-value="7" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">IT</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Игры"
                                     data-click-params="{&quot;label&quot;:&quot;Игры&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:12}"
                                     data-onclick="togglePostTopic" data-value="12" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Игры</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Музыка"
                                     data-click-params="{&quot;label&quot;:&quot;Музыка&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:16}"
                                     data-onclick="togglePostTopic" data-value="16" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Музыка</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Фото"
                                     data-click-params="{&quot;label&quot;:&quot;Фото&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:19}"
                                     data-onclick="togglePostTopic" data-value="19" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Фото</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Наука"
                                     data-click-params="{&quot;label&quot;:&quot;Наука&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:21}"
                                     data-onclick="togglePostTopic" data-value="21" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Наука</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Спорт"
                                     data-click-params="{&quot;label&quot;:&quot;Спорт&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:23}"
                                     data-onclick="togglePostTopic" data-value="23" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Спорт</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Туризм"
                                     data-click-params="{&quot;label&quot;:&quot;Туризм&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:25}"
                                     data-onclick="togglePostTopic" data-value="25" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Туризм</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Кино"
                                     data-click-params="{&quot;label&quot;:&quot;Кино&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:26}"
                                     data-onclick="togglePostTopic" data-value="26" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Кино</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Юмор"
                                     data-click-params="{&quot;label&quot;:&quot;Юмор&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:32}"
                                     data-onclick="togglePostTopic" data-value="32" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Юмор</div>
                                </div>
                                <div className="FancyElementTT__item radiobtn" role="radio" aria-label="Стиль"
                                     data-click-params="{&quot;label&quot;:&quot;Стиль&quot;,&quot;linkId&quot;:&quot;&quot;,&quot;value&quot;:43}"
                                     data-onclick="togglePostTopic" data-value="43" aria-checked="false" tabIndex="-1">

                                    <div className="FancyElementTT__itemLabel">Стиль</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Postactionsbtns