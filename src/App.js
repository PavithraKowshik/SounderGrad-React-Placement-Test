import React from 'react';
import './App.css';


import Slides from './components/Slides';

const title = "Slideshow App";

function App({slides}) {

    return (
        <div>
            <navbar header={title}/>
            <div className="App">
                <Slides
                    slides={slides}/>
            </div>
        </div>
    );
}
export default App;
