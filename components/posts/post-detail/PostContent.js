import React from 'react'
import classes from "./post-content.module.css";
import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown'


const PostContent = (props) => {
    const { post } = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown children={post.content} />

        </article>
    )
}

export default PostContent