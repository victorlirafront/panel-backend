import { StyledHeader, StyledInput } from '../styles/Header.styled';
import React, { useState, useContext } from 'react';
import { SearchPageContext } from '../../context/searchMovieinput';
import { useRouter } from 'next/router';

function Header() {
  const { setSearchMovie } = useContext(SearchPageContext);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('search', searchValue);
    const currentSearch = localStorage.getItem('search') || ''; // Corrigido para tratar null ou undefined
    router.replace('/search');
    setSearchMovie(currentSearch);
    setSearchValue('');
  };

  const goBackToHomePage = () => {
    router.push('/');
  };

  return (
    <StyledHeader>
      <h1 onClick={goBackToHomePage}>
        <span>i</span> Movies
      </h1>
      <form onSubmit={handleFormSubmit}>
        <StyledInput
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </form>
    </StyledHeader>
  );
}

export default Header;
