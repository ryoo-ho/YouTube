import React from "react";
import styles from "./SearchHeader.module.css";

function SearchHeader(props) {
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
      ></input>
      <button className={styles.button} type="sumbit">
        <img className={styles.button__img} src="/images/search.png"></img>
      </button>
    </header>
  );
}

export default SearchHeader;
