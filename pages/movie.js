import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Request from "../utilities/Request";

const movie = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const id = router.query.id;
  const movie = result.results[id];
  return (
    <div>
      <Header />
      <Nav />
      <div className="grid md:pb-7 sm:grid-cols-1 grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 pt-4">
        <div className="flex flex-col items-start pl-6 ">
          <Image
            src={`${BASE_URL}${movie?.poster_path || movie?.backdrop_path}`}
            height={600}
            width={460}
            objectFit="contain"
          />
        </div>
        <div className="col-span-2 pt-4 md:pt-0 pl-5 md:pl-0 md:pr-4 pb-4 md:pb-0">
          <h1 className="text-2xl">{movie.title}</h1>
          <div className="mt-6 flex flex-col justify-evenly h-40">
            <h3>Release Date : {movie.release_date}</h3>
            <h3>
              <span className="bg-yellow-600 p-1 text-black">IMDB</span>
              <span className=" p-1 bg-black text-white">
                {movie.vote_average}
              </span>{" "}
              Rating By {movie.vote_count} User
            </h3>
          </div>

          <h3>
            Story Line <hr /> <br />
            {movie?.overview}
          </h3>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const genre = context.query.genres;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      Request[genre]?.url || Request.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      result: request,
    },
  };
}

export default movie;
