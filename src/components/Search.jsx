import React, { useState } from 'react'

const Search = (prop) => {
    const [searchValue, setSearchValue] = useState('');

    const searchFunc = () => {
        return searchValue === '' ? prop.fetchFunc('iron') : prop.fetchFunc(searchValue)
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div>
            <div className="search">
                <input value={searchValue} type="text" onChange={ (e) => handleChange(e) } placeholder="Search . . ." />
                <button onClick={ () => searchFunc() }>SEARCH</button>
            </div>
        </div>
    )
}

export default Search