import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import Request from "../utilities/Request";

const Result = ({ results }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const genre = router.query.genres;

  return (
    <div className="flex justify-center py-6">
      <div
        className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 w-11/12 sm:grid-cols-1  mt-8
    justify-items-center gap-y-9 gap-x-3 cursor-pointer place-content-center"
      >
        {results?.map((res, key) => (
          <Link
            key={key}
            href={`/movie?genres=${genre}&id=${key}&title=${res.title}`||`/movie?genres=fetchTrending&id=${key}&title=${res.title}`}
          >
            <div
              key={key}
              onClick={() => {}}
              className=" flex flex-col  relative box-border"
            >
              <Image
                src={`${BASE_URL}${res.poster_path || res.backdrop_path}`}
                height={400}
                width={260}
                objectFit="contain"
                className="hover:scale-125 transform transition-all duration-500 "
              />
              <div className="text-1xl flex justify-between self-start w-11/12 ">
                <h1 className="">{res.title || res.original_title}</h1>
                  <p className="flex">
                    <ThumbUpIcon className="h-4 mr-4" /> {res.vote_average}
                  </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Result;
