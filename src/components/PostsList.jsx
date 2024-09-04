import {useEffect, useState} from "react";
import Post from "./Post.jsx";
import classes from "./PostsList.module.css"

export default function PostsList() {
    const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true)
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json()
            setPosts(resData.posts)
            setIsFetching(false)
        }
        fetchPosts()
        console.log('fetchPosts')
    }, [])

    function addPostHandler(postData) {
        fetch('http://localhost:8080/post', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {'Content-Type': 'application/json'}
        })
        setPosts((existingPosts) => [postData, ...existingPosts])
    }

    return (
        <>
            {isFetching &&
                <div style={{ textAlign: "center" , color: "white"}}>
<p>Loading posts...</p>
                </div>
            }
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post author={post.author} body={post.body}/>)}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    )
}