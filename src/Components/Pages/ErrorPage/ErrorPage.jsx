import React from 'react';
import './ErrorPage.css'

const ErrorPage = () => {
    const currentURL = window.location.href;

    return (
        <div className='Error_Page'>
            <div className="block_info_E">
                <div className="title">Error 404</div>
                <div className="info">{"Not found page: " + currentURL} </div>
            </div>

        </div>
    );
}

export default ErrorPage;
