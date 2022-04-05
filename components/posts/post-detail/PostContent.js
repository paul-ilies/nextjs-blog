import React from 'react'
import classes from "./post-content.module.css";
import PostHeader from './PostHeader';

const DUMMY = {
    slug: "getting-started-with-next-js",
    title: "hello world",
    image: "getting-started-nextjs.png",
    excerpt: "lorem ips",
    date: "2022-02-03",
    content: "# This is a first post"

}
const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY.slug}/${DUMMY.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY.title} image={imagePath} />
            {DUMMY.content}
        </article>
    )
}

export default PostContent