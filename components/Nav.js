import { useRouter } from "next/router";
import Request from "../utilities/Request";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative border-b border-gray-800 pb-4">
      <div
        className="flex px-10 sm:px-20 whitespace-nowrap text-2xl 
      space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(Request).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genres=${key}`)}
            key={key}
            className=" select-none last:pr-24 cursor-pointer transition duration-100 transform: ;
                    hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-gray-900  h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
