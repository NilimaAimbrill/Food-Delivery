import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../../App";
import styles from './SearchBar.module.css'


const SearchBar = () => {
    const contextData = useContext(LoginContext)

    return (
        <div className={styles.globalSearchBar}>
            <input type="text" value={contextData.query} onChange={contextData.handleInputChange} />
            <button onClick={contextData.handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
