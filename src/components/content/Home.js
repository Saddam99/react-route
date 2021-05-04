import React from 'react';
import {useHistory} from "react-router-dom";


function Home() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/learn-more');
    }

    return (
        <div>
            <h1>Cover your page.</h1>
            <p>
                Cover is a one-page template for building simple and beautiful home
                pages. Download, edit the text, and add your own fullscreen <br/>
                background photo to make it your own.
            </p>
                <button onClick={handleClick}>Learn more</button>
        </div>
    );
}

export default Home;