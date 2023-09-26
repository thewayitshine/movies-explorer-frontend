import { useState, useEffect } from 'react';
import useResize from '../../hooks/useResize';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css'

function SearchForm({ searchReq, onMoviesFilter, onEmptyReqMessage }) {
  const isChecked = JSON.parse(localStorage.getItem('filterCheckbox'));

  let size = useResize();

  const [isShortFilm, setIsShortFilm] = useState(isChecked);
  const [searchValue, setSearchValue] = useState('');
  
  useEffect(() => {
    if (searchReq.searchValue) {
      setSearchValue(searchReq.searchValue);
    }
  }, [searchReq.searchValue]);

  const checkFilterCheckbox = () => {
    if (searchValue !== '') {
      setIsShortFilm(!isShortFilm);

      onMoviesFilter({
        searchValue,
        isShortFilm: !isShortFilm
      });
    } else {
      setIsShortFilm(!isShortFilm);

      onMoviesFilter({
        searchValue: searchReq.searchValue,
        isShortFilm: !isShortFilm
      });
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue === '') {
      onEmptyReqMessage();
      return;
    }

    onMoviesFilter({ searchValue, isShortFilm });
  };

  return (
    <section className="search">
      <form className="search__form" name="search-form" onSubmit={handleSubmit} noValidate>
        { size.width <= 550 ? null : <span className="search__icon" /> }
        <input 
          className="search__input" 
          type="text" 
          name="search" 
          id="search" 
          placeholder="Фильм"
          value={searchValue || ''}
          onChange={handleChange} 
          required />
        <button 
          className="search__btn hover-opacity-btn"
          type="submit" 
          name="search-button" 
          aria-label="Найти" />
      </form>
      <FilterCheckbox
        isChecked={searchReq.isShortFilm}
        onCheckbox={checkFilterCheckbox} />
    </section>
  )
}

export default SearchForm;