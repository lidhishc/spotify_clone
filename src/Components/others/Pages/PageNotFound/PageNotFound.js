import React from 'react'
import './page.css'
function PageNotFound() {
    return (
        <React.Fragment>
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>4<span>0</span>4</h1>
                    </div>
                    <p style={{ margin: '4rem 0 2rem 0' }}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <a href="/">Home page</a>
                </div>
            </div>
        </React.Fragment >

    )
}

export default PageNotFound
