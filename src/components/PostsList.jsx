
import {useLoaderData} from "react-router-dom";
import Post from "./Post.jsx";
import classes from "./PostsList.module.css"

export default function PostsList() {
    const posts = useLoaderData()

    function addPostHandler(postData) {

        setPosts((existingPosts) => [postData, ...existingPosts])
    }

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post author={post.author} body={post.body}/>)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    )
}