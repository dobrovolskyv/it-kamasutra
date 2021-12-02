import React from "react";
import s from "./Friends.module.css"

const Friends = () => {
    return (
        <div className={s.friends}>
            <div className='friend'>
                <div className='friendName'>Alex</div>
                <div className={s.friendAvatare}>
                    <img src="https://media1.popsugar-assets.com/files/thumbor/MzvXHf8nPs7dDMpZcmuyXxFWrVk/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/01/08/691/n/1922398/d00b278d5c34c37b4aebd5.04082562_/i/Actors-You-Thought-Were-American.jpg" alt="" />
                </div>
            </div>
            <div className={s.friend}>
                <div className='friendName'>Anton</div>
                <div className={s.friendAvatare}>
                    <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F968210608%2F960x0.jpg%3Ffit%3Dscale" alt="" />
                </div>
            </div>
            <div className={s.friend}>
                <div className='friendName'>Vova</div>
                <div className={s.friendAvatare}>
                    <img src="https://img3.goodfon.com/wallpaper/nbig/0/44/leonardo-dicaprio-actor.jpg" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Friends;