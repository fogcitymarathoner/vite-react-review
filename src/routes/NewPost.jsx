import classes from './NewPost.module.css';

import Modal from "../components/Modal.jsx";
import {Link, Form, redirect} from "react-router-dom";

function NewPost() {

    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="name" id="author" name="author" required/>
                </p>
                <p className={classes.actions}>
                    <Link to=".." type="button">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}) {
    const formData = await request.formData()
    const postData = Object.fromEntries(formData)  // {k:v...}
    console.log(postData)
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {'Content-Type': 'application/json'}
    })
    return redirect('/')
}