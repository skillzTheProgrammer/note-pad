import React from 'react';

const Searchbar = ({setSearch}) => {
    const onChangeHandler =(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div>
            <input placeholder="Search Notes" onChange={onChangeHandler} />
        </div>
    );
}

export default Searchbar;
