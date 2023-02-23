import { type NextPage } from "next";
import Head from "next/head";
import GraphContainer from "../components/GraphContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Switches</title>
      </Head>
      <div className="h-screen w-screen">
        <GraphContainer />
      </div>
    </>
  );
};

export default Home;
