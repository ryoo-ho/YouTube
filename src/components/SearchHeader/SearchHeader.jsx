import React, { useRef } from "react";
import styles from "./SearchHeader.module.css";

function SearchHeader({ onSearch }) {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo"></img>
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="search"
        onKeyPress={onKeyPress}
        ref={inputRef}
      ></input>
      <button className={styles.button} type="sumbit" onClick={onClick}>
        <img className={styles.buttonImg} src="/images/search.png"></img>
      </button>
    </header>
  );
}

export default SearchHeader;
