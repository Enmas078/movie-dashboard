import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getMovies } from "../../services/movieService";
import SearchBar from "../../components/common/SearchBar";
import useDebounce from "../../hooks/useDebounce";

const HomePage = () => {
  const [search, setSearch] =
    useState("");

  const [year, setYear] =
    useState("");

  const [type, setType] =
    useState("");

  const debouncedSearch =
    useDebounce(search);

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "movies",
      debouncedSearch,
      year,
      type,
    ],
    queryFn: () =>
      getMovies({
        searchTerm:
          debouncedSearch ||
          "avengers",
        year,
        type,
      }),
  });

  if (isLoading) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-xl h-[400px] animate-pulse"
        />
      ))}
    </div>
  );
}

  if (error) {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <h2 className="text-2xl font-bold text-red-400 mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-400">
        Failed to load movies.
        Please try again.
      </p>
    </div>
  );
}

  return (
    <div>
      <div className="mb-6 space-y-4">
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) =>
              setYear(e.target.value)
            }
            className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700"
          />

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
            className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700"
          >
            <option value="">
              All Types
            </option>

            <option value="movie">
              Movie
            </option>

            <option value="series">
              Series
            </option>
          </select>

          <button
            onClick={() => {
              setSearch("");
              setYear("");
              setType("");
            }}
            className="bg-red-500 px-4 py-2 rounded-lg"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">
        Movie Results
      </h1>

      {movies?.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies?.map((movie: any) => (
            <Link
              to={`/movie/${movie.imdbID}`}
              key={movie.imdbID}
              className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg hover:shadow-2xl block"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-[300px] object-cover"
              />

              <div className="p-4">
  <h2 className="font-bold text-lg line-clamp-1">
    {movie.Title}
  </h2>

  <div className="flex justify-between items-center mt-2">
    <p className="text-gray-400 text-sm">
      {movie.Year}
    </p>

    <span className="bg-blue-600 text-xs px-2 py-1 rounded">
      {movie.Type}
    </span>
  </div>
</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;