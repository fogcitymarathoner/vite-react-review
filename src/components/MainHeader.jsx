import {MdPostAdd, MdMessage} from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage/>
                React Poster
            </h1>
            <p>
                <link to="/create-post" className={classes.button}>
                    <MdPostAdd size={18}/>
                    New Post
                </link>
            </p>
        </header>
    );
}

export default MainHeader;