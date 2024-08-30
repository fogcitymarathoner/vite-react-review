import Post from "./Post.jsx";
import classes from "./PostsList.module.css"
export default function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="Marc" body="post 1"/>
            <Post author="Sancho" body="post 2"/>
        </ul>
    )
}