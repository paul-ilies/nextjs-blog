import AllPosts from "../../components/posts/AllPosts";
import { getFeaturedPosts } from "../../lib/posts-util";
import Head from "next/head";


function AllPostsPage(props) {


    return (
        <>
            <Head>
                <title>My blog posts</title>
            </Head>
            <AllPosts posts={props.posts} />

        </>
    )
}

export const getStaticProps = () => {
    const posts = getFeaturedPosts()
    return {
        props: {
            posts
        }
    }
}
export default AllPostsPage;