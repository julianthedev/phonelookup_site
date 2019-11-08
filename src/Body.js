import React from 'react';

function Body() {
    return (
        <div className="Body-hero">
            <div className="Body-hero-txt">
                <h1>Let's find out who's calling you. </h1>
                <p>We provide one of the fastest reverse phone lookup services on the web.</p>
                <form className="Body-form">
                    <input type='text' name='Enter phone number.'/>
                    <input type='submit' value='Search'/>
                </form>    
            </div>
            
        </div>
    );
}

export default Body;