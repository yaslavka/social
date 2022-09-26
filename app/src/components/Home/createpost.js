import React from "react";
import Inputaus from "../inputaus/inputaus";
import LoadIcon from '../../images/loading.gif'
import Feedwall from "../feed_wall/indrx";
const Createpostnews =
    ({
         auth, shown, setHhown,
         dropbox_over, setDropbox_over,
         eltt_vis, setEltt_vis,
         elttvis, setElttvis,
         zIndex, setZIndex,
         setings, setSetings,
         checkbox, setCheckbox,
         posterbtn, setPosterbtn,
         frinds, setFrinds, cam, setCam, vid, setVid, muz, setMuz,
         addmedia, setAddmedia,
        setPostaction, postaction, discover, handleLoadMore, load, setLoad
     }) => {
        return (
            <>
                <div className="wide_column_wrap" style={{width:"69%", marginTop:"0px", marginRight:"50%"}} >
                    <div className="wide_column" id="wide_column">
                        <div id="main_feed" className="feed_wrap feed_submit_shown zoom_text_active mark_top_verified">
                            <Inputaus shown={shown} setHhown={setHhown}
                                      elttvis={elttvis} setElttvis={setElttvis}
                                      zIndex={zIndex} setZIndex={setZIndex}
                                      posterbtn={posterbtn} setPosterbtn={setPosterbtn}
                                      setings={setings} setSetings={setSetings}
                                      dropbox_over={dropbox_over} setDropbox_over={setDropbox_over}
                                      eltt_vis={eltt_vis} setEltt_vis={setEltt_vis}
                                      checkbox={checkbox} setCheckbox={setCheckbox}
                                      frinds={frinds} setFrinds={setFrinds}
                                      cam={cam} setCam={setCam}
                                      vid={vid} setVid={setVid}
                                      muz={muz} setMuz={setMuz}
                                      addmedia={addmedia} setAddmedia={setAddmedia}
                                      auth={auth}/>
                            <div id="feed_recommends"/>
                            {
                                discover.loading
                                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                                    :<Feedwall postaction={postaction} setPostaction={setPostaction}
                                               handleLoadMore={handleLoadMore} load={load} setLoad={setLoad}

                                               result={discover.result}  posts={discover.posts}/>
                            }
                        </div>
                    </div>
                </div>

            </>
        )
    }
export default Createpostnews