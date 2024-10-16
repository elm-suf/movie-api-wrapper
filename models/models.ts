export type SearchInput = {
  query: string;
  // Defaults to false
  include_adult?: boolean;
  // Defaults to en-US
  language?: string;
  primary_release_year?: string;
  // Defaults to 1
  page?: number;
  region?: string;
  year: string;
};

export interface Search<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TV {
  id: number;
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
