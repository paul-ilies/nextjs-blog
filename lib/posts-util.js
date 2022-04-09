import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "content");
export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory)
}
export function getPostData(fileName) {
    const postSlug = fileName.replace(/\.[^/.]+$/, "")//removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug
        }.md`)
    const fileContent = fs.readFileSync(filePath, "utf-8")

    //destructuring the objects from matter
    const { data, content } = matter(fileContent)
    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData
}

export function getAllPosts() {
    const postFiles = getPostsFiles()

    const allPosts = postFiles.map(postFile => getPostData(postFile))
    const sortedArray = allPosts.sort((a, b) => a.date > b.date ? -1 : 1)
    return sortedArray
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}