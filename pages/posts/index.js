import AllPosts from "../../components/posts/AllPosts";

function AllPostsPage() {

    const DUMMY_POSTS = [
        {
            slug: "getting-started-with-next-js",
            title: "hello world",
            image: "getting-started-nextjs.png",
            excerpt: "lorem ips",
            date: "2022-02-03"

        }
    ]
    return <AllPosts posts={DUMMY_POSTS
    } />

}
export default AllPostsPage;