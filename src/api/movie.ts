import { IMovie } from "@/models/IMovie";
import { IMovieDetails } from "@/models/IMovieDetails";
import api from ".";
import { AxiosInstance } from "axios";
import { IMovieCredits } from "@/models/IMovieCredits";

export const getMovieDetails = (movieId: string | number) =>
  api.get<IMovieDetails>(`/movie/${movieId}`)

export const getMovieCredits = (movieId: string | number) =>
  api.get<IMovieCredits>(`movie/${movieId}/credits`)

export const getMovieGenres = (lang: string = 'en') =>
  api.get<{ genres: { id: string | number, name: string }[] }>(`/genre/movie/list?language=${lang}`)