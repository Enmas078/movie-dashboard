import { omdbApi } from "../api/omdbApi";

type GetMoviesParams = {
  searchTerm?: string;
  year?: string;
  type?: string;
};

export const getMovies = async ({
  searchTerm = "avengers",
  year = "",
  type = "",
}: GetMoviesParams) => {
  const response = await omdbApi.get("/", {
    params: {
      s: searchTerm,
      y: year,
      type,
    },
  });

  return response.data.Search || [];
};
export const getMovieDetails =
  async (id: string) => {
    const response =
      await omdbApi.get("/", {
        params: {
          i: id,
          plot: "full",
        },
      });

    return response.data;
  };