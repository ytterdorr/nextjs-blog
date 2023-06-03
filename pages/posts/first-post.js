import Link from "next/link";
import Head from "next/head";
import ProfileImage from "../../components/ProfilePicture";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>First Post</h1>
        <Link href="/">
          <h2>Back to Home</h2>
        </Link>
      </Layout>
    </>
  );
}
