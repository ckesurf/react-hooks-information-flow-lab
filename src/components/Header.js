import React from 'react';

const Header = (props) => {
    return (
        <div>
            <header>
                <h2>Shopster</h2>
                <button onClick={props.onDarkModeClick}>
                    {props.isDarkMode ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>
    );
}

export default Header;
