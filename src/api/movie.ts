import { Movie } from "@/models/Movie";
import { MovieDetails } from "@/models/MovieDetails";
import api from ".";
import { AxiosInstance } from "axios";

export const getMovieDetails = (movieId: string | number) =>
  api.get<MovieDetails>(`/movie/${movieId}`)

export const getMovieCredits = (movieId: string | number) =>
  api.get(`movie/${movieId}/credits`)
