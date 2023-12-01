import React from 'react'
import css from './css/Content.module.css';

function PostItem(props) {

    const post = props.post

    return (
        <div className={css.SearchItem}>
            <p>{post.title}</p>
            <p>{post.name}</p>
            <img src={post.image}></img>
            <p>{post.description}</p>
        </div>
    )

}

export default PostItem