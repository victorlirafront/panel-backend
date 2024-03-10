import React, { ReactNode, useState, createContext } from 'react';

interface Props {
  children: ReactNode;
}

interface SearchContextType {
  searchMovieValue: string;
  setSearchMovie: (arg: string) => void;
}

export const SearchPageContext = createContext<SearchContextType>({
  searchMovieValue: '',
  setSearchMovie: () => {},
});

export const SearchPageProvider = (props: Props) => {
  const [searchMovie, setSearchMovie] = useState<string>('');

  const handleSearchMovie = (inputValue: string) => {
    setSearchMovie(inputValue);
  };

  const contextValues: SearchContextType = {
    searchMovieValue: searchMovie,
    setSearchMovie: handleSearchMovie,
  };

  return (
    <SearchPageContext.Provider value={contextValues}>
      {props.children}
    </SearchPageContext.Provider>
  );
};

export default SearchPageProvider;