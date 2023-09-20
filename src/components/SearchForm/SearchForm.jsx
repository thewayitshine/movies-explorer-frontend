import useResize from '../../hooks/useResize';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css'

function SearchForm() {
  let size = useResize();

  return (
    <section className="search">
      <div className="search__field">
        { size.width <= 550 ? null : <span className="search__icon" /> }
        <input className="search__input" type="text" name="search" id="search" placeholder="Фильм" />
        <button className="search__btn hover-opacity-btn" type="submit" name="search-button" aria-label="Найти" />
      </div>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;