import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import Request from "../utilities/Request";

export default function Home({ result }) {
  return (
    <div>
      <Head>
        <title>Create Next App </title>
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Nav />
      {/* Results */}
      <Result key={result?.id} results={result.results} />
    </div>
  );
}


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
