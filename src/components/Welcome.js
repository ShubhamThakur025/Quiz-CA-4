import React from 'react'

function Welcome(props) {
    return (
        <>
            <div className='top-section'>
                <h1 className='title'>WELCOME</h1>
                <p className='sub-title'>Test your React knowledge instantly!</p>
            </div>
            <button id = "playBtn" onClick={() => props.handleClick()}>Play Quiz!</button>
            <footer>
                <div>Developed & Designed by:</div>
                <div id="creator-name">Shubham Thakur</div>
            </footer>
        </>
    )
}

export default Welcome
