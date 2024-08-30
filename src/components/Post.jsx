import classes from './Post.module.css';
function Post({author, body}) {
    return (
        <div className={classes.post}>
            <main className={classes.details}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{body}</p>
            </main>
        </div>
    )
}

export default Post