import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import MoviesWrapper from '../../src/components/MoviesWrapper';
import MovieItem from '../../src/components/MovieItem';
import { IMAGE_API, SEARCH_API } from '../../src/services/api/movieApi';
import { useContext } from 'react';
import { SearchPageContext } from '../../src/context/searchMovieinput';
import SearchPageProvider from '../../src/context/searchMovieinput';
import { getVoteAverage } from '../../src/helper/functions';
import LoadingSpinner from '../../src/components/ui/LoadingSpinner';
import NoMovieFound from '../../src/components/ui/NoMovieFound';

interface ISearchedMovie {
  image: string;
  title: string;
  vote: number;
  average: string;
  vote_average: number;
  poster_path: string;
  id: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IApiResponse {
  data: {
    results: ISearchedMovie[];
  };
}

function Search() {
  const router = useRouter();
  const { searchMovieValue } = useContext(SearchPageContext);
  const [allData, setAllData] = useState<ISearchedMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const current = localStorage.getItem('search');

    const fetchData = async () => {
      try {
        const response = await fetch(SEARCH_API + current);
        const data: IApiResponse = await response.json();

        console.log(data)
        
        setAllData(data.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchMovieValue]);

  const showMovieDetail = (e: React.MouseEvent<HTMLButtonElement>) => {
    const route = e.currentTarget.closest('.get-id')!.getAttribute('data-identifier')!;
    localStorage.setItem('movie-id', route);
    router.replace('search/' + route);
  };

  return (
    <SearchPageProvider>
      <MoviesWrapper>
        <Head>
          <title>Movie app</title>
          <meta
            name="description"
            content="Take a look at the most popular movies nowadays"
          />
        </Head>
        {!isLoading && allData.length === 0 && <NoMovieFound />}
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          allData.map((movie: ISearchedMovie) => (
            <MovieItem
              onClick={(e) => showMovieDetail(e)}
              id={movie.id}
              key={movie.id}
              average={getVoteAverage(movie.vote_average)}
              title={movie.title}
              vote={movie.vote_average}
              image={movie.poster_path && IMAGE_API + movie.poster_path}
            />
          ))}
      </MoviesWrapper>
    </SearchPageProvider>
  );
}

export default Search;
