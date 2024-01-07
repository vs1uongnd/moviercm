import { getMoviesList } from "./api";
import MoviesList from "./components/MoviesList";

export default async function Home() {
  const data = await getMoviesList({ query: "now_playing", page: 1 });
  console.log(data);
  return (
    <>
      <div>
        <MoviesList />
      </div>
    </>
  );
}
