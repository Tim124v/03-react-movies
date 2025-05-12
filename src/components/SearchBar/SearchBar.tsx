import React, { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value.trim());
    setValue('');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Powered by TMDB
        </a>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
            className={styles.input}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit" className={styles.button}>Search</button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar; 