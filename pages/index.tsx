import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { Feed, Sidebar, Widgets } from "../components";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface HomeProps {
  tweets: Tweet[];
}

const Home: NextPage<HomeProps> = ({ tweets }) => {

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter</title>
      </Head>

      <Toaster/>

      <main className="grid grid-cols-9">
        <Sidebar />

        <Feed tweets={tweets}/>

        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  };
};
