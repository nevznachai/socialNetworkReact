import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://moslenta.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2019/09/11/10/3557697/f208048568180a1979582025bf9cf5ef1572ea11.jpg' />
            {props.message}
            <div>
                <span> like </span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;