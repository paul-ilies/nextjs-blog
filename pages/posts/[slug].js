import PostContent from "../../components/posts/post-detail/PostContent";
import Head from "next/head";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function SinglePostPage(props) {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
            </Head>
            <PostContent post={props.post} />
        </>

    )
}


export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFilesNames = getPostsFiles()
    const slugs = postFilesNames.map(fileName => fileName.replace(/\.[^/.]+$/, ""))

    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false
    }
}
export default SinglePostPage;