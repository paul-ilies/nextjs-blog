import FeaturedPosts from "../components/homepage/FeaturedPosts";
import Hero from "../components/homepage/Hero";
import Head from "next/head"
import { getFeaturedPosts } from "../lib/posts-util"


function Homepage(props) {
    console.log(props.posts)
    return (
        <>
            <Head>
                <title>Welcome to my blog</title>
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    )
}
export const getStaticProps = async () => {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 60
    }
}
export default Homepage;