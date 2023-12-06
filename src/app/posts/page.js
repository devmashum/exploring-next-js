import React from 'react';
import style from './Post.module.css';

const PostPage  = async () => {
    const res = await fetch("http://localhost:5000/posts")

    const posts = await res.json();
    console.log(posts)

    return (
        <div className={style.header_text}>
            total post: {posts.length}
        </div>
    );
};

export default PostPage ;