import FeaturedPosts from "../components/homepage/FeaturedPosts";
import Hero from "../components/homepage/Hero";

function Homepage() {
    const DUMMY_POSTS = [
        {
            slug: "getting-started-with-next-js",
            title: "hello world",
            image: "getting-started-nextjs.png",
            excerpt: "lorem ips",
            date: "2022-02-03"

        }
    ]
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    )
}
export default Homepage;