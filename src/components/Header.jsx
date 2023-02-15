import React from 'react'
import Search from './Search';
import './../styles/search.css';

const Header = (prop) => {
    return (
        <nav>
            <a href="/">
                {prop.title}
            </a>
            <Search 
                fetchFunc={prop.fetchFunc}
            />
        </nav>
    )
}

export default Header