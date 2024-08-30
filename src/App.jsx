import {useState} from 'react'
import PostsList from "./components/PostsList.jsx";
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <PostsList/>
            </div>
        </>
    )
}

export default App
