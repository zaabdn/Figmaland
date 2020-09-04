import Head from "next/head";
import Homes from "../src/templates/Home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Figmaland - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homes />
      </main>
    </div>
  );
}
