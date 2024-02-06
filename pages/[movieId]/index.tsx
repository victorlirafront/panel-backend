import Axios from "axios";
import MovieOverview from "../../src/components/MovieOverview";
import { FEATURED_API } from "../../src/services/api/movieApi";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import {
  GetServerSideProps,
} from "next";

interface IMovieOriginalResponse {
  vote_average: string;
  id: string;
  poster_path: string;
  title: string;
}

interface IMovieDetail {
  id: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  title: string;
  genres: { id: string; name: string }[];
  original_language: string;
  production_companies: { id: string; logo_path: string }[];
  videos: { results: { key: string }[] };
  revenue: number;
  budget: number;
  status: string;
}

interface IProps {
  movieDetail: IMovieDetail;
}

function MovieDetails(props: IProps) {
  const { movieDetail } = props;
  const router = useRouter();

  const backToRoute = function () {
    router.replace("/");
  };

  return (
    <React.Fragment>
      <Head>
        <title> Movie Overview </title>
        <meta
          name="description"
          content="Checkout all the details about your favorite movie"
        ></meta>
      </Head>
      <MovieOverview
        backToRoute={backToRoute}
        movieDetail={movieDetail}
        trailer={
          movieDetail.videos.results.length > 0
            ? movieDetail.videos.results[0].key
            : "/GgZpCtBXw"
        }
      />
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { movieId } = params!;

  try {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=04c35731a5ee918f014970082a0088b1&append_to_response=videos`
    );

    return {
      props: {
        movieDetail: response.data,
      },
    };
  } catch (error) {
    console.error("Erro ao obter detalhes do filme:", error);

    return {
      props: {
        movieDetail: null,
      },
    };
  }
};

export const getServerSidePaths: any = async () => {
  try {
    const response = await Axios.get(FEATURED_API);

    const paths = response.data.results.map((movie: any) => ({
      params: { movieId: movie.id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Erro ao obter dados da API:", error);

    return {
      paths: [],
      fallback: false,
    };
  }
};

export default MovieDetails;
