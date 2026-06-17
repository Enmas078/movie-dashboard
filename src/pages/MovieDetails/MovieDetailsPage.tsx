import {
  useParams,
  useNavigate,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../services/movieService";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () =>
      getMovieDetails(id || ""),
  });

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-[500px] bg-slate-800 rounded-xl" />
      </div>
    );
  }

  if (error) {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <h2 className="text-red-400 text-2xl">
        Failed to load movie
      </h2>
    </div>
  );
}

  return (
    <div className="text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-slate-700 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={movie?.Poster}
          alt={movie?.Title}
          className="rounded-xl w-full max-w-md"
        />

        <div>
          <h1 className="text-5xl font-bold mb-4">
            {movie?.Title}
          </h1>

          <p className="text-yellow-400 mb-4">
            ⭐ {movie?.imdbRating}
          </p>

          <p className="text-gray-300 mb-6">
            {movie?.Plot}
          </p>

          <div className="space-y-3">
            <p>
              <strong>Genre:</strong>{" "}
              {movie?.Genre}
            </p>

            <p>
              <strong>Released:</strong>{" "}
              {movie?.Released}
            </p>

            <p>
              <strong>Runtime:</strong>{" "}
              {movie?.Runtime}
            </p>

            <p>
              <strong>Director:</strong>{" "}
              {movie?.Director}
            </p>

            <p>
              <strong>Actors:</strong>{" "}
              {movie?.Actors}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;