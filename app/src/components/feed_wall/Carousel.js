
import {Link} from "react-router-dom";
import React from "react";

const Carousel = ({image, id}) => {
    const isActive = index => {
        if(index === 0) return "PagePostLimitedThumbsContainer__background";
    }
    return(
        <>
            <div className={"PagePostLimitedThumbsContainer PostNoBottomSpaceAttach"}>
                <Link to={""} aria-label="фотография" className={"PagePostLimitedThumbLink"}>
                    {
                        image.map((img,index) => (
                            <div className={isActive(index)}
                                 key={index} data-target={`#image${id}`} />
                        ))
                    }
                    {
                        image.map((img, index) => (
                            <div key={index}>
                                {
                                    img.image.match(/video/i)
                                    ?<video controls src={img.image} className={"PagePostLimitedThumb"}/>
                                    :<img className={"PagePostLimitedThumb"} alt={img.image} src={"https://res.cloudinary.com/localhostsite/image/upload/v1662422064/avatars/7f2f12ccf6a2c2feb195094a6f28c00d.jpg"} />
                                }
                            </div>
                        ))
                    }
                </Link>
            </div>
        </>
    )
}
export default Carousel