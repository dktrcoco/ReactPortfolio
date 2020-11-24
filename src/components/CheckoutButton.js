import React from 'react';
import "../styles/CheckoutButton.css";   

function CheckoutButton({href, message}) {
    return (
        <>
            <a className="button" href={href}>Check out the {message}</a>
        </>
    )
}

export default CheckoutButton;